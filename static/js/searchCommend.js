function areaSelectHideOrShow(){
    $('.0').hide();
    $('.haerbin').hide();
    $('.qiqihaer').hide();
    $('.jixi').hide();
    $('.hegang').hide();
    $('.shuangyashan').hide();
    $('.daqing').hide();
    $('.yichun').hide();
    $('.jiamusi').hide();
    $('.qitaihe').hide();
    $('.mudanjiang').hide();
    $('.heihe').hide();
    $('.suihua').hide();
    $('.daxinganling').hide();
    $('.nongkenzongju').hide();
    $('.sengongzongju').hide();
    }
function typeHideOrShow(){
	$('#0').hide();
    $('#0102010000range').hide();
    $('#0102020000range').hide();
    $('#0102030000range').hide();
    $('#0102040000range').hide();
    $('#0102050000range').hide();
    $('#0102060000range').hide();
    $('#0102070000range').hide();
    $('#0102080000range').hide();
    $('#0102090000range').hide();
    $('#0102100000range').hide();
    $('#0102110000range').hide();
}
function districtWatch(){
	$('#heilongjiang').bind('change',function(){
        switch($('#heilongjiang').val()){
            case '0':
                areaSelectHideOrShow();
                break;
            case '1923010100':
                areaSelectHideOrShow();
                $('.haerbin').show();
                break;
            case '1923020100':
                areaSelectHideOrShow();
                $('.qiqihaer').show();
                break;
            case '1923030100':
                areaSelectHideOrShow();
                $('.jixi').show();
                break;
            case '1923040100':
                areaSelectHideOrShow();
                $('.hegang').show();
                break;
            case '1923050100':
                areaSelectHideOrShow();
                $('.shuangyashan').show();
                break;
            case '1923060100':
                areaSelectHideOrShow();
                $('.daqing').show();
                break;
            case '1923070100':
                areaSelectHideOrShow();
                $('.yichun').show();
                break;
            case '1923080100':
                areaSelectHideOrShow();
                $('.jiamusi').show();
                break;
            case '1923090100':
                areaSelectHideOrShow();
                $('.qitaihe').show();
                break;
            case '1923100100':
                areaSelectHideOrShow();
                $('.mudanjiang').show();
                break;
            case '1923110100':
                areaSelectHideOrShow();
                $('.heihe').show();
                break;
            case '1923120100':
                areaSelectHideOrShow();
                $('.suihua').show();
                break;
            case '1923130100':
                areaSelectHideOrShow();
                $('.daxinganling').show();
                break;
            case '1923140100':
                areaSelectHideOrShow();
                $('.nongkenzongju').show();
                break;
            case '1923150100':
                areaSelectHideOrShow();
                $('.sengongzongju').show();
                break;
        }
    })
}
function mineTypeWatch(){
	$('#0102000000Choose').bind('change',function(){
        switch($('#0102000000Choose').val()){
            case '0':
                typeHideOrShow();
                break;
            case '0102010000':
                typeHideOrShow();
                $('#0102010000range').show();
                break;
            case '0102020000':
                typeHideOrShow();
                $('#0102020000range').show();
                break;
            case '0102030000':
                typeHideOrShow();
                $('#01020300000range').show();
                break;
            case '0102040000':
                typeHideOrShow();
                $('#0102040000range').show();
                break;
            case '0102050000':
                typeHideOrShow();
                $('#0102050000range').show();
                break;
            case '0102060000':
                typeHideOrShow();
                $('#0102060000range').show();
                break;
            case '0102070000':
                typeHideOrShow();
                $('#0102070000range').show();
                break;
            case '0102080000':
                typeHideOrShow();
                $('#0102080000range').show();
                break;
            case '0102090000':
                typeHideOrShow();
                $('#0102090000range').show();
                break;
            case '0102100000':
                typeHideOrShow();
                $('#0102100000range').show();
                break;
            case '0102110000':
                typeHideOrShow();
                $('#0102110000range').show();
                break;
        }
    })
}
$(document).ready(function(){
	
	areaSelectHideOrShow();
	typeHideOrShow();
	districtWatch();
	mineTypeWatch();
	
    //许可证变更延期查询
    $('#securityTransfergetExcel').click(function(){
    	window.open('PermitChangeExcelServlet');
    })
    $('#securityTransferTableButton').click(function(){

        function securityTransferTable(c){

            var f = function(b){
                option = {
                    id : "userlog",
                    total : b.total,
                    pagination : true,
                    functionName : securityTransferTable,
                    tableCheckboxValIndex : 0,
                    col : [{
                        isCheckbox : false,
                        index : 1,
                        fun : null,
                        name : '持证单位',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 12,
                        fun : null,
                        name : '许可证号',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 6,
                        fun : null,
                        name : '受理日期',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 7,
                        fun : null,
                        name : '业务类型',
                        minWidth : 80,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 4,
                        fun : null,
                        name : '业务状态',
                        minWidth : 50,
                        show : true,
                        sortable : false
                    },
//                    {
//                        isCheckbox : false,
//                        index : 11,
//                        fun : null,
//                        name : '所属地区',
//                        minWidth : 80,
//                        show : true,
//                        sortable : false
//                    },
                    {
                        isCheckbox : false,
                        index : 8,
                        fun : null,
                        name : '联系电话',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    }]
                };
                $('#userlog').makeTbody(b.data,option);
            }
            var e = {
                businessType: $("#businessType").find("option:selected").val(),
                type: $("#type").find("option:selected").val(),
                keyword: $('.usercompany').val(),
                offset : (parseInt(c.page) - 1) * limit,
                limit : limit
            }
//            f(a);
            pcdata('post', 'PermitChangePostponeQueryServlet', e, 'json', false, f);
        }
        securityTransferTable({page:1})
        
//        $('select').find("option:selected").text("全部");
    })
    
    //企业许可证数量统计
    $('licenseNumbergetExcel').click(function(){
    	window.open('EnterpriseNumExcelServlet');
    })
    $('#licenseNumberTableButton').click(function(){
        var name = $('#heilongjiang').find("option:selected").attr('name')
        var mineType = $('#0102000000Choose').find("option:selected").attr('name')
        function licenseNumberTable(c){
            var f = function(b){
                option = {
                    id : "userlog",
                    total : b.total,
                    pagination : true,
                    functionName : licenseNumberTable,
                    tableCheckboxValIndex : 0,
                    col : [{
                        isCheckbox : false,
                        index : 0,
                        fun : null,
                        name : '企业名称',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 1,
                        fun : null,
                        name : '申请单位数',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 2,
                        fun : null,
                        name : '许可证数',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    }]};
                
                $('#userlog').makeTbody(b.data,option);
            }
            var e = {
                enterpriseName:$('.usercompany').val(),
                enterpriseType:$('#enterpriseType').find('option:selected').val(),
                district: $('.' + name).find("option:selected").val(),
                mineralsType: $('#' + mineType).find("option:selected").val(),
                economyType:$('#economyType').find("option:selected").val(),
                mineMethod: '',
                offset : (parseInt(c.page) - 1) * limit,
                limit : limit
            }
//            f(a)
            pcdata('post', 'EnterprisePermitsNumQueryServlet', e, 'json', false, f)
        }
        licenseNumberTable({page:1});
         
//        $('select').find("option:selected").text("全部");
    })
    //安全许可证组合查询
    $('#safeSecuritygetExcel').click(function(){
    	window.open('SecurityExcelServlet');
    })
    $('#safeSecurityTableButton').click(function(){
        var name = $('#heilongjiang').find("option:selected").attr('name')
        var mineType = $('#0102000000Choose').find("option:selected").attr('name')
        function safeSecurityTable(c){
            var f = function(b){
            	changearea(b)
                option = {
                    id : "userlog",
                    total : b.total,
                    pagination : true,
                    functionName : safeSecurityTable,
                    tableCheckboxValIndex : 0,
                    col : [{
                        isCheckbox : false,
                        index : 0,
                        fun : null,
                        name : '企业名称',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 1,
                        fun : null,
                        name : '单位类型',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 2,
                        fun : null,
                        name : '所在地区',
                        minWidth : 60,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 3,
                        fun : null,
                        name : '经济类型',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    },
//                    {
//                        isCheckbox : false,
//                        index : 4,
//                        fun : null,
//                        name : '主要矿种',
//                        minWidth : 80,
//                        show : true,
//                        sortable : false
//                    },
//                    {
//                        isCheckbox : false,
//                        index : 5,
//                        fun : null,
//                        name : '设计生产能力',
//                        minWidth : 80,
//                        show : true,
//                        sortable : false
//                    },
//                    {
//                        isCheckbox : false,
//                        index : 14,
//                        fun : null,
//                        name : '实际生产能力',
//                        minWidth : 80,
//                        show : true,
//                        sortable : false
//                    },
//                    {
//                        isCheckbox : false,
//                        index : 6,
//                        fun : null,
//                        name : '开采方式',
//                        minWidth : 60,
//                        show : true,
//                        sortable : false
//                    },
                    {
                        isCheckbox : false,
                        index : 7,
                        fun : null,
                        name : '主要负责人',
                        minWidth : 50,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 8,
                        fun : null,
                        name : '安全负责人',
                        minWidth : 50,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 9,
                        fun : null,
                        name : '从业人数',
                        minWidth : 40,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 13,
                        fun : null,
                        name : '许可证号',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 11,
                        fun : null,
                        name : '发证时间',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 12,
                        fun : null,
                        name : '失效时间',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    }]};
                
                $('#userlog').makeTbody(b.data,option);
            }
            var e = {
                enterpriseName:$('.usercompany').val(),
                organizationName:'',
                organizationType:$('#getCompanyType').find('option:selected').val(),
                district:$('.' + name).find("option:selected").val(),
                mineralsType:'',//$('#' + mineType).find("option:selected").val()
                economyType:$('#economyType').find("option:selected").val(),
                mineMethod:'',//$('#mineMethod').find("option:selected").val()
                offset : (parseInt(c.page) - 1) * limit,
                limit : limit
            }
//            f(a)
            pcdata('post', 'SecurityPermitsQueryServlet', e, 'json', false, f)
        }
        safeSecurityTable({page:1});
        
//        $('select').find("option:selected").text("全部");
    })
    //尾矿库许可证组合查询
    $('#tailSafeSecuritygetExcel').click(function(){
    	window.open('TailingsExcelServlet');
    })
    $('#tailSafeSecurityTableButton').click(function(){
        var name = $('#heilongjiang').find("option:selected").attr('name')
        function tailSafeSecurityTable(c){
            var f = function(b){
            	tailschangearea(b);
                option = {
                    id : "userlog",
                    total : b.total,
                    pagination : true,
                    functionName : tailSafeSecurityTable,
                    tableCheckboxValIndex : 0,
                    col : [
//                    {
//                        isCheckbox : false,
//                        index : 0,
//                        fun : null,
//                        name : '申请单位',
//                        minWidth : 130,
//                        show : true,
//                        sortable : false
//                    },
                    {
                        isCheckbox : false,
                        index : 1,
                        fun : null,
                        name : '取证单位',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 3,
                        fun : null,
                        name : '所在地区',
                        minWidth : 60,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 8,
                        fun : null,
                        name : '经济类型',
                        minWidth : 80,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 2,
                        fun : null,
                        name : '许可证号',
                        minWidth : 130,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 9,
                        fun : null,
                        name : '发证时间',
                        minWidth : 110,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 10,
                        fun : null,
                        name : '失效时间',
                        minWidth : 110,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 4,
                        fun : null,
                        name : '库等别',
                        minWidth : 160,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 6,
                        fun : null,
                        name : '安全度',
                        minWidth : 80,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 7,
                        fun : null,
                        name : '设计总库容',
                        minWidth : 80,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 5,
                        fun : null,
                        name : '库类型',
                        minWidth : 100,
                        show : true,
                        sortable : false
                    },
                    {
                        isCheckbox : false,
                        index : 11,
                        fun : null,
                        name : '筑坝方式',
                        minWidth : 110,
                        show : true,
                        sortable : false
                    }]};
                
                $('#userlog').makeTbody(b.data,option);
            }
            var e = {
                enterpriseName:$('.usercompany').val(),
                organizationName:'',
                district:$('.' + name).find("option:selected").val(),
                economyType: $('#economyType').find('option:selected').val(),
                bankType: $('#bankType').find('option:selected').val(),
                safetyLevel: $('#safetyLevel').find('option:selected').val(),
                bankLevel: $('#bankLevel').find('option:selected').val(),
                dammingMethod:$('#dammingMethod').find('option:selected').val(),
                offset : (parseInt(c.page) - 1) * limit,
                limit : limit,
            }
//            f(a)
            pcdata('post', 'TailingsPondPermitsQueryServlet', e, 'json', false, f)
        }
        tailSafeSecurityTable({page:1})
         
//        $('select').find("option:selected").text("全部");
    })
})
