function getweminingInfo(c){
	var f = function(b){
		option = {
            id : "company",
            total : b.total,
            pagination : true,
            functionName : getweminingInfo,
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
                index : 3,
                fun : null,
                name : '有效期开始',
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
		keyword:$('#companyname').val()
	}
//	f({"message":"ok","data":[["1","1","\u77ff\u5c71\u751f\u4ea7\u7cfb\u7edf"],["15545256929","55","\u91d1\u5c5e\u975e\u91d1\u5c5e\u77ff\u5c71\u4f01\u4e1a"],["1","qwqwe","\u91d1\u5c5e\u975e\u91d1\u5c5e\u77ff\u5c71\u4f01\u4e1a"],["1","zxc","\u91d1\u5c5e\u975e\u91d1\u5c5e\u77ff\u5c71\u4f01\u4e1a"]],"total":4})
	pcdata('post','FindMindPermitServlet',e,false,'json',f)
	
}
function getExcel(){
	window.open("FindMindPermitServletToExcel");
}
$(document).ready(function(){
	
	getweminingInfo({page:1})
})