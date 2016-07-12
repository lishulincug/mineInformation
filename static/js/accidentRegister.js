function userlog2(c){
    var f = function(b){
        option = {
            id : "userlog",
            total : b.total,
            pagination : true,
            functionName : userlog2,
            tableCheckboxValIndex : 0,
            col : [
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
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '事故类型',
                minWidth : 60,
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
                minWidth :80,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 7,
                fun : null,
                name : '报告日期',
                minWidth : 80,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 8,
                fun : null,
                name : '死亡人数',
                minWidth : 60,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 9,
                fun : null,
                name : '重伤人数',
                minWidth : 60,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 10,
                fun : null,
                name : '轻伤人数',
                minWidth : 70,
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
        $('#accidentRegister').makeTbody(b.data,option);
    }
    var e = {
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        companyName:"",
    }
//            f(a)
     pcdata('post', 'SelectAccidentLogServlet', e, 'json', false, f)
}
$(document).ready(function(){
    userlog2({page:1,type:'log'});
})