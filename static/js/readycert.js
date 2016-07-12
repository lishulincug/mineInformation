function getreadycerttable(c){
    var f = function(b){
        option = {
            id : "readycert",
            total : b.total,
            pagination : true,
            functionName : getreadycerttable,
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
            }]};
        $('#ready').makeTbody(b.data,option);
    }
    var e = {
        keyword:$('.readyquery').val(),
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit
    }
    f({total:100,data:[[1,'asdf','gasdf'],[2,'asdf','gasdf'],[3,'asdf','gasdf'],[4,'asdf','gasdf']
        ,[5,'asdf','gasdf'],[6,'asdf','gasdf'],[1,'asdf','gasdf'],[1,'asdf','gasdf'],[1,'asdf','gasdf']
        ,[1,'asdf','gasdf'],[1,'asdf','gasdf'],[1,'asdf','gasdf'],[1,'asdf','gasdf']
        ,[1,'asdf','gasdf'],[1,'asdf','gasdf']]})
    //pcdata('post', 'getreadytable', e, 'json', false, f)
}

function getreadyinfo(){
    if ($('input:checked').length != 1){
        return false;
    }
    window.location.href = 'companyinfo.html?type=1&id=' + $('input[type=checkbox]:checked').val()
}

$(document).ready(function(){
    getreadycerttable({page:1})
    $('input[type="checkbox"]').click(function(){
        if ($('input:checked').length == 1){
            $('.info').removeClass('disabled');
        }else{
            $('.info').addClass('disabled')
        }
    })
})