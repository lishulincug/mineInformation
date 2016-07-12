function userlog(c){
    a={total:100,data:[
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg'],
    ["1",'asdf','gasdfga','asdfg']]}
    var f = function(b){
        option = {
            id : "userlog",
            total : b.total,
            pagination : true,
            functionName : userlog,
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
                name : '企业名称',
                minWidth : 100,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 2,
                fun : null,
                name : '申请单位数',
                minWidth : 60,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 3,
                fun : null,
                name : '许可证数',
                minWidth : 90,
                show : true,
                sortable : false
            }]};
        $('#userlog').makeTbody(b.data,option);
    }
    
    var e = {
        startdate : $('#stime').val(),
        enddate : $('#etime').val(),
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        user:$('.userlist select').val()
    }
    f(a)
    // pcdata('post', 'userlog', e, 'json', false, f)
}

function selectallcheckbox(a) {
    if (a.checked) {
        $('input[name="userlog_cb0"]').attr("checked", "checked");
        var c = parseInt($(".userlog_total").html());
        if (c > limit || limit == 100) {
            message("warning", "\u63d0\u793a", '\u662f\u5426\u8981\u9009\u62e9\u5168\u90e8 <span class="st sample_total2"></span> \u4e2a\u6587\u4ef6\uff1f<a href="#" onclick="allfile($(this).parent().parent());return false;">\u9009\u62e9\u5168\u90e8</a>');
            // $(".badusb_total2").html(c)
        }
    } else {
        all = 0;
        $('input[name="userlog_cb0"]').removeAttr("checked");
        // $(".st").parent().parent().hide()
    }
}

function deluserlog(){
    var f = function(b){
        message('success',"成功",'删除数据成功')
        userlog({page:1});
    }
    var status = 0
    $('input[type="checkbox"]').each(function(index,element){
        if ($(this).is(':checked')){
            status = 1
        }
    })
    if (status == 0){
        message('warring','错误!','未选择任何数据')
        return false;
    }
    var h = []
    if ($('#selectallcheckbox').is(':checked')) {
        if (all == -1) {
            h = [-1]
        }
        else{
            $('tbody input[type="checkbox"]').each(function(index, element){
                if ($(this).is(':checked')) {
                    h.push($(this).val());
                };
            })
        }
    }
    $.each(h,function(i,v){
        alert(v)
    })
    var e = {
        data:h
    }
    f({})
    // pcdata('post', 'deluserlog', e, 'json', false, f)
}


$(document).ready(function(){
    var f = function(b){
        var q = ''
        for (var i = 0; i<b.data.length; i++) {
            q += '<option value ="'+ i[0] + '"'
            if (i[1] == b.user){
                q += ' selected'
            }
            q += '>'+ i[1] +'</option>'
        };
        $('.userlist select').append(p);
        $('.usercompany').html(b.company)
    }
    var b = {
        user:username
    }
    // pcdata('post', 'userlist', b, 'json', false, f)
    userlog({page:1,type:'log'})
})