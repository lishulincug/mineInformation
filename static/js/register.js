function userlog2(c){
            var f = function(b){
                option = {
                    id : "userlog",
                    total : b.total,
                    pagination : true,
                    functionName : userlog2,
                    tableCheckboxValIndex : 0,
                    col : [{
                        isCheckbox : true,
                        index : 0,
                        fun : null,
                        name : '<input type="checkbox" id="selectallcheckbox" onclick="selectallcheckbox(this)"/>',
                        minWidth : 20,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 1,
                        fun : null,
                        name : '单位名称',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 3,
                        fun : null,
                        name : '负责人',
                        minWidth : 60,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 4,
                        fun : null,
                        name : '事故类型',
                        minWidth : 90,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 5,
                        fun : null,
                        name : '事故原因',
                        minWidth : 210,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 6,
                        fun : null,
                        name : '事故日期',
                        minWidth : 160,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 7,
                        fun : null,
                        name : '报告日期',
                        minWidth : 160,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 8,
                        fun : null,
                        name : '死亡人数',
                        minWidth : 80,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 9,
                        fun : null,
                        name : '重伤人数',
                        minWidth : 80,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 10,
                        fun : null,
                        name : '轻伤人数',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 2,
                        fun : null,
                        name : '备注',
                        minWidth : 110,
                        show : true,
                        sortable : false
                    }]};
                $('#userlog1').makeTbody(b.data,option);
            }
            var e = {
                offset : (parseInt(c.page) - 1) * limit,
                limit : limit,
                companyName:$('.usercompany').val()
            }
//            f(a)
             pcdata('post', 'SelectAccidentLogServlet', e, 'json', false, f)
        }
function getExcel(){
	window.open("GetAccidentExcel");
}
$(document).ready(function(){
	userlog2({page:1,type:'log'})
    $('#searchButton').click(function(){
    	userlog2({page:1,type:'log'})
    })
    $('#postExcel').click(function(){
    	getExcel();
    })
    $('#register').click(function(){
        var p = '<div id="registerAlert" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
            <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
                <h3 id="myModalLabel">企业事故登记</h3>\
            </div>\
            <div class="modal-body">\
                <div id="userlog">\
                    <div class="control-group">\
                        <span>&nbsp;&nbsp;单位名称:</span>\
                        <input type="text" class="usercompanyAlert" style="width: 300px;"/>\
                    </div>\
                    <div class="control-group" style="margin-top:10px;">\
                        <button type="button" class="btn btn-info" id="search" style="width:80px;">查询</button>\
        				<button type="button" class="btn btn-info disabled" id="save" style="width:80px;">保存</button>\
                    </div>\
                </div>\
            </div>\
        </div>'
        $('.popbox').append(p);
        $('#registerAlert').modal({keyboard:false,backdrop:'static'});
        $('#choose').hide();
        
        $('#userlogTable').hide();
        $('#userlogPager').hide();
        
        $('.accidentReasonAlert').remove();
        
        $('#search').click(function(){
            function userlog(b){
                var f = function(b){
                    option = {
                        id : "userlog",
                        total : b.total,
                        pagination : true,
                        functionName : userlog,
                        tableCheckboxValIndex : 0,
                        col : [
                        {
                            isCheckbox : true,
                            index : 0,
                            fun : null,
                            name : '<input type="checkbox" id="selectallcheckbox"/>',
                            minWidth : 20,
                            show : true,
                            sortable : false
                        },
                        {
                            isCheckbox : false,
                            index : 1,
                            fun : null,
                            name : '单位名称',
                            minWidth : 100,
                            show : true,
                            sortable : false
                        },
                        {
                            isCheckbox : false,
                            index : 8,
                            fun : null,
                            name : '负责人',
                            minWidth : 100,
                            show : true,
                            sortable : false
                        },
                        {
                            isCheckbox : false,
                            index : 3,
                            fun : null,
                            name : '单位地址',
                            minWidth : 100,
                            show : true,
                            sortable : false
                        },
                        {
                            isCheckbox : false,
                            index : 0,
                            fun : null,
                            name : '单位类型',
                            minWidth : 100,
                            show : true,
                            sortable : false
                        }]
                    };
                    
                    $('#userlog').makeTbody(b.data,option);
                    $('.accidentReasonAlert').remove();
                    $('#userlogPager').after('<div class="control-group accidentReasonAlert" style="margin-top:20px;">\
                            <span>事故类型:</span>\
                            <select class="form-control" id="accident" style="width: 314px;">\
                                <option value="请选择">请选择</option>\
                                <option value="灼烫">灼烫</option>\
                                <option value="机械伤害">机械伤害</option>\
                                <option value="火灾">火灾</option>\
                                <option value="透水">透水</option>\
                                <option value="起重伤害">起重伤害</option>\
                                <option value="高处坠落">高处坠落</option>\
                                <option value="触电">触电</option>\
                                <option value="中毒和窒息">中毒和窒息</option>\
                                <option value="其他伤害">其他伤害</option>\
                                <option value="车辆伤害">车辆伤害</option>\
                                <option value="放炮">放炮</option>\
                                <option value="锅炉爆炸">锅炉爆炸</option>\
                                <option value="其他爆炸">其他爆炸</option>\
                                <option value="淹溺">淹溺</option>\
                                <option value="冒顶片帮">冒顶片帮</option>\
                                <option value="火药爆炸">火药爆炸</option>\
                                <option value="坍塌">坍塌 </option>\
                                <option value="容器爆炸">容器爆炸</option>\
                                <option value="瓦斯爆炸">瓦斯爆炸</option>\
                                <option value="物体打击">物体打击</option>\
                            </select>\
                        </div>\
                        <div class="control-group accidentReasonAlert">\
                            <label>事故原因:</label>\
                            <textarea id="reason" style="width:448px;"></textarea>\
                        </div>\
                        <div class="control-group accidentReasonAlert" >\
                            <span>事故日期:</span>\
                            <input type="text" id="stime" class="stime" value="" onclick="laydate()" style="width: 145px" />\
                            <span>&nbsp;&nbsp;&nbsp;报告日期:</span>\
                            <input type="text" id="etime" class="etime" value="" onclick="laydate()" style="width: 145px"/>\
                        </div>\
                        <div class="control-group accidentReasonAlert">\
                            <span>死亡人数:</span>\
                            <input type="text" id="dead" style="width: 65px;"/>&nbsp;&nbsp;&nbsp;\
                            <span>重伤人数:</span>\
                            <input type="text" id="heavy" style="width: 65px;"/>&nbsp;&nbsp;&nbsp;\
                            <span>轻伤人数:</span>\
                            <input type="text" id="low" style="width: 65px;"/>\
                        </div>\
                        <div class="control-group accidentReasonAlert">\
                            <label>备注:</label>\
                            <textarea id="other" style="width:448px;"></textarea>\
                        </div>\
                        <div class="control-group" style="margin-top:10px;">\
                        </div>')
                        $('input[type="checkbox"]').click(function(){
                            if ($('input:checked').length == 1){
                                $('#save').removeClass('disabled');
                            }else if($('input:checked').length == 0){
                                $('#save').addClass('disabled');
                                alert('至少选择一项');
                            }else{
                                $('#save').addClass('disabled');
                                alert('只能选择一项');
                            }
                        });
                }
                
//                f({total:100,data:[
//                    ['1','dsfdf','c','d'],['2','b','c','d'] 
//                ]})
                var e = {
                	companyname: $('.usercompanyAlert').val(),
                	companytype:"",
                	offset : (parseInt(b.page) - 1) * limit,
                    limit : limit
                }
      
                pcdata('post', 'FindUnitByUnittypeServlet', e, 'json', false, f);
                $("#save").click(function(){
                	var checktime = /\d{4}-[0-1]\d-[0-3]\d/;
                	if($('#reason').val() == ""){
//                		alert("请填写完整信息");
                	}
                	else{
                		if ($('.stime').val() != ""){
                            if (!checktime.test($('.stime').val())){
                                $('.stime').parent().addClass('error');
                                message("error", '错误!', '查询时间格式不正确');
                                return false;
                            }
                            else{
                                $('.stime').parent().removeClass('error');
                            }
                        }
                        if ($('.etime').val() != ""){
                            if (!checktime.test($('.etime').val())){
                                $('.etime').parent().addClass('error');
                                message("error", '错误!', '查询时间格式不正确');
                                return false;
                            }
                            else{
                                $('.etime').parent().removeClass('error');
                            }
                        }
                        if ($('input:checked').length == 1){
                            var e = {
                                companyName: $('input:checked').parent().next().html(),
                                corporation: $('input:checked').parent().next().next().html(),
                                accidentType: $('#accident').find('option:selected').val(),
                                accidentCase: $('#reason').val(),
                                accidentDate: $('#stime').val(),
                                
                                dieNum: $('#dead').val(),
                                heavyWoundNum: $('#heavy').val(),
                                slightWoundNum: $('#low').val(),
                                remarks: $('#other').val()
                            }
                            
                            var f = function(b){
                                location.reload()
                            }
                            $('#registerAlert').modal('hide')
//                            f({data:[
//                             ['1','dsfdf','c','d'    ]
//                            ]})
                             pcdata('post', 'AccidentLogServlet', e, 'json', false, f);
//                            $('select').find("option:selected").text("请选择");
                        }else{
                            return false;
                        }
                	}
                    
                });
            }
            userlog({page:1});
            
            
            $('#choose').addClass('disabled');
            $('#choose').show();
            $('#selectallcheckbox').hide();


            
        });
    });
})