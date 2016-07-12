function getbusinesstable(c){
    var url = GetRequest()
    var f = function(b){
        readycert = {
            id : "readycert",
            total : b.total,
            pagination : true,
            functionName : getbusinesstable,
            tableCheckboxValIndex : 0,
            col : [{
                isCheckbox : true,
                index : 0,
                fun : null,
                name : '选择',
                minWidth : 20,
                width:30,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 5,
                fun : null,
                name : '受理编号',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 1,
                fun : null,
                name : '申请单位',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 2,
                fun : null,
                name : '取证单位',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 7,
                fun : null,
                name : '业务类型',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 6,
                fun : null,
                name : '受理时间',
                minWidth : 120,
                show : true,
                sortable : false
            }]};
        issued = {
            id : "readycert",
            total : b.total,
            pagination : true,
            functionName : getbusinesstable,
            tableCheckboxValIndex : 0,
            col : [{
                isCheckbox : true,
                index : 0,
                fun : null,
                name : '选择',
                minWidth : 20,
                width:30,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 1,
                fun : null,
                name : '申请单位',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 2,
                fun : null,
                name : '取证单位',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 12,
                fun : null,
                name : '许可证号',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 6,
                fun : null,
                name : '发证日期',
                minWidth : 120,
                show : true,
                sortable : false
            }]};
        refissude = {
            id : "readycert",
            total : b.total,
            pagination : true,
            functionName : getbusinesstable,
            tableCheckboxValIndex : 0,
            col : [{
                isCheckbox : true,
                index : 0,
                fun : null,
                name : '选择',
                minWidth : 20,
                width:30,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 1,
                fun : null,
                name : '申请单位',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 2,
                fun : null,
                name : '取证单位',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 6,
                fun : null,
                name : '受理时间',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 11,
                fun : null,
                name : '拒绝原因',
                minWidth : 120,
                show : true,
                sortable : false
            }]};
        var tablejson = {
            "1":readycert,
            "2":issued,
            "3":refissude
        }
        $('#ready').makeTbody(b.data,tablejson[url['type']]);
        $('input[type="checkbox"]').click(function(){
            if ($('input[type="checkbox"]:checked').length == 1){
            	
                $('.info').removeClass('disabled');
            }else{
                $('.info').addClass('disabled');
            }
        })
    }
    var typejson = {
        "1":"待发",
        "2":"已发",
        "3":"拒发",
    }
    var e = {
        type:typejson[url['type']],
        keyword:$('.readyquery').val(),
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        businessType : "",
    }
//    f({total:100,data:[["4","2","2","\u77f3\u58a8","\u62d2\u53d1","11","2015\u002e10\u002e24","\u5ef6\u671f","13766818497","2015\u002e10\u002e24","\u5f20\u4e09",null,null],
//        ["8","\u5927\u5e86\u6cb9\u7530\u8428\u5357\u5b9e\u4e1a\u516c\u53f8","\u5927\u5e86\u6cb9\u7530\u8428\u5357\u5b9e\u4e1a\u516c\u53f8","\u9646\u4e0a\u91c7\u6cb9\uff08\u6c14\uff09\u3001\u94bb\u4e95\u3001\u7269\u63a2","\u5f85\u53d1","112","2015/10/24","\u7533\u8bf7","77364733","2015/10/24","\u674e\u56db",null,null]]})
     pcdata('post', 'PermitChangePostponeQueryServlet', e, 'json', false, f)
}

function getreadyinfo(){
    if ($('input:checked').length != 1){
        return false;
    }
    var url = GetRequest()
    window.location.href = 'companyinfo.html?type='+ url['type'] +'&id=' + $('input[type=checkbox]:checked').val()
}
function getExcel(){
    	var Request = GetRequest();
    	type = Request['type'];
//    	switch(type){
//    		case '1':
//    			type = "待发";
//    			break;
//    		case '2':
//    			type = "已发";
//    			break;
//    		case '3':
//    			type = "拒发";
//    			break;
//    	}
    	window.open("GetTransactionExcelServlet"+"?type="+type)
    	
}
$(document).ready(function(){
    getbusinesstable({page:1})
})