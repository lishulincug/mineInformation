//企业信息组合查询统计
function clickSearch(){

    var name = $('#heilongjiang').find("option:selected").attr('name');
    var mineType = $('#0102000000Choose').find("option:selected").attr('name');

    function companyInfoSearchTable(c){
        var f = function(b){
        	changearea(b);
            option = {
                id : "userlog",
                total : b.total,
                pagination : true,
                functionName : companyInfoSearchTable,
                tableCheckboxValIndex : 0,
                col : [{
                    isCheckbox : false,
                    index : 0,
                    fun : null,
                    name : '单位名称',
                    minWidth : 130,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 1,
                    fun : null,
                    name : '单位地址',
                    minWidth : 110,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 2,
                    fun : null,
                    name : '所在地区',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 3,
                    fun : null,
                    name : '法定代表人',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 4,
                    fun : null,
                    name : '法人办公电话',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 5,
                    fun : null,
                    name : '经济类型',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 6,
                    fun : null,
                    name : '主要矿种',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 7,
                    fun : null,
                    name : '开采方式',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 8,
                    fun : null,
                    name : '设计生产能力',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 9,
                    fun : null,
                    name : '实际生产能力',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 10,
                    fun : null,
                    name : '从业人数',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 11,
                    fun : null,
                    name : '安全负责人',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 12,
                    fun : null,
                    name : '安全负责人电话',
                    minWidth : 90,
                    show : true,
                    sortable : false
                }]};
            
            $('#userlog').makeTbody(b.data,option);
        }
        
        var e = {
            enterpriseName: $('.usercompany').val(),
            enterpriseType: $("#companyType").find("option:selected").val(),
            district: $('.' + name).find("option:selected").val(),
            mineralsType: $('#' + mineType).find("option:selected").val(),
            economyType: $('#economyType').find('option:selected').val(),
            mineMethod: $('#mineMethod').find('option:selected').val(),
            offset : (parseInt(c.page) - 1) * limit,
            limit : limit
        }
        pcdata('post', 'EnterpriseInformationQueryServlet', e, 'json', false, f)
    }
    companyInfoSearchTable({page:1});    
}

function jumpSearch(){

    var name = $('#heilongjiang').find("option:selected").attr('name');
    var mineType = $('#0102000000Choose').find("option:selected").attr('name');

    var Request = GetRequest();
    var id = Request['id'];
    var address = Request['type'];
    switch(id){
    case '01':
        id = '地下矿山企业';
        $("#companyType option[value='地下矿山企业']").attr('selected',true);
        break;
    case '02':
        id = '露天矿山企业';
        $("#companyType option[value='露天矿山企业']").attr('selected',true);
        break;
    case '03':
        id = '小型露天采石场';
        $("#companyType option[value='小型露天采石场']").attr('selected',true);
        break;
    case '04':
        id = '石油天然气开采企业';
        $("#companyType option[value='石油天然气开采企业']").attr('selected',true);
        break;
    case '05':
        id = '采掘施工企业';
        $("#companyType option[value='采掘施工企业']").attr('selected',true);
        break;
    case '06':
        id = '地址勘探企业';
        $("#companyType option[value='地址勘探企业']").attr('selected',true);
        break;
    case '07':
        id = '尾矿库';
        $("#companyType option[value='尾矿库']").attr('selected',true);
        break;
    }
    switch(address){
    case 'hrb':
        address = '1923010100';
        $("#heilongjiang option[value='1923010100']").attr('selected',true);
        break;
    case 'qq':
        address = '1923020100';
        $("#heilongjiang option[value='1923020100']").attr('selected',true);
        break;
    case 'mdj':
        address = '1923100100';
        $("#heilongjiang option[value='1923100100']").attr('selected',true);
        break;
    case 'jms':
        address = '1923080100';
        $("#heilongjiang option[value='1923080100']").attr('selected',true);
        break;
    case 'dq':
        address = '1923060100';
        $("#heilongjiang option[value='1923060100']").attr('selected',true);
        break;
    case 'jx':
        address = '1923030100';
        $("#heilongjiang option[value='1923030100']").attr('selected',true);
        break;
    case 'sys':
        address = '1923050100';
        $("#heilongjiang option[value='1923050100']").attr('selected',true);
        break;
    case 'yc':
        address = '1923070100';
        $("#heilongjiang option[value='1923070100']").attr('selected',true);
        break;
    case 'qth':
        address = '1923090100';
        $("#heilongjiang option[value='1923090100']").attr('selected',true);
        break;
    case 'hg':
        address = '1923040100';
        $("#heilongjiang option[value='1923040100']").attr('selected',true);
        break;
    case 'hh':
        address = '1923110100';
        $("#heilongjiang option[value='1923110100']").attr('selected',true);
        break;
    case 'sh':
        address = '1923120100';
        $("#heilongjiang option[value='1923120100']").attr('selected',true);
        break;
    case 'dxal':
        address = '1923272100';
        $("#heilongjiang option[value='1923272100']").attr('selected',true);
        break;
    case 'nkzj':
        address = '1923280100';
        $("#heilongjiang option[value='1923280100']").attr('selected',true);
        break;
    case 'sgzj':
        address = '1923290100';
        $("#heilongjiang option[value='1923290100']").attr('selected',true);
        break;
    case 'sfh':
        address = '1923108100';
        $("#heilongjiang option[value='1923108100']").attr('selected',true);
        break;
    case 'fy':
        address = '1923083300';
        $("#heilongjiang option[value='1923083300']").attr('selected',true);
        break;
    }
    console.log(id);

    function companyInfoSearchTable(c){
        var f = function(b){
        	changearea(b);
            option = {
                id : "userlog",
                total : b.total,
                pagination : true,
                functionName : companyInfoSearchTable,
                tableCheckboxValIndex : 0,
                col : [{
                    isCheckbox : false,
                    index : 0,
                    fun : null,
                    name : '单位名称',
                    minWidth : 130,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 1,
                    fun : null,
                    name : '单位地址',
                    minWidth : 110,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 2,
                    fun : null,
                    name : '所在地区',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 3,
                    fun : null,
                    name : '法定代表人',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 4,
                    fun : null,
                    name : '法人办公电话',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 5,
                    fun : null,
                    name : '经济类型',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 6,
                    fun : null,
                    name : '主要矿种',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 7,
                    fun : null,
                    name : '开采方式',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 8,
                    fun : null,
                    name : '设计生产能力',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 9,
                    fun : null,
                    name : '实际生产能力',
                    minWidth : 80,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 10,
                    fun : null,
                    name : '从业人数',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 11,
                    fun : null,
                    name : '安全负责人',
                    minWidth : 60,
                    show : true,
                    sortable : false
                },
                {
                    isCheckbox : false,
                    index : 12,
                    fun : null,
                    name : '安全负责人电话',
                    minWidth : 90,
                    show : true,
                    sortable : false
                }]};
            
            $('#userlog').makeTbody(b.data,option);
        }
        
        var e = {
            enterpriseName: $('.usercompany').val(),
            enterpriseType: id,
            district: address,
            mineralsType: $('#' + mineType).find("option:selected").val(),
            economyType: $('#economyType').find('option:selected').val(),
            mineMethod: $('#mineMethod').find('option:selected').val(),
            offset : (parseInt(c.page) - 1) * limit,
            limit : limit
        }
        pcdata('post', 'EnterpriseInformationQueryServlet', e, 'json', false, f)
    }
    companyInfoSearchTable({page:1}); 
}
$(document).ready(function(){
    jumpSearch();
    $('#companyInfogetExcel').click(function(){
    	window.open('EnterpriseInformationExcelServlet');
    })
    $('#companyInfoSearchTableButton').click(function(){
        clickSearch();
    })
})