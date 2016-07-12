function getwesafety(c){
	var f = function(b){
		
		option = {
            id : "company",
            total : b.total,
            pagination : true,
            functionName : getwesafety,
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
                name : '单位名s称',
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
        $('#wesafety').makeTbody(b.data,option);
	}
	var e = {
		day:90,
		limit:limit,
		offset : (parseInt(c.page) - 1) * limit,
		keyword:$('.companyname').val(),
		area:$('.area').val()
	}
	pcdata('post','permit/mature',e,false,'json',f)
}

function getwemining(c){
	var f = function(b){
		option = {
            id : "company",
            total : b.total,
            pagination : true,
            functionName : getwemining,
            tableCheckboxValIndex : 0,
            col : [{
                isCheckbox : false,
                index : 0,
                fun : null,
                name : '许可证编号',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 1,
                fun : null,
                name : '单位名称',
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
            }]
		};
        $('#wemining').makeTbody(b.data,option);
        
	}
	var e = {
		limit:limit,
		offset : (parseInt(c.page) - 1) * limit,
		keyword:$('.companyname').val(),
		area:$('.area').val()
	}
//	f({"message":"ok","data":[["1","1","\u77ff\u5c71\u751f\u4ea7\u7cfb\u7edf"],["15545256929","55","\u91d1\u5c5e\u975e\u91d1\u5c5e\u77ff\u5c71\u4f01\u4e1a"],["1","qwqwe","\u91d1\u5c5e\u975e\u91d1\u5c5e\u77ff\u5c71\u4f01\u4e1a"],["1","zxc","\u91d1\u5c5e\u975e\u91d1\u5c5e\u77ff\u5c71\u4f01\u4e1a"]],"total":4})
	pcdata('post','FindWillOverMindPermitServlet',e,false,'json',f)
	
}
function getExcel(){
	window.open('permit/excel_m' + '?day=90' + '&unit_name=' + $('.companyname').val()); 
}
$(document).ready(function(){
	getwesafety({page:1})
	getwemining({page:1})
	$('.search').click(function(){
		getwesafety({page:1})
		getwemining({page:1})
	})
})