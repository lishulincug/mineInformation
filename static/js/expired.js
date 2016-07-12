function getesafety(c){
	var f = function(b){
		option = {
            id : "safety",
            total : b.total,
            pagination : true,
            functionName : getesafety,
            tableCheckboxValIndex : 0,
            col : [{
                isCheckbox : false,
                index : 1,
                fun : null,
                name : '许可证编号',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 2,
                fun : null,
                name : '单位名称',
                minWidth : 160,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '经济类型',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 9,
                fun : null,
                name : '到期时间',
                minWidth : 120,
                show : true,
                sortable : false
            }]};
        $('#esafety').makeTbody(b.data,option);
	}
	var e = {
		day:0,
		limit:limit,
		offset : (parseInt(c.page) - 1) * limit,
		keyword:$('.companyname').val(),
		area:$('.area').val()
	}
	pcdata('post','permit/mature',e,false,'json',f)
}

function getemining(c){
	var f = function(b){
		option = {
            id : "mining",
            total : b.total,
            pagination : true,
            functionName : getemining,
            tableCheckboxValIndex : 0,
            col : [{
                isCheckbox : false,
                index : 0,
                fun : null,
                name : '单位名称',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 1,
                fun : null,
                name : '单位地址',
                minWidth : 160,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 2,
                fun : null,
                name : '单位类型',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '有效期结束',
                minWidth : 120,
                show : true,
                sortable : false
            }]};
        $('#emining').makeTbody(b.data,option);
	}
	var e = {
		limit:limit,
		offset : (parseInt(c.page) - 1) * limit,
		keyword:$('.companyname').val(),
		area:$('.area').val()
	}
	pcdata('post','FindOverMindPermitServlet',e,false,'json',f)
}
function getExcel(){
	window.open('permit/excel_m?day=0');
}
$(document).ready(function(){
	getesafety({page:1})
	getemining({page:1})
})