function getsafetylicensetable(c){
    var f = function(b){
        options = {
            id : "safetylicense",
            total : b.total,
            pagination : true,
            functionName : getsafetylicensetable,
            tableCheckboxValIndex : 0,
            col : [
            {
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
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 5,
                fun : null,
                name : '单位负责人',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 8,
                fun : null,
                name : '有效期开始',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 9,
                fun : null,
                name : '有效期结束',
                minWidth : 120,
                show : true,
                sortable : false
            }]};
            //许可证id，许可证编号，单位名称，地址，经济，单位负责人，发放日期，许可范围，有效期开始，有效期结束
        $('#safetylicenseStatistics').makeTbody(b.data,options)
    }
    var e ={
            //unit_name 单位名称 (可选)
            // * status 状态 (可选)
            // * arrange 状态 (可选)
            //// * start_from 起始时间开始(可选)
            // *  终止时间结束(可选)
            unit_name: "",
            start_from: "",
            end_to: "",
            status: "",
            arrange: "",
            offset : (parseInt(c.page) - 1) * limit,
            limit : limit
    };
//    f({total:10,data:[[1,2,3,4],[1,2,3,4]]})
     pcdata('post','permit/query',e,'json',false,f)
}
$(document).ready(function(){
    getsafetylicensetable({page:1});
    $('#safetylicensePager').css('background','#000');
})