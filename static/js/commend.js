(function(c) {
    c.limit = 15;
    c.columnname = "";
    c.orderby = "";
    c.getLocalTime = function() {
        var h = new Date();
        var i = String(h.getHours()).length == 2 ? h.getHours() : "0" + h.getHours();
        var g = String(h.getMinutes()).length == 2 ? h.getMinutes() : "0" + h.getMinutes();
        var b = String(h.getSeconds()).length == 2 ? h.getSeconds() : "0" + h.getSeconds();
        return "Local Time: " + i + ":" + g + ":" + b
    }();


    c.fn.makeTbody = function(o, n, r) {
        var v = c(this).attr("id");
        if (c[v + "tablePage"] == undefined) {
            c[v + "tablePage"] = 1
        }
        c[v + "gdt"] = function(d) {
            n.functionName(d)
        };
        c("#" + v + "Table").remove();
        c("#" + v + "Selection").remove();
        c("#" + v + "Pager").remove();
        var q = '<table id="' + v + 'Table" class="table table-striped table-bordered table-condensed">';
        if (o.length != 0) {
            q = q + "<thead><tr>";
            for (var i = 0; i < n.col.length; i++) {
                if (n.col[i].isCheckbox) {
                    q = q + '<th class="' + v + "_col"
                } else {
                    q = q + '<th class="' + v + "_col" + n.col[i].index
                }
                if (n.col[i].sort == c.columnname) {
                    if (c.orderby == "DESC") {
                        q = q + " headerSortDown "
                    } else {
                        if (c.orderby == "") {
                            q = q + " headerSortUp "
                        }
                    }
                }
                if (n.col[i].sortable) {
                    q = q + ' sortable" onclick="$.sort(\'' + v + "','" + n.col[i].sort + "',$(this)) "
                }
                var u = " width:auto; ";
                if (n.col[i].width != undefined) {
                    u = " width:" + n.col[i].width + "px; "
                }
                q = q + '" style="' + u + "min-width:" + n.col[i].minWidth + 'px">' + n.col[i].name + "</th>"
            }
            q = q + "</tr></thead><tbody>";
            for (var b = 0; b < o.length; b++) {
                q = q + '<tr id="' + v + "TableTr" + b + '">';
                for (var i = 0; i < n.col.length; i++) {
                    if (n.col[i].isCheckbox) {
                        q = q + '<td class="' + v + '_col"><input value="' + o[b][n.tableCheckboxValIndex] + '" type="checkbox" name="' + v + "_cb" + n.col[i].index + '" /></td>'
                    } else {
                        q = q + '<td class="' + v + "_col" + n.col[i].index + '">';
                        if (n.col[i].fun != null || n.col[i].fun != undefined) {
                            q = q + n.col[i].fun(o[b][n.col[i].index])
                        } else {
                            if (o[b][n.col[i].index] != null){
                                q = q + o[b][n.col[i].index]
                            }else{
                                q = q + '-'
                            }
                        }
                        q = q + "</td>"
                    }
                }
                q = q + "</tr>"
            }
        } else {
            q = q + "<tbody><tr><th>No Data</th></tr></tbody>"
        }
        q = q + "</tbody></table>";
        var t = "";
        var b = [];
        c(this).after(q);
        if (n.pagination) {
            c._makePager(v, n.total)
        }
        c('input[name="' + n.id + '_checkbox"]').click(function() { 
            c._selection(n.id, c(this))
        });
        for (var i = 0; i < n.col.length; i++) {
            if (n.col[i].isCheckbox) {
                var p = i;
                c[n.id + "checked"] = [];
                c('input[name="' + n.id + "_cb" + n.col[p].index + '"]').click(function() {
                    c._tableCheckboxClick(n.id, c(this), n.col[p].index)
                })
            }
        }
    };
    c.sort = function(b, i, g) {
        var h = [];
        c('input[name="' + b + '_checkbox"]').each(function() {
            if (c(this).attr("checked") == undefined) {
                h.push(c(this).val())
            }
        });
        c[b + "tableSelection"] = h;
        if (g.hasClass("headerSortUp")) {
            g.removeClass("headerSortUp");
            g.addClass("headerSortDown");
            c.orderby = "DESC";
            orderby = "DESC"
        } else {
            if (g.hasClass("headerSortDown")) {
                g.removeClass("headerSortDown");
                g.addClass("headerSortUp");
                c.orderby = "";
                orderby = ""
            } else {
                g.addClass("headerSortUp");
                c.orderby = "";
                orderby = ""
            }
        }
        c.columnname = i;
        columnname = i;
        c[b+"gdt"]({
            page : 1,
            type : b
        })
    };
    c._selection = function(b, g) {
        var i = g.val();
        if (g.attr("checked") == undefined) {
            g.removeAttr("checked");
            c("." + b + "_col" + i).hide()
        } else {
            g.attr("checked", "checked");
            c("." + b + "_col" + i).show()
        }
        var h = [];
        c('input[name="' + b + '_checkbox"]').each(function() {
            if (c(this).attr("checked") == undefined) {
                h.push(c(this).val())
            }
        });
        c[b + "tableSelection"] = h
    };
    c._tableCheckboxClick = function(b, f, g) {
        c[b + "checked"] = [];
        c('input[name="' + b + "_cb" + g + '"]:checked').each(function() {
            c[b + "checked"].push(c(this).val())
        })
    };
    c._makePager = function(b, g) {
        var f = '<div id="' + b + 'Pager" class="pagination" style="display:block;"><ul>';
        f = f + '<li><a href="#" class="p-g first">\u9996\u9875</a></li>';
        f = f + '<li><a href="#" class="p-g prev">\u4e0a\u9875</a></li>';
        f = f + '<li class="active"><b>';
        f = f + '<input id="' + b + '_gonumber" value="' + c[b + "tablePage"] + '" style="height:16px;width:30px;border:1px solid #CCCCCC;position: relative;" />';
        f = f + '<span class="divider">/</span> ';
        f = f + '<span id="' + b + '_totalpage" class="divider">' + Math.ceil(g / c.limit) + '</span>\u9875 (\u5171<span class="' + b + '_total">' + g + "</span>\u6761)";
        f = f + "</b></li>";
        f = f + '<li><a href="#" class="p-g next">\u4e0b\u9875</a></li>';
        f = f + '<li><a href="#" class="p-g last">\u672b\u9875</a></li>';
        f = f + "</ul></div>";
        c("#" + b + "Table").after(f);
        c(".p-g").click(function() {
            switch(c(this).attr("class")) {
                case"p-g first":
                    c.toFirstPage(b);
                    break;
                case"p-g prev":
                    c.toPrevPage(b);
                    break;
                case"p-g next":
                    c.toNextPage(b);
                    break;
                case"p-g last":
                    c.toLastPage(b);
                    break
            }
            return false
        });
        c("#" + b + "_gonumber").keyup(function(d) {
            c.toPageEnter(d, b)
        })
    };
    c.toFirstPage = function(b) {
        if (c("#" + b + "_gonumber").val() == "1") {
            return false
        }
        c[b + "tablePage"] = 1;
        c[b+"gdt"]({
            page : 1,
            type : b
        })
    };
    c.toNextPage = function(b) {
        var d = parseInt(c("#" + b + "_gonumber").val());
        var h = parseInt(c("#" + b + "_totalpage").html());
        if (d == h || h == 0) {
            return false
        }
        d++;
        c[b + "tablePage"] = d;
        c[b+"gdt"]({
            page : d,
            type : b
        })
    };
    c.toPrevPage = function(f) {
        var b = parseInt(c("#" + f + "_gonumber").val());
        if (b == 1) {
            return false
        }
        b--;
        c[f + "tablePage"] = b;
        c[f+"gdt"]({
            page : b,
            type : f
        })
    };
    c.toLastPage = function(b) {
        var d = parseInt(c("#" + b + "_gonumber").val());
        var h = parseInt(c("#" + b + "_totalpage").html());
        if (d == h || h == 0) {
            return false
        }
        c[b + "tablePage"] = h;
        c[b+"gdt"]({
            page : h,
            type : b
        })
    };
    c.toPageEnter = function(b, e) {
        if (b.keyCode == 13) {
            c.toPage(e)
        }
    };
    c.toPage = function(b) {
        var d = parseInt(c("#" + b + "_gonumber").val());
        var h = parseInt(c("#" + b + "_totalpage").html());
        if (isNaN(d) || (d < 1 || d > h)) {
            return false
        }
        c[b + "tablePage"] = d;
        c[b+"gdt"]({
            page : d,
            type : b
        })
    }
})(window.jQuery);


document.write('<script type="text/javascript" src="static/js/bootstrap.min.js"></script>');
document.write('<script type="text/javascript" src="static/js/laydate.dev.js"></script>');
document.write('<script type="text/javascript" src="static/js/jquery.md5.js"></script>');
document.write('<script type="text/javascript" src="static/js/jquery-ui-1.8.20.custom.min.js"></script>');
document.write('<script type="text/javascript" src="static/js/zTree/jquery.ztree.all-3.1.min.js"></script>')
document.write('<link type="text/css" href="static/js/zTree/zTreeStyle/zTreeStyle.css" rel="stylesheet" />')

var username;
var lvl;
var limit = 15;
var columnname = "";
var orderby = "";
var all = 0
var treeObj;
    var zNodes;
    var usertreesetting = {
        view : {
            selectedMulti : false
        },
        edit : {
            enable : false
        },
        callback : {
            onClick : getuser
        },
        data : {
            key : {
                name : "name"
            },
            simpleData : {
                enable : true
            }
        }
    };
//提示
var messageTimer = "";
function message(k, i, h) {
    var l = "\u4e0elayout\u51b2\u7a81";
    var j = new Date();
    var d = j.getHours() + ":" + j.getMinutes() + ":" + j.getSeconds();
    $("body>.alert").removeClass("alert-");
    $("body>.alert").removeClass("alert-alert");
    $("body>.alert").removeClass("alert-success");
    $("body>.alert").removeClass("alert-error");
    $("body>.alert").removeClass("alert-warning");
    $("body>.alert").removeClass("alert-*");
    $("body>.alert").addClass("alert-" + k);
    $("body>.alert strong").html(i);
    $("body>.alert span").html(" [" + d + "] : " + h);
    $("body>.alert").show("slide", {
        direction : "up"
    }, 500, function() {
        var b = $(this);
        clearTimeout(messageTimer);
        if ($("body>.alert").hasClass("alert-success")) {
            messageTimer = setTimeout(function() {
                b.hide("drop", {
                    direction : "up"
                }, 500, null)
            }, 2000)
        } else {
            if ($("body>.alert").hasClass("alert-error")) {
                messageTimer = setTimeout(function() {
                    b.hide("drop", {
                        direction : "up"
                    }, 500, null)
                }, 30000)
            } else {
                messageTimer = setTimeout(function() {
                    b.hide("drop", {
                        direction : "up"
                    }, 500, null)
                }, 15000)
            }
        }
    });
    return 0
}
function hideMessage(b) {
    clearTimeout($.messageTimer);
    b.hide("drop", {
        direction : "up"
    }, 500, null)
}

function allfile(b){
    hideMessage(b);
    all = -1;
}

//ajax传输
function pcdata (qtype, qurl, qdata, qdatatype, qcache, qsuccess) {
    qdata.order = columnname;
    qdata.orderby = orderby
    $.ajax({
        type: qtype,
        url: qurl,
        data: JSON.stringify(qdata),
        dataType: qdatatype,
        cache: qcache,
        success: function(i){
        	if (typeof i == "string") {
        		i = JSON.parse(i);
        	}
        	
            if (i.message == "ok") {
                if (qsuccess != null) {
                    qsuccess(i)
                }
            } else {
                if (i.message == "sess") {
                    window.location.href = "/MeiKuang"
                } else {
                    message('error','错误!',i.message);
                }
            }
        },
//        error:function(i){
//        	alert(i.message)
//        }
    })
}

// function selectallcheckbox(a) {
//     if (a.checked) {
//         $('input[type="checkbox"]').attr("checked", "checked");
//     } else {
//         $('input[type="checkbox"]').removeAttr("checked");
//     }
// }

function toPageEnter(b, e, c) {
    if (b.keyCode == 13) {
        toPage(e, c)
    }
}

function toPage(g, h) {
    var f = parseInt($("#" + g + "_gonumber").val());
    var e = parseInt($("#" + g + "_totalpage").html());
    if (isNaN(f) || (f < 1 || f > e)) {
        return false
    }
    h({
        page : f,
        type : g
    })
}

function toFirstPage(c, d) {
    if ($("#" + c + "_pagenumber").val() == "1") {
        return false
    }
    d({
        page : 1,
        type : c
    })
}

function toPrevPage(d, e) {
    var f = parseInt($("#" + d + "_pagenumber").html());
    if (f == 1) {
        return false
    }
    f--;
    e({
        page : f,
        type : d
    })
}

function toLastPage(g, h) {
    var f = parseInt($("#" + g + "_pagenumber").html());
    var e = parseInt($("#" + g + "_totalpage").html());
    if (f == e || e == 0) {
        return false
    }
    h({
        page : e,
        type : g
    })
}

function toNextPage(g, h) {
    var f = parseInt($("#" + g + "_pagenumber").html());
    var e = parseInt($("#" + g + "_totalpage").html());
    if (f == e || e == 0) {
        return false
    }
    f++;
    h({
        page : f,
        type : g
    })
}

function pwcheck(){
    if($('#changepassword .password').val() == ""){
        $('#changepassword .perror').html('密码不能为空');
        $('#changepassword .perror').show();
        $('#changepassword .password').parent().addClass('error');
        return false
    }
    if($('#changepassword .pwident').val() != $('#changepassword .password').val()){
        $('#changepassword .perror').html('两次密码不一致');
        $('#changepassword .perror').show();
        $('#changepassword .pwident').parent().addClass('error');
        $('#changepassword .password').parent().addClass('error');
        return false
    }
    $('#changepassword .perror').hide();
    $('#changepassword .pwident').parent().removeClass('error');
    $('#changepassword .password').parent().removeClass('error');
    return true
}

function getusertree(){
	var f = function(b){
		zNodes = [{"id":0,"pId":-1,"name":'用户',"icon":"static/js/zTree/zTreeStyle/img/diy/2.png"}];
		for(var i=1;i<=b.data.length;i++){
			var s = {"id":b.data[i-1][0],"pId":0,"name":b.data[i-1][1]}
			zNodes.push(s)
		}
	    treeObj = $.fn.zTree.init($("#tree"), usertreesetting, zNodes);
	    treeObj.expandAll(true);
	    treeObj.selectNode(treeObj.getNodes()[0]);
	}
	pcdata('post', 'userlist', {}, 'json', false, f);
}
    
function getuser(){
    $('#usertree .username').attr('readonly',true);
    if (treeObj.getSelectedNodes()[0].id){
        var f = function(b){
        	$('#usertree .password').val('')
        	$('#usertree .pw').val('')
            $('#usertree input[type="text"]').attr('readonly',true)
            $('#usertree .modal-body a').each(function(){
                $(this).removeClass('disabled')
            })
            $('#usertree.userrole').prevAll().each(function(){
                $(this).removeAttr('checked')
            })
            $('#usertree .username').val(b.userid);
            $('#usertree .name').val(b.name);
            $('#usertree .phone').val(b.phone);
            $('#usertree .area').val(b.address)
            $('#usertree .company').val(b.unit)
            if (b.lvl == 1){
                $('#usertree .entry').attr('checked',true);
            }else{
                $('#usertree .query').attr('checked',true);
            }
        }
        var e = {
            userid:treeObj.getSelectedNodes()[0].id
        }
        // f({'name':treeObj.getSelectedNodes()[0].name,'role':1})
        pcdata('post', 'getuserinfo', e, 'json', false, f);
    }else{
        $('#usertree .icon-remove,\
          #usertree .icon-ok').each(function(){
            $(this).parent().addClass('disabled')
        })
        $('#usertree input').each(function(){
            if ($(this).attr('type') == 'text' || $(this).attr('type') == 'password'){
                $(this).val('')
            }
            if ($(this).attr('type') == 'radio'){
                $(this).removeAttr("checked")
            }
        })
    }
}

function createuser(){
    treeObj.selectNode(treeObj.getNodes()[0]);
    $('#usertree input').each(function(){
        if ($(this).attr('type') == 'text' || $(this).attr('type') == 'password'){
            $(this).val('')
            $(this).attr('readonly',false)
        }
        if ($(this).attr('type') == 'radio'){
            $(this).removeAttr("checked")
        }
    })
    $('#usertree .username').removeAttr('readonly')
    $('#usertree .icon-ok,#usertree .icon-minus-sign').each(function(){
            $(this).parent().removeClass('disabled')
        })
}
function saveuserinfo(b){
    if(!checkdisabled(b)){
        return false
    }
    var f = function(b){
        message('success','成功','保存成功')
        getusertree()
        getuser()
    }
    var role = 1
    if ($('#usertree .query').is(':checked')){
        role = 2
    }
    if ($('#usertree .password').val() != $('#usertree .pw').val()){
    	alert("密码不一致")
    	return false
    }
    var e = {
        userid:$('#usertree .username').val(),
        name:$('#usertree .name').val(),
        address:$('#heilongjiang').find("option:selected").val(),
        password:$.md5($('#usertree .password').val()),
        phone:$('#usertree .phone').val(),
        unit:$('#usertree .company').val(),
        role:role
    }
    // f()
    pcdata('post', 'saveuserinfo', e, 'json', false, f);
}

function deluserinfo(b){
    if(!checkdisabled(b)){
        return false
    }
    var f = function(b){
        message('success','成功','删除用户成功');
        userreplace()
    }
    var e = {
        id:treeObj.getSelectedNodes()[0].id
    }
    // f()
    pcdata('post', 'deluserinfo', e, 'json', false, f);
}

function userreplace(){
    getusertree()
    getuser()
}

//在url中获取参数
function GetRequest() {
   // 参数为url中"?"符后的字串
   var url = window.location.search
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
         //escape() 编码的字符串进行解码
      }
   }
   return theRequest;
}

function checkdisabled(b){
    if (b.hasClass('disabled')){
        return false;
    }
    return true
}

function gettext(id){
    return $('.' + id +' option[value="' + $(id).val() + '"]').text()
}

$(document).ready(function() {
    var g = '<div class="hide alert">';
    g = g + '<a class="close" href="#" onclick="hideMessage($(this).parent());return false;">\u00d7</a>';
    g = g + "<strong></strong><span></span>";
    g = g + "</div>";
    $("body").prepend(g);
    //nav
    var f = function(b){
        username = b.user;
        lvl = b.lvl;
        var p = '<ul class="nav nav-tabs" style="background:#f6f6f6;margin:0px;">\
                <li class="dropdown">\
                <a class="dropdown-toggle" data-toggle="dropdown">系统工具</a>\
                <ul class="dropdown-menu">\
                <li><a class="changepassword">修改密码...</a></li>'
        if (lvl == 0) {
            p += '<li><a href="userlog.html" class="userlog">操作员登陆情况</a></li>'
        };
        p += '<li class="divider"></li>'
        if (lvl == 0) {
            p += '<li><a class="usermanage">用户管理</a></li>'
        };
        p += '<li><a class="messageAlertButton">发送短信</a></li>\
        		<li><a class="signOut">退出登录</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
                        业务列表\
                    </a>\
                    <ul class="dropdown-menu">\
                        <li><a href="business.html?type=1">待发证列表</a></li>\
                        <li><a href="business.html?type=2">已发证列表</a></li>\
                        <li><a href="business.html?type=3">拒发证列表</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
                        业务功能\
                    </a>\
                    <ul class="dropdown-menu">\
                        <li><a class="applyLicense">安全许可证申请</a></li>\
                        <li><a class="deferLicense">安全许可证延期</a></li>\
                        <li><a class="changeLicense">安全许可证变更</a></li>\
                        <li class="divider"></li>\
                        <li><a href="register.html">企业安全事故登记</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
            单位信息\
                    </a>\
                    <ul class="dropdown-menu">\
                        <li><a href="company.html">单位信息</a></li>\
                        <li class="disabled"><a href="#" onclick="return false;">停止生产经营活动的企业</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
            许可证信息\
                    </a>\
                    <ul class="dropdown-menu">\
                        <li><a href="safetylicense.html">安全许可证列表</a></li>\
                        <li><a href="mininglicense.html">采矿许可证列表</a></li>\
                        <li class="divider"></li>\
                        <li><a href="willexpire.html">将到期证件查询</a></li>\
                        <li><a href="expired.html">已到期证件查询</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
                        三同时管理\
                    </a>\
                    <ul class="dropdown-menu">\
                        <li><a class="applyThreeTogether">三同时设计审查</a></li>\
                        <li><a href="searchThreeTogether.html">三同时设计查询</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
                        统计查询\
                    </a>\
                    <ul class="dropdown-menu">\
                        <li><a href="licenseIssuingStatistics.html">许可证情况统计</a></li>\
                        <li><a href="licenseCompany.html">许可证单位类型统计</a></li>\
                        <li class="divider"></li>\
                        <li><a href="safeSecuritySearch.html">安全许可证组合查询</a></li>\
                        <li><a href="tailSafeSecuritySearch.html">尾矿库许可证组合查询</a></li>\
                        <li><a href="securityTransferExtensionSearch.html">许可证变更延期查询</a></li>\
                        <li class="divider"></li>\
                        <li><a href="companyInfoSearchPop.html">企业信息组合查询统计</a></li>\
                        <li><a href="licenseNumberStatistics.html">企业许可证数量统计</a></li>\
                    </ul>\
                </li>\
                <li class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">\
                        政策法规\
                    </a>\
                    <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">\
                        <li><a href="licenseMethod.html">许可证实施办法(总局20号令)</a></li>\
        				<li><a href="licenseMethod36.html">许可证实施办法(总局36号令)</a></li>\
                        <li class="dropdown-submenu">\
                            <a href="#"  tabindex="-1">20号令相关附件</a>\
                            <ul class="dropdown-menu" style="border-radius: 0 6px 6px 0;">\
                                <li><a onclick="window.open();">《非煤矿山企业安全生产许可证申请书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证审查书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证延期申请书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证延期审查书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证变更申请书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证变更审查书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证申请材料补正告知书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证申请受理通知书》</a></li>\
                                <li><a href="">《非煤矿山企业安全生产许可证申请不予受理通知书》</a></li>\
                                <li><a href="">《不予颁发非煤矿山企业安全生产许可证通知书》</a></li>\
                                <li><a href="">有关文书填写说明</a></li>\
                            </ul>\
                        </li>\
                        <li class="divider"></li>\
                        <li><a href="aboutlaw.html">加强许可证信息报送工作(管一函[2009]27号)</a></li>\
                    </ul>\
                </li>\
                <li><a href="index.html">返回首页</a></li>\
            </ul>'
        $("#nav").append(p);
        $('.user').append(username);
        $('.welcome').append(username)
        $('.signOut').click(function(){
        	location.href="./";
        })
        //修改密码
        $('.changepassword').click(function(){
            $('.popbox').append('<div id="changepassword" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display:none;width:400px;">\
                <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                    <h4 id="myModalLabel">用户密码修改</h4>\
                </div>\
                <div class="modal-body ">\
                    <div class="control-group">\
                        <span>用户名称:</span>\
                        <input type="text" class="username" value="" readonly/>\
                    </div>\
                    <div class="control-group">\
                        <span>用户密码:</span>\
                        <input type="password" class="password" value="" oncopy="return false;" oncut="return false;"/>\
                    </div>\
                    <div class="control-group">\
                        <span>确认密码:</span>\
                        <input type="password" class="pwident" value="" oncopy="return false;" oncut="return false;" onchange="pwcheck()" />\
                    </div>\
                    <div class="text-center hide perror" style="color: red"></div>\
                </div>\
                <div class="modal-footer">\
                    <button class="btn" data-dismiss="modal">关闭</button>\
                    <button class="btn btn-primary savepw">保存</button>\
                </div>\
            </div>');
            $('#changepassword .username').val(username);
            $('#changepassword').modal({keyboard:false,backdrop:'static'});
            $('#changepassword .savepw').click(function(){
                if (pwcheck()){
                    var b = {
                        user:username,
                        pw:$.md5($('#changepassword .password').val())
                    }
                    var f = function(b){
                        if(b.message == 'ok'){
                            alert('保存成功');
                            $('#changepassword').modal('hide');
                        }
                    }
                    pcdata('post', 'savepw', b, 'json', false,f)
                }
            });
            $('#changepassword').on('hidden', function () {
                $('#changepassword .username').val('');
                $('#changepassword .pwident').val('');
                $('#changepassword .password').val('');
                $('#changepassword .perror').hide();
                $('#changepassword .pwident').parent().removeClass('error');
                $('#changepassword .password').parent().removeClass('error');
                $('#changepassword').remove();
            });
        });
        //用户列表
        $('.usermanage').click(function(){
            $('.popbox').append('<div id="usertree" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display:none;">\
                <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                    <h4 id="myModalLabel">用户管理</h4>\
                </div>\
                <div class="modal-body ">\
                    <a href="" class="btn btn-small" onclick="createuser();return false;"><i class="icon-file"></i>新建</a>\
                    <a href="" class="btn btn-small" onclick="userreplace();return false;"><i class="icon-refresh"></i>刷新</a>\
                    <a href="" class="btn btn-small disabled" onclick="deluserinfo($(this));return false;"><i class="icon-remove"></i>删除</a>\
                    <a href="" class="btn btn-small disabled" onclick="saveuserinfo($(this));return false;"><i class="icon-ok"></i>保存</a>\
                    <a href="" class="btn btn-small" data-dismiss="modal" aria-hidden="true"><i class="icon-minus-sign"></i>取消</a>\
                    <hr>\
                    <div class="row-fluid">\
                        <div class="span5" style="border: 1px solid #ccc;height: 350px;">\
                            <ul class="ztree" id="tree"></ul>\
                        </div>\
                        <div class="span7" style="">\
                            <h4 style="margin-top: -10px;z-index: 20000;">用户信息</h4>\
                            <div class="control-group">\
                                <span>登录账号:</span><input type="text" class="username" readonly>\
                            </div>\
		            		<div class="control-group">\
			                    <span>密码:</span><input type="password" class="password">\
			                </div>\
		            		<div class="control-group">\
			                    <span>密码确认:</span><input type="password" class="pw">\
			                </div>\
		            		<div class="control-group">\
			                    <span>姓名:</span><input type="text" class="name">\
			                </div>\
		            		<div class="control-group">\
			                    <span>电话:</span><input type="text" class="phone">\
			                </div>\
		            		<div class="control-group">\
			                    <span>地区:</span>\
			            		<select class="form-control"  id="heilongjiang"  placeholder="请选择" style="width: 214px;">\
				                    <option value="1923010100" name="haerbin">哈尔滨市</option>\
				                    <option value="1923020100" name="qiqihaer">齐齐哈尔市</option>\
				                    <option value="1923030100" name="jixi">鸡西市</option>\
				                    <option value="1923040100" name="hegang">鹤岗市</option>\
				                    <option value="1923050100" name="shuangyashan">双鸭山市</option>\
				                    <option value="1923060100" name="daqing">大庆市</option>\
				                    <option value="1923070100" name="yichun">伊春市</option>\
				                    <option value="1923080100" name="jiamusi">佳木斯市</option>\
				                    <option value="1923090100" name="qitaihe">七台河市</option>\
				                    <option value="1923100100" name="mudanjiang">牡丹江市</option>\
				                    <option value="1923110100" name="heihe">黑河市</option>\
				                    <option value="1923230100" name="suihua">绥化市</option>\
				                    <option value="1923270100" name="daxinganling">大兴安岭地区</option>\
				                    <option value="1923280100" name="nongkenzongju">农垦总局</option>\
				                    <option value="1923290100" name="shengongzongju">森工总局</option>\
			                    </select>\
			                </div>\
		            		<div class="control-group">\
			                    <span>单位:</span><input type="text" class="company">\
			                </div>\
                            <div class="control-group">\
                                <span>用户角色:</span>\
                                <input type="radio" name="juese" class="entry"><span class="userrole">业务录入员</span>\
                                <input type="radio" name="juese" class="query"><span class="userrole">数据查询员</span>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>')
            getusertree()
            $('#usertree').modal({keyboard:false,backdrop:'static'});
        })
        //业务申请
    $('.applyLicense').click(function(){
        $('.popbox').append('<div id="licenseApply" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width:400px;">\
            <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
                <h3 id="myModalLabel">取证单位类型选择</h3>\
            </div>\
            <div class="modal-body">\
                <div class="form-group">\
                    <label for="companyType">公司类型：</label>\
                    <select id="companyType" class="form-control" placeholder="请选择" style="width:100%">\
                        <option value="0">请选择</option>\
                        <option value="1">地下矿山企业</option>\
        				<option value="2">露天矿山企业</option>\
        				<option value="3">小型露天采石场</option>\
                        <option value="4">石油天然气开采企业</option>\
                        <option value="5">尾矿库</option>\
                        <option value="6">地质勘探企业</option>\
                        <option value="7">矿山生产系统</option>\
                        <option value="8">采掘施工企业</option>\
                        <option value="9">非矿山企业</option>\
                    </select>\
                </div>\
                <div class="formgroup">\
                    <label for="companyInf">类型说明：</label>\
                    <textarea id="companyInf" class="form-control" rows="3" style="width:96%;"></textarea>\
                </div>\
            </div>\
            <div class="modal-footer">\
                <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\
                <button class="btn btn-primary" id="licenseSearch">查询</button>\
            </div>\
        </div>');
        $('#companyType').bind('change',function(){
            switch($('#companyType').val()){
            case '1':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="applyMetal.html" + "?type=1" + '&applyId=101';
                })
                break;
            case '2':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="applyMetal.html" + "?type=1" + '&applyId=102';
                })
                break;
            case '3':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="applyMetal.html" + "?type=1" + '&applyId=103';
                })
                break;
            case '4':
                $('#companyInf').val("适用于所有石油天然气开采、储运企业");
                $('#licenseSearch').click(function(){
                    location.href="applyOil.html" + "?type=1" + '&applyId=104';
                })
                break;
            case '5':
                $('#companyInf').val("适用于取证单位为尾矿库");
                $('#licenseSearch').click(function(){
                    location.href="applyOil.html" + "?type=1" + '&applyId=105';
                })
                break;
            case '6':
                $('#companyInf').val("适用于所有地质勘探企业");
                $('#licenseSearch').click(function(){
                    location.href="applyOil.html" + "?type=1" + '&applyId=106';
                })
                break;
            case '7':
                $('#companyInf').val("适用于有若干个生产系统的金属非金属矿山企业，为下属矿山生产系统申报");
                $('#licenseSearch').click(function(){
                    location.href="applyMetal.html" + "?type=1" + '&applyId=107';
                })
                break;
            case '8':
                $('#companyInf').val("适用于所有采掘施工企业");
                $('#licenseSearch').click(function(){
                    location.href="applyOil.html" + "?type=1" + '&applyId=108';
                })
                break;
            case '9':
                $('#companyInf').val("适用于管理型矿山企业或矿山管理型企业");
                $('#licenseSearch').click(function(){
                    location.href="applyOil.html" + "?type=1" + '&applyId=109';
                })
                break;
            }
        })
        $('#licenseApply').modal({keyboard:false,backdrop:'static'});
    })
    
    //业务变更
    $('.changeLicense').click(function(){
        $('.popbox').append('<div id="licenseChange" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width:400px;">\
        <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
            <h3 id="myModalLabel">取证单位类型选择</h3>\
        </div>\
        <div class="modal-body">\
            <div class="form-group">\
                <label for="companyType">公司类型：</label>\
                <select id="companyType" class="form-control" placeholder="请选择" style="width:100%">\
                    <option value="0">请选择</option>\
                    <option value="1">地下矿山企业</option>\
                    <option value="2">露天矿山企业</option>\
                    <option value="3">小型露天采石场</option>\
                    <option value="4">石油天然气开采企业</option>\
                    <option value="5">尾矿库</option>\
                    <option value="6">地质勘探企业</option>\
                    <option value="7">矿山生产系统</option>\
                    <option value="8">采掘施工企业</option>\
                    <option value="9">非矿山企业</option>\
                </select>\
            </div>\
            <div class="formgroup">\
                <label for="companyInf">类型说明：</label>\
                <textarea id="companyInf" class="form-control" rows="3" style="width:96%;"></textarea>\
            </div>\
        </div>\
        <div class="modal-footer">\
            <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\
            <button class="btn btn-primary" id="licenseSearch">查询</button>\
        </div>\
    </div>');
    $('#companyType').bind('change',function(){
        switch($('#companyType').val()){
        case '1':
            $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=101';
            })
            break;
        case '2':
            $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致、储运企业");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=102';
            })
            break;
        case '3':
            $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=103';
            })
            break;
        case '4':
            $('#companyInf').val("适用于所有石油天然气开采、储运企业");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=104';
            })
            break;
        case '5':
            $('#companyInf').val("适用于取证单位为尾矿库");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=105';
            })
            break;
        case '6':
            $('#companyInf').val("适用于所有地质勘探企业");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=106';
            })
            break;
        case '7':
            $('#companyInf').val("适用于有若干个生产系统的金属非金属矿山企业，为下属矿山生产系统申报");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=107';
            })
            break;
        case '8':
            $('#companyInf').val("适用于所有采掘施工企业");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=106';
            })
            break;
        case '9':
            $('#companyInf').val("适用于管理型矿山企业或矿山管理型企业");
            $('#licenseSearch').click(function(){
                location.href="change.html" + "?type=2" + '&applyId=107';
            })
            break;
        }
    })
    $('#licenseChange').modal({keyboard:false,backdrop:'static'});
    })
    
    //业务延期
    $('.deferLicense').click(function(){
        $('.popbox').append('<div id="licenseDefer" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width:400px;">\
        <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
            <h3 id="myModalLabel">取证单位类型选择</h3>\
        </div>\
        <div class="modal-body">\
            <div class="form-group">\
                <label for="companyType">公司类型：</label>\
                <select id="companyType" class="form-control" placeholder="请选择" style="width:100%">\
                    <option value="0">请选择</option>\
                    <option value="1">地下矿山企业</option>\
                    <option value="2">露天矿山企业</option>\
                    <option value="3">小型露天采石场</option>\
                    <option value="4">石油天然气开采企业</option>\
                    <option value="5">尾矿库</option>\
                    <option value="6">地质勘探企业</option>\
                    <option value="7">矿山生产系统</option>\
                    <option value="8">采掘施工企业</option>\
                    <option value="9">非矿山企业</option>\
                </select>\
            </div>\
            <div class="formgroup">\
                <label for="companyInf">类型说明：</label>\
                <textarea id="companyInf" class="form-control" rows="3" style="width:96%;"></textarea>\
            </div>\
        </div>\
        <div class="modal-footer">\
            <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\
            <button class="btn btn-primary" id="licenseSearch">查询</button>\
        </div>\
    </div>');
    $('#companyType').bind('change',function(){
        switch($('#companyType').val()){
        case '1':
            $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=101';
            })
            break;
        case '2':
            $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致、储运企业");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=102';
            })
            break;
        case '3':
            $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=103';
            })
            break;
        case '4':
            $('#companyInf').val("适用于所有石油天然气开采、储运企业");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=104';
            })
            break;
        case '5':
            $('#companyInf').val("适用于取证单位为尾矿库");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=105';
            })
            break;
        case '6':
            $('#companyInf').val("适用于所有地质勘探企业");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=106';
            })
            break;
        case '7':
            $('#companyInf').val("适用于有若干个生产系统的金属非金属矿山企业，为下属矿山生产系统申报");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=107';
            })
            break;
        case '8':
            $('#companyInf').val("适用于所有采掘施工企业");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=106';
            })
            break;
        case '9':
            $('#companyInf').val("适用于管理型矿山企业或矿山管理型企业");
            $('#licenseSearch').click(function(){
                location.href="defer.html" + "?type=2" + '&applyId=107';
            })
            break;
        }
    })
    $('#licenseDefer').modal({keyboard:false,backdrop:'static'});
    })
    //三同时审查
    $('.applyThreeTogether').click(function(){
        $('.popbox').append('<div id="applyThreeTogetherAlert" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width:400px;">\
            <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
                <h3 id="myModalLabel">取证单位类型选择</h3>\
            </div>\
            <div class="modal-body">\
                <div class="form-group">\
                    <label for="companyType">公司类型：</label>\
                    <select id="companyType" class="form-control" placeholder="请选择" style="width:100%">\
                        <option value="0">请选择</option>\
                        <option value="1">地下矿山企业</option>\
                        <option value="2">露天矿山企业</option>\
                        <option value="3">小型露天采石场</option>\
                        <option value="4">石油天然气开采企业</option>\
                        <option value="5">尾矿库</option>\
                    </select>\
                </div>\
                <div class="formgroup">\
                    <label for="companyInf">类型说明：</label>\
                    <textarea id="companyInf" class="form-control" rows="3" style="width:96%;"></textarea>\
                </div>\
            </div>\
            <div class="modal-footer">\
                <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\
                <button class="btn btn-primary" id="licenseSearch">查询</button>\
            </div>\
        </div>');
        $('#companyType').bind('change',function(){
            switch($('#companyType').val()){
            case '1':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="applyThreeTogether.html" + "?type=1" + '&applyId=101';
                })
                break;
            case '2':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="applyThreeTogether.html" + "?type=1" + '&applyId=102';
                })
                break;
            case '3':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="applyThreeTogether.html" + "?type=1" + '&applyId=103';
                })
                break;
            case '4':
                $('#companyInf').val("适用于所有石油天然气开采、储运企业");
                $('#licenseSearch').click(function(){
                    location.href="applyThreeTogether.html" + "?type=1" + '&applyId=104';
                })
                break;
            case '5':
                $('#companyInf').val("适用于取证单位为尾矿库");
                $('#licenseSearch').click(function(){
                    location.href="applyThreeTogether.html" + "?type=1" + '&applyId=105';
                })
                break;
            }
        })
        $('#applyThreeTogetherAlert').modal({keyboard:false,backdrop:'static'});
    })
    //三同时修改
    $('.changeThreeTogether').click(function(){
        $('.popbox').append('<div id="changeThreeTogetherAlert" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width:400px;">\
            <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
                <h3 id="myModalLabel">取证单位类型选择</h3>\
            </div>\
            <div class="modal-body">\
                <div class="form-group">\
                    <label for="companyType">公司类型：</label>\
                    <select id="companyType" class="form-control" placeholder="请选择" style="width:100%">\
                        <option value="0">请选择</option>\
                        <option value="1">地下矿山企业</option>\
                        <option value="2">露天矿山企业</option>\
                        <option value="3">小型露天采石场</option>\
                        <option value="4">石油天然气开采企业</option>\
                        <option value="5">尾矿库</option>\
                    </select>\
                </div>\
                <div class="formgroup">\
                    <label for="companyInf">类型说明：</label>\
                    <textarea id="companyInf" class="form-control" rows="3" style="width:96%;"></textarea>\
                </div>\
            </div>\
            <div class="modal-footer">\
                <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\
                <button class="btn btn-primary" id="licenseSearch">查询</button>\
            </div>\
        </div>');
        $('#companyType').bind('change',function(){
            switch($('#companyType').val()){
            case '1':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="changeThreeTogether.html" + "?type=1" + '&applyId=101';
                })
                break;
            case '2':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="changeThreeTogether.html" + "?type=1" + '&applyId=102';
                })
                break;
            case '3':
                $('#companyInf').val("适用于仅有一个生产系统的金属非金属矿山企业，申请单位与取证单位一致");
                $('#licenseSearch').click(function(){
                    location.href="changeThreeTogether.html" + "?type=1" + '&applyId=103';
                })
                break;
            case '4':
                $('#companyInf').val("适用于所有石油天然气开采、储运企业");
                $('#licenseSearch').click(function(){
                    location.href="changeThreeTogether.html" + "?type=1" + '&applyId=104';
                })
                break;
            case '5':
                $('#companyInf').val("适用于取证单位为尾矿库");
                $('#licenseSearch').click(function(){
                    location.href="changeThreeTogether.html" + "?type=1" + '&applyId=105';
                })
                break;
            }
        })
        $('#changeThreeTogetherAlert').modal({keyboard:false,backdrop:'static'});
    })
    //短信发送
    $('.messageAlertButton').click(function(){
        $('.popbox').append('<div id="messageAlert" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="width:370px;">\
        <div class="modal-header">\
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
            <h3 id="myModalLabel">发送短信</h3>\
        </div>\
        <div class="modal-body">\
            <div id="userlog">\
                <div class="control-group">\
                    <span>手机号:</span>\
                    <input type="text" class="telNumber" style="width: 300px;"/>\
                </div>\
                <div class="control-group">\
                    <span>短信内容:</span>\
                    <textarea id="messageContent" style="width:300px;height:200px;"></textarea>\
                </div>\
                <div class="control-group" style="margin-top:10px;">\
                    <button type="button" class="btn btn-info" id="sendButton" style="width:80px;">发送</button>\
                </div>\
            </div>\
        </div>')
        $('#messageAlert').modal({keyboard:false,backdrop:'static'});
        $('#sendButton').click(function(){
            var f = function(){
                if (b.message == 'ok') {
                    alert(b.message);
                }else{
                    alert(b.message);
                }
            }
            var e = {
            	number:$('.telNumber').val(),
            	content:$('#messageContent').val()
            }
            pcdata('post', 'SendSmsServlet', e, 'json', false,f)
        })
    })
    
    
    $('#usertree .userrole').click(function(){
        $(this).prevAll().each(function(){
            $(this).removeAttr('checked')
        })
        $(this).prev().attr("checked",true)
    })      
    }
    pcdata('post', 'nav', {}, 'json', false, f);
    $('.welcome').append('<a class="signOut" style="float:right;margin-right:20px;margin-left:20px;">退出登录</a>')
})
function changearea(b){
	for(var i = 0;i<b.data.length;i++){
		switch(b.data[i][2]){
			case '1923010100':
				b.data[i][2] = '哈尔滨市市辖区'
				break;
			case '1923010200':
				b.data[i][2] = '哈尔滨市道里区'
				break;
			case '1923010300':
				b.data[i][2] = '哈尔滨市南岗区'
				break;
			case '1923010400':
				b.data[i][2] = '哈尔滨市道外区'
				break;
			case '1923010600':
				b.data[i][2] = '哈尔滨市香坊区'
				break;
			case '1923010700':
				b.data[i][2] = '哈尔滨市动力区'
				break;
			case '1923010800':
				b.data[i][2] = '哈尔滨市平房区'
				break;
			case '1923010900':
				b.data[i][2] = '哈尔滨市松北区'
				break;
			case '1923011100':
				b.data[i][2] = '哈尔滨市呼兰区'
				break;
			case '1923012300':
				b.data[i][2] = '哈尔滨市依兰县'
				break;
			case '1923012400':
				b.data[i][2] = '哈尔滨市方正县'
				break;
			case '1923012500':
				b.data[i][2] = '哈尔滨市宾县'
				break;
			case '1923012600':
				b.data[i][2] = '哈尔滨市巴彦县'
				break;
			case '1923012700':
				b.data[i][2] = '哈尔滨市木兰县'
				break;
			case '1923012800':
				b.data[i][2] = '哈尔滨市通河县'
				break;
			case '1923012900':
				b.data[i][2] = '哈尔滨市延寿县'
				break;
			case '1923018100':
				b.data[i][2] = '哈尔滨市阿城市'
				break;
			case '1923018200':
				b.data[i][2] = '哈尔滨市双城市'
				break;
			case '1923018300':
				b.data[i][2] = '哈尔滨市尚志市'
				break;
			case '1923018400':
				b.data[i][2] = '哈尔滨市五常市'
				break;

			case '1923020100':
				b.data[i][2] = '齐齐哈尔市市辖区'
				break;
			case '1923020200':
				b.data[i][2] = '齐齐哈尔市龙沙区'
				break;
			case '1923020300':
				b.data[i][2] = '齐齐哈尔市建华区'
				break;
			case '1923020400':
				b.data[i][2] = '齐齐哈尔市铁锋区'
				break;
			case '1923020500':
				b.data[i][2] = '齐齐哈尔市昂昂溪区'
				break;
			case '1923020600':
				b.data[i][2] = '齐齐哈尔市富拉尔基区'
				break;
			case '1923020700':
				b.data[i][2] = '齐齐哈尔市碾子山区'
				break;
			case '1923020800':
				b.data[i][2] = '齐齐哈尔市梅里斯达斡尔族区'
				break;
			case '1923022100':
				b.data[i][2] = '齐齐哈尔市龙江县'
				break;
			case '1923022300':
				b.data[i][2] = '齐齐哈尔市依安县'
				break;
			case '1923022400':
				b.data[i][2] = '齐齐哈尔市泰来县'
				break;
			case '1923022500':
				b.data[i][2] = '齐齐哈尔市甘南县'
				break;
			case '1923022700':
				b.data[i][2] = '齐齐哈尔市富裕县'
				break;
			case '1923022900':
				b.data[i][2] = '齐齐哈尔市克山县'
				break;
			case '1923023000':
				b.data[i][2] = '齐齐哈尔市克东县'
				break;
			case '1923023100':
				b.data[i][2] = '齐齐哈尔市拜泉县'
				break;
			case '1923028100':
				b.data[i][2] = '齐齐哈尔市讷河市'
				break;

			case '1923030100':
				b.data[i][2] = '鸡西市市辖区'
				break;
			case '1923030200':
				b.data[i][2] = '鸡西市鸡冠区'
				break;
			case '1923030300':
				b.data[i][2] = '鸡西市恒山区'
				break;
			case '1923030400':
				b.data[i][2] = '鸡西市滴道区'
				break;
			case '1923030500':
				b.data[i][2] = '鸡西市梨树区'
				break;
			case '1923030600':
				b.data[i][2] = '鸡西市城子河区'
				break;
			case '1923030700':
				b.data[i][2] = '鸡西市麻山区'
				break;
			case '1923032100':
				b.data[i][2] = '鸡西市鸡东区'
				break;
			case '1923038100':
				b.data[i][2] = '鸡西市虎林市'
				break;
			case '1923038200':
				b.data[i][2] = '鸡西市密山市'
				break;

			case '1923040100':
				b.data[i][2] = '鹤岗市市辖区'
				break;
			case '1923040200':
				b.data[i][2] = '鹤岗市向阳区'
				break;
			case '1923040300':
				b.data[i][2] = '鹤岗市工农区'
				break;
			case '1923040400':
				b.data[i][2] = '鹤岗市南山区'
				break;
			case '1923040500':
				b.data[i][2] = '鹤岗市兴安区'
				break;
			case '1923040600':
				b.data[i][2] = '鹤岗市东山区'
				break;
			case '1923040700':
				b.data[i][2] = '鹤岗市兴山区'
				break;
			case '1923042100':
				b.data[i][2] = '鹤岗市萝山区'
				break;
			case '1923042200':
				b.data[i][2] = '鹤岗市绥滨区'
				break;

			case '1923050100':
				b.data[i][2] = '双鸭山市市辖区'
				break;
			case '1923050200':
				b.data[i][2] = '双鸭山市尖山区'
				break;
			case '1923050300':
				b.data[i][2] = '双鸭山市岭东区'
				break;
			case '1923050500':
				b.data[i][2] = '双鸭山市四方台区'
				break;
			case '1923050600':
				b.data[i][2] = '双鸭山市宝山区'
				break;
			case '1923052100':
				b.data[i][2] = '双鸭山市集贤县'
				break;
			case '1923052200':
				b.data[i][2] = '双鸭山市友谊县'
				break;
			case '1923052300':
				b.data[i][2] = '双鸭山市宝清县'
				break;
			case '1923052400':
				b.data[i][2] = '双鸭山市饶河县'
				break;

			case '1923060100':
				b.data[i][2] = '大庆市市辖区'
				break;
			case '1923060200':
				b.data[i][2] = '大庆市萨尔图市'
				break;
			case '1923060300':
				b.data[i][2] = '大庆市龙凤区'
				break;
			case '1923060400':
				b.data[i][2] = '大庆市让胡路区'
				break;
			case '1923060500':
				b.data[i][2] = '大庆市红岗区'
				break;
			case '1923060600':
				b.data[i][2] = '大庆市大同区'
				break;
			case '1923062100':
				b.data[i][2] = '大庆市肇州县'
				break;
			case '1923062200':
				b.data[i][2] = '大庆市肇源县'
				break;
			case '1923062300':
				b.data[i][2] = '大庆市林甸县'
				break;
			case '1923062400':
				b.data[i][2] = '大庆市杜尔伯特蒙古族自治县'
				break;

			case '1923070100':
				b.data[i][2] = '伊春市市辖区'
				break;
			case '1923070200':
				b.data[i][2] = '伊春市伊春区'
				break;
			case '1923070300':
				b.data[i][2] = '伊春市南岔区'
				break;
			case '1923070400':
				b.data[i][2] = '伊春市友好区'
				break;
			case '1923070500':
				b.data[i][2] = '伊春市西林区'
				break;
			case '1923070600':
				b.data[i][2] = '伊春市翠峦区'
				break;
			case '1923070700':
				b.data[i][2] = '伊春市新青区'
				break;
			case '1923070800':
				b.data[i][2] = '伊春市美溪区'
				break;
			case '1923070900':
				b.data[i][2] = '伊春市金山屯区'
				break;
			case '1923071000':
				b.data[i][2] = '伊春市五营区'
				break;
			case '1923071100':
				b.data[i][2] = '伊春市乌马河区'
				break;
			case '1923071200':
				b.data[i][2] = '伊春市汤旺河区'
				break;
			case '1923071300':
				b.data[i][2] = '伊春市带岭区'
				break;
			case '1923071400':
				b.data[i][2] = '伊春市乌伊岭区'
				break;
			case '1923071500':
				b.data[i][2] = '伊春市红星区'
				break;
			case '1923071600':
				b.data[i][2] = '伊春市上甘岭区'
				break;
			case '1923072200':
				b.data[i][2] = '伊春市嘉荫县'
				break;
			case '1923078100':
				b.data[i][2] = '伊春市铁力区'
				break;

			case '1923080100':
				b.data[i][2] = '佳木斯市市辖区'
				break;
			case '1923080300':
				b.data[i][2] = '佳木斯市向阳区'
				break;
			case '1923080400':
				b.data[i][2] = '佳木斯市前进区'
				break;
			case '1923080500':
				b.data[i][2] = '佳木斯市东风区'
				break;
			case '1923081100':
				b.data[i][2] = '佳木斯市郊区'
				break;
			case '1923082200':
				b.data[i][2] = '佳木斯市桦南区'
				break;
			case '1923082600':
				b.data[i][2] = '佳木斯市桦川区'
				break;
			case '1923082800':
				b.data[i][2] = '佳木斯市汤原区'
				break;
			case '1923083300':
				b.data[i][2] = '佳木斯市抚远县'
				break;
			case '1923088100':
				b.data[i][2] = '佳木斯市同江市'
				break;
			case '1923088200':
				b.data[i][2] = '佳木斯市富锦市'
				break;

			case '1923090100':
				b.data[i][2] = '七台河市市辖区'
				break;
			case '1923090200':
				b.data[i][2] = '七台河市新兴区'
				break;
			case '1923090300':
				b.data[i][2] = '七台河市桃山区'
				break;
			case '1923090400':
				b.data[i][2] = '七台河市茄子河区'
				break;
			case '1923091000':
				b.data[i][2] = '七台河市勃利区'
				break;

			case '1923100100':
				b.data[i][2] = '牡丹江市市辖区'
				break;
			case '1923100200':
				b.data[i][2] = '牡丹江市东安区'
				break;
			case '1923100300':
				b.data[i][2] = '牡丹江市阳明区'
				break;
			case '1923100400':
				b.data[i][2] = '牡丹江市爱民区'
				break;
			case '1923100500':
				b.data[i][2] = '牡丹江市西安区'
				break;
			case '1923102400':
				b.data[i][2] = '牡丹江市东宁县'
				break;
			case '1923102500':
				b.data[i][2] = '牡丹江市林口县'
				break;
			case '1923108100':
				b.data[i][2] = '牡丹江市绥芬河市'
				break;
			case '1923108300':
				b.data[i][2] = '牡丹江市海林市'
				break;
			case '1923108400':
				b.data[i][2] = '牡丹江市宁安市'
				break;
			case '1923108500':
				b.data[i][2] = '牡丹江市穆棱市'
				break;

			case '1923110100':
				b.data[i][2] = '黑河市市辖区'
				break;
			case '1923110200':
				b.data[i][2] = '黑河市爱辉区'
				break;
			case '1923112100':
				b.data[i][2] = '黑河市嫩江县'
				break;
			case '1923112300':
				b.data[i][2] = '黑河市逊克县'
				break;
			case '1923112400':
				b.data[i][2] = '黑河市孙吴县'
				break;
			case '1923118100':
				b.data[i][2] = '黑河市北安市'
				break;
			case '1923118200':
				b.data[i][2] = '黑河市五大连池市'
				break;

			case '1923120100':
				b.data[i][2] = '绥化市市辖区'
				break;
			case '1923120200':
				b.data[i][2] = '绥化市北林区'
				break;
			case '1923122100':
				b.data[i][2] = '绥化市望奎县'
				break;
			case '1923122200':
				b.data[i][2] = '绥化市兰西县'
				break;
			case '1923122300':
				b.data[i][2] = '绥化市青冈县'
				break;
			case '1923122400':
				b.data[i][2] = '绥化市庆安县'
				break;
			case '1923122500':
				b.data[i][2] = '绥化市明水县'
				break;
			case '1923122600':
				b.data[i][2] = '绥化市绥棱县'
				break;
			case '1923128100':
				b.data[i][2] = '绥化市安达市'
				break;
			case '1923128200':
				b.data[i][2] = '绥化市肇东市'
				break;
			case '1923128300':
				b.data[i][2] = '绥化市海伦市'
				break;

			case '1923272100':
				b.data[i][2] = '大兴安岭地区市辖区'
				break;
			case '1923272200':
				b.data[i][2] = '大兴安岭地区呼玛县'
				break;
			case '1923272300':
				b.data[i][2] = '大兴安岭地区塔河县'
				break;
			case '1923272400':
				b.data[i][2] = '大兴安岭地区漠河县'
				break;
			case '1923272500':
				b.data[i][2] = '大兴安岭地区加格达奇区'
				break;
			case '1923272600':
				b.data[i][2] = '大兴安岭地区呼中区'
				break;
			case '1923272700':
				b.data[i][2] = '大兴安岭地区新林区'
				break;
			case '1923272800':
				b.data[i][2] = '大兴安岭地区松岭区'
				break;

			case '1923280100':
				b.data[i][2] = '农垦总局哈尔滨分局'
				break;
			case '1923280200':
				b.data[i][2] = '农垦总局齐齐哈尔分局'
				break;
			case '1923280300':
				b.data[i][2] = '农垦总局牡丹江分局'
				break;
			case '1923280400':
				b.data[i][2] = '农垦总局绥化分局'
				break;
			case '1923280500':
				b.data[i][2] = '农垦总局北安分局'
				break;
			case '1923280600':
				b.data[i][2] = '农垦总局宝泉岭分局'
				break;
			case '1923280700':
				b.data[i][2] = '农垦总局红兴隆分局'
				break;
			case '1923280800':
				b.data[i][2] = '农垦总局建三江分局'
				break;
			case '1923280900':
				b.data[i][2] = '农垦总局九三分局'
				break;

			case '1923290100':
				b.data[i][2] = '森工总局双鸭山林业局'
				break;
			case '1923290200':
				b.data[i][2] = '森工总局鹤立林业局'
				break;
			case '1923290300':
				b.data[i][2] = '森工总局桦南林业局'
				break;
			case '1923290400':
				b.data[i][2] = '森工总局鹤北林业局'
				break;
			case '1923290500':
				b.data[i][2] = '森工总局清河林业局'
				break;
			case '1923290600':
				b.data[i][2] = '森工总局东方红林业局'
				break;
			case '1923290700':
				b.data[i][2] = '森工总局迎春林业局'
				break;
			case '1923290800':
				b.data[i][2] = '森工总局大海林林业局'
				break;
			case '1923290900':
				b.data[i][2] = '森工总局海林林业局'
				break;
			case '1923291000':
				b.data[i][2] = '森工总局柴河林业局'
				break;
			case '1923291100':
				b.data[i][2] = '森工总局东京城林业局'
				break;
			case '1923291200':
				b.data[i][2] = '森工总局林口林业局'
				break;
			case '1923291300':
				b.data[i][2] = '森工总局绥阳林业局'
				break;
			case '1923291400':
				b.data[i][2] = '森工总局八面通林业局'
				break;
			case '1923291500':
				b.data[i][2] = '森工总局穆棱林业局'
				break;
			case '1923291600':
				b.data[i][2] = '森工总局山河屯林业局'
				break;
			case '1923291700':
				b.data[i][2] = '森工总局通北林业局'
				break;
			case '1923291800':
				b.data[i][2] = '森工总局苇河林业局'
				break;
			case '1923291900':
				b.data[i][2] = '森工总局亚布力林业局'
				break;
			case '1923292000':
				b.data[i][2] = '森工总局方正林业局'
				break;
			case '1923292100':
				b.data[i][2] = '森工总局沾河林业局'
				break;
			case '1923292200':
				b.data[i][2] = '森工总局绥棱林业局'
				break;
			case '1923292300':
				b.data[i][2] = '森工总局兴隆林业局'
				break;
			case '1923292400':
				b.data[i][2] = '森工总局带岭林业局'
				break;

		}
	}
}
function moveTable(b){
	for(var i = 0;i<b.data.length;i++){
		b.data[i][5]=b.data[i][0]
    	b.data[i][0]=b.data[i][1]
    	b.data[i][1]=b.data[i][2]
    	b.data[i][2]=b.data[i][3]
		switch(b.data[i][5]){
			case '1923010100':
				$('.hrbempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923020100':
				$('.qqempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923100100':
				$('.mdjempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923080100':
				$('.jmsempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923060100':
				$('.dqempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923030100':
				$('.jxempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923050100':
				$('.sysempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923070100':
				$('.ycempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923090100':
				$('.qthempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923040100':
				$('.hgempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923110100':
				$('.hhempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923120100':
				$('.shempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923272100':
				$('.dxalempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923280100':
				$('.nkzjempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923290100':
				$('.sgzjempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923108100':
				$('.sfhempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
			case '1923083300':
				$('.fyempty1').each(function(j){
					$(this).text(b.data[i][j]);
				})
				break;
		}
	}
	$('.sumempty1').text(
			parseInt($('#hrb1').text())+
			parseInt($('#qqhr1').text())+
			parseInt($('#mdj1').text())+
			parseInt($('#jms1').text())+
			parseInt($('#dq1').text())+
			parseInt($('#jx1').text())+
			parseInt($('#sys1').text())+
			parseInt($('#yc1').text())+
			parseInt($('#qth1').text())+
			parseInt($('#hg1').text())+
			parseInt($('#hh1').text())+
			parseInt($('#sh1').text())+
			parseInt($('#dxal1').text())+
			parseInt($('#nkzj1').text())+
			parseInt($('#sgzj1').text())+
			parseInt($('#sfh1').text())+
			parseInt($('#fy1').text())
	)
	$('.sumempty2').text(
			parseInt($('#hrb2').text())+
			parseInt($('#qqhr2').text())+
			parseInt($('#mdj2').text())+
			parseInt($('#jms2').text())+
			parseInt($('#dq2').text())+
			parseInt($('#jx2').text())+
			parseInt($('#sys2').text())+
			parseInt($('#yc2').text())+
			parseInt($('#qth2').text())+
			parseInt($('#hg2').text())+
			parseInt($('#hh2').text())+
			parseInt($('#sh2').text())+
			parseInt($('#dxal2').text())+
			parseInt($('#nkzj2').text())+
			parseInt($('#sgzj2').text())+
			parseInt($('#sfh2').text())+
			parseInt($('#fy2').text())
	)
	$('.sumempty3').text(
			parseInt($('#hrb3').text())+
			parseInt($('#qqhr3').text())+
			parseInt($('#mdj3').text())+
			parseInt($('#jms3').text())+
			parseInt($('#dq3').text())+
			parseInt($('#jx3').text())+
			parseInt($('#sys3').text())+
			parseInt($('#yc3').text())+
			parseInt($('#qth3').text())+
			parseInt($('#hg3').text())+
			parseInt($('#hh3').text())+
			parseInt($('#sh3').text())+
			parseInt($('#dxal3').text())+
			parseInt($('#nkzj3').text())+
			parseInt($('#sgzj3').text())+
			parseInt($('#sfh3').text())+
			parseInt($('#fy3').text())
	)
}
function tailschangearea(b){
	for(var i = 0;i<b.data.length;i++){
		switch(b.data[i][3]){
			case '1923010100':
				b.data[i][3] = '哈尔滨市市辖区'
				break;
			case '1923010200':
				b.data[i][3] = '哈尔滨市道里区'
				break;
			case '1923010300':
				b.data[i][3] = '哈尔滨市南岗区'
				break;
			case '1923010400':
				b.data[i][3] = '哈尔滨市道外区'
				break;
			case '1923010600':
				b.data[i][3] = '哈尔滨市香坊区'
				break;
			case '1923010700':
				b.data[i][3] = '哈尔滨市动力区'
				break;
			case '1923010800':
				b.data[i][3] = '哈尔滨市平房区'
				break;
			case '1923010900':
				b.data[i][3] = '哈尔滨市松北区'
				break;
			case '1923011100':
				b.data[i][3] = '哈尔滨市呼兰区'
				break;
			case '1923012300':
				b.data[i][3] = '哈尔滨市依兰县'
				break;
			case '1923012400':
				b.data[i][3] = '哈尔滨市方正县'
				break;
			case '1923012500':
				b.data[i][3] = '哈尔滨市宾县'
				break;
			case '1923012600':
				b.data[i][3] = '哈尔滨市巴彦县'
				break;
			case '1923012700':
				b.data[i][3] = '哈尔滨市木兰县'
				break;
			case '1923012800':
				b.data[i][3] = '哈尔滨市通河县'
				break;
			case '1923012900':
				b.data[i][3] = '哈尔滨市延寿县'
				break;
			case '1923018100':
				b.data[i][3] = '哈尔滨市阿城市'
				break;
			case '1923018200':
				b.data[i][3] = '哈尔滨市双城市'
				break;
			case '1923018300':
				b.data[i][3] = '哈尔滨市尚志市'
				break;
			case '1923018400':
				b.data[i][3] = '哈尔滨市五常市'
				break;

			case '1923020100':
				b.data[i][3] = '齐齐哈尔市市辖区'
				break;
			case '1923020200':
				b.data[i][3] = '齐齐哈尔市龙沙区'
				break;
			case '1923020300':
				b.data[i][3] = '齐齐哈尔市建华区'
				break;
			case '1923020400':
				b.data[i][3] = '齐齐哈尔市铁锋区'
				break;
			case '1923020500':
				b.data[i][3] = '齐齐哈尔市昂昂溪区'
				break;
			case '1923020600':
				b.data[i][3] = '齐齐哈尔市富拉尔基区'
				break;
			case '1923020700':
				b.data[i][3] = '齐齐哈尔市碾子山区'
				break;
			case '1923020800':
				b.data[i][3] = '齐齐哈尔市梅里斯达斡尔族区'
				break;
			case '1923022100':
				b.data[i][3] = '齐齐哈尔市龙江县'
				break;
			case '1923022300':
				b.data[i][3] = '齐齐哈尔市依安县'
				break;
			case '1923022400':
				b.data[i][3] = '齐齐哈尔市泰来县'
				break;
			case '1923022500':
				b.data[i][3] = '齐齐哈尔市甘南县'
				break;
			case '1923022700':
				b.data[i][3] = '齐齐哈尔市富裕县'
				break;
			case '1923022900':
				b.data[i][3] = '齐齐哈尔市克山县'
				break;
			case '1923023000':
				b.data[i][3] = '齐齐哈尔市克东县'
				break;
			case '1923023100':
				b.data[i][3] = '齐齐哈尔市拜泉县'
				break;
			case '1923028100':
				b.data[i][3] = '齐齐哈尔市讷河市'
				break;

			case '1923030100':
				b.data[i][3] = '鸡西市市辖区'
				break;
			case '1923030200':
				b.data[i][3] = '鸡西市鸡冠区'
				break;
			case '1923030300':
				b.data[i][3] = '鸡西市恒山区'
				break;
			case '1923030400':
				b.data[i][3] = '鸡西市滴道区'
				break;
			case '1923030500':
				b.data[i][3] = '鸡西市梨树区'
				break;
			case '1923030600':
				b.data[i][3] = '鸡西市城子河区'
				break;
			case '1923030700':
				b.data[i][3] = '鸡西市麻山区'
				break;
			case '1923032100':
				b.data[i][3] = '鸡西市鸡东区'
				break;
			case '1923038100':
				b.data[i][3] = '鸡西市虎林市'
				break;
			case '1923038200':
				b.data[i][3] = '鸡西市密山市'
				break;

			case '1923040100':
				b.data[i][3] = '鹤岗市市辖区'
				break;
			case '1923040200':
				b.data[i][3] = '鹤岗市向阳区'
				break;
			case '1923040300':
				b.data[i][3] = '鹤岗市工农区'
				break;
			case '1923040400':
				b.data[i][3] = '鹤岗市南山区'
				break;
			case '1923040500':
				b.data[i][3] = '鹤岗市兴安区'
				break;
			case '1923040600':
				b.data[i][3] = '鹤岗市东山区'
				break;
			case '1923040700':
				b.data[i][3] = '鹤岗市兴山区'
				break;
			case '1923042100':
				b.data[i][3] = '鹤岗市萝山区'
				break;
			case '1923042200':
				b.data[i][3] = '鹤岗市绥滨区'
				break;

			case '1923050100':
				b.data[i][3] = '双鸭山市市辖区'
				break;
			case '1923050200':
				b.data[i][3] = '双鸭山市尖山区'
				break;
			case '1923050300':
				b.data[i][3] = '双鸭山市岭东区'
				break;
			case '1923050500':
				b.data[i][3] = '双鸭山市四方台区'
				break;
			case '1923050600':
				b.data[i][3] = '双鸭山市宝山区'
				break;
			case '1923052100':
				b.data[i][3] = '双鸭山市集贤县'
				break;
			case '1923052200':
				b.data[i][3] = '双鸭山市友谊县'
				break;
			case '1923052300':
				b.data[i][3] = '双鸭山市宝清县'
				break;
			case '1923052400':
				b.data[i][3] = '双鸭山市饶河县'
				break;

			case '1923060100':
				b.data[i][3] = '大庆市市辖区'
				break;
			case '1923060200':
				b.data[i][3] = '大庆市萨尔图市'
				break;
			case '1923060300':
				b.data[i][3] = '大庆市龙凤区'
				break;
			case '1923060400':
				b.data[i][3] = '大庆市让胡路区'
				break;
			case '1923060500':
				b.data[i][3] = '大庆市红岗区'
				break;
			case '1923060600':
				b.data[i][3] = '大庆市大同区'
				break;
			case '1923062100':
				b.data[i][3] = '大庆市肇州县'
				break;
			case '1923062200':
				b.data[i][3] = '大庆市肇源县'
				break;
			case '1923062300':
				b.data[i][3] = '大庆市林甸县'
				break;
			case '1923062400':
				b.data[i][3] = '大庆市杜尔伯特蒙古族自治县'
				break;

			case '1923070100':
				b.data[i][3] = '伊春市市辖区'
				break;
			case '1923070200':
				b.data[i][3] = '伊春市伊春区'
				break;
			case '1923070300':
				b.data[i][3] = '伊春市南岔区'
				break;
			case '1923070400':
				b.data[i][3] = '伊春市友好区'
				break;
			case '1923070500':
				b.data[i][3] = '伊春市西林区'
				break;
			case '1923070600':
				b.data[i][3] = '伊春市翠峦区'
				break;
			case '1923070700':
				b.data[i][3] = '伊春市新青区'
				break;
			case '1923070800':
				b.data[i][3] = '伊春市美溪区'
				break;
			case '1923070900':
				b.data[i][3] = '伊春市金山屯区'
				break;
			case '1923071000':
				b.data[i][3] = '伊春市五营区'
				break;
			case '1923071100':
				b.data[i][3] = '伊春市乌马河区'
				break;
			case '1923071200':
				b.data[i][3] = '伊春市汤旺河区'
				break;
			case '1923071300':
				b.data[i][3] = '伊春市带岭区'
				break;
			case '1923071400':
				b.data[i][3] = '伊春市乌伊岭区'
				break;
			case '1923071500':
				b.data[i][3] = '伊春市红星区'
				break;
			case '1923071600':
				b.data[i][3] = '伊春市上甘岭区'
				break;
			case '1923072200':
				b.data[i][3] = '伊春市嘉荫县'
				break;
			case '1923078100':
				b.data[i][3] = '伊春市铁力区'
				break;

			case '1923080100':
				b.data[i][3] = '佳木斯市市辖区'
				break;
			case '1923080300':
				b.data[i][3] = '佳木斯市向阳区'
				break;
			case '1923080400':
				b.data[i][3] = '佳木斯市前进区'
				break;
			case '1923080500':
				b.data[i][3] = '佳木斯市东风区'
				break;
			case '1923081100':
				b.data[i][3] = '佳木斯市郊区'
				break;
			case '1923082200':
				b.data[i][3] = '佳木斯市桦南区'
				break;
			case '1923082600':
				b.data[i][3] = '佳木斯市桦川区'
				break;
			case '1923082800':
				b.data[i][3] = '佳木斯市汤原区'
				break;
			case '1923083300':
				b.data[i][3] = '佳木斯市抚远县'
				break;
			case '1923088100':
				b.data[i][3] = '佳木斯市同江市'
				break;
			case '1923088200':
				b.data[i][3] = '佳木斯市富锦市'
				break;

			case '1923090100':
				b.data[i][3] = '七台河市市辖区'
				break;
			case '1923090200':
				b.data[i][3] = '七台河市新兴区'
				break;
			case '1923090300':
				b.data[i][3] = '七台河市桃山区'
				break;
			case '1923090400':
				b.data[i][3] = '七台河市茄子河区'
				break;
			case '1923091000':
				b.data[i][3] = '七台河市勃利区'
				break;

			case '1923100100':
				b.data[i][3] = '牡丹江市市辖区'
				break;
			case '1923100200':
				b.data[i][3] = '牡丹江市东安区'
				break;
			case '1923100300':
				b.data[i][3] = '牡丹江市阳明区'
				break;
			case '1923100400':
				b.data[i][3] = '牡丹江市爱民区'
				break;
			case '1923100500':
				b.data[i][3] = '牡丹江市西安区'
				break;
			case '1923102400':
				b.data[i][3] = '牡丹江市东宁县'
				break;
			case '1923102500':
				b.data[i][3] = '牡丹江市林口县'
				break;
			case '1923108100':
				b.data[i][3] = '牡丹江市绥芬河市'
				break;
			case '1923108300':
				b.data[i][3] = '牡丹江市海林市'
				break;
			case '1923108400':
				b.data[i][3] = '牡丹江市宁安市'
				break;
			case '1923108500':
				b.data[i][3] = '牡丹江市穆棱市'
				break;

			case '1923110100':
				b.data[i][3] = '黑河市市辖区'
				break;
			case '1923110200':
				b.data[i][3] = '黑河市爱辉区'
				break;
			case '1923112100':
				b.data[i][3] = '黑河市嫩江县'
				break;
			case '1923112300':
				b.data[i][3] = '黑河市逊克县'
				break;
			case '1923112400':
				b.data[i][3] = '黑河市孙吴县'
				break;
			case '1923118100':
				b.data[i][3] = '黑河市北安市'
				break;
			case '1923118200':
				b.data[i][3] = '黑河市五大连池市'
				break;

			case '1923120100':
				b.data[i][3] = '绥化市市辖区'
				break;
			case '1923120200':
				b.data[i][3] = '绥化市北林区'
				break;
			case '1923122100':
				b.data[i][3] = '绥化市望奎县'
				break;
			case '1923122200':
				b.data[i][3] = '绥化市兰西县'
				break;
			case '1923122300':
				b.data[i][3] = '绥化市青冈县'
				break;
			case '1923122400':
				b.data[i][3] = '绥化市庆安县'
				break;
			case '1923122500':
				b.data[i][3] = '绥化市明水县'
				break;
			case '1923122600':
				b.data[i][3] = '绥化市绥棱县'
				break;
			case '1923128100':
				b.data[i][3] = '绥化市安达市'
				break;
			case '1923128200':
				b.data[i][3] = '绥化市肇东市'
				break;
			case '1923128300':
				b.data[i][3] = '绥化市海伦市'
				break;

			case '1923272100':
				b.data[i][3] = '大兴安岭地区市辖区'
				break;
			case '1923272200':
				b.data[i][3] = '大兴安岭地区呼玛县'
				break;
			case '1923272300':
				b.data[i][3] = '大兴安岭地区塔河县'
				break;
			case '1923272400':
				b.data[i][3] = '大兴安岭地区漠河县'
				break;
			case '1923272500':
				b.data[i][3] = '大兴安岭地区加格达奇区'
				break;
			case '1923272600':
				b.data[i][3] = '大兴安岭地区呼中区'
				break;
			case '1923272700':
				b.data[i][3] = '大兴安岭地区新林区'
				break;
			case '1923272800':
				b.data[i][3] = '大兴安岭地区松岭区'
				break;

			case '1923280100':
				b.data[i][3] = '农垦总局哈尔滨分局'
				break;
			case '1923280200':
				b.data[i][3] = '农垦总局齐齐哈尔分局'
				break;
			case '1923280300':
				b.data[i][3] = '农垦总局牡丹江分局'
				break;
			case '1923280400':
				b.data[i][3] = '农垦总局绥化分局'
				break;
			case '1923280500':
				b.data[i][3] = '农垦总局北安分局'
				break;
			case '1923280600':
				b.data[i][3] = '农垦总局宝泉岭分局'
				break;
			case '1923280700':
				b.data[i][3] = '农垦总局红兴隆分局'
				break;
			case '1923280800':
				b.data[i][3] = '农垦总局建三江分局'
				break;
			case '1923280900':
				b.data[i][3] = '农垦总局九三分局'
				break;

			case '1923290100':
				b.data[i][3] = '森工总局双鸭山林业局'
				break;
			case '1923290200':
				b.data[i][3] = '森工总局鹤立林业局'
				break;
			case '1923290300':
				b.data[i][3] = '森工总局桦南林业局'
				break;
			case '1923290400':
				b.data[i][3] = '森工总局鹤北林业局'
				break;
			case '1923290500':
				b.data[i][3] = '森工总局清河林业局'
				break;
			case '1923290600':
				b.data[i][3] = '森工总局东方红林业局'
				break;
			case '1923290700':
				b.data[i][3] = '森工总局迎春林业局'
				break;
			case '1923290800':
				b.data[i][3] = '森工总局大海林林业局'
				break;
			case '1923290900':
				b.data[i][3] = '森工总局海林林业局'
				break;
			case '1923291000':
				b.data[i][3] = '森工总局柴河林业局'
				break;
			case '1923291100':
				b.data[i][3] = '森工总局东京城林业局'
				break;
			case '1923291200':
				b.data[i][3] = '森工总局林口林业局'
				break;
			case '1923291300':
				b.data[i][3] = '森工总局绥阳林业局'
				break;
			case '1923291400':
				b.data[i][3] = '森工总局八面通林业局'
				break;
			case '1923291500':
				b.data[i][3] = '森工总局穆棱林业局'
				break;
			case '1923291600':
				b.data[i][3] = '森工总局山河屯林业局'
				break;
			case '1923291700':
				b.data[i][3] = '森工总局通北林业局'
				break;
			case '1923291800':
				b.data[i][3] = '森工总局苇河林业局'
				break;
			case '1923291900':
				b.data[i][3] = '森工总局亚布力林业局'
				break;
			case '1923292000':
				b.data[i][3] = '森工总局方正林业局'
				break;
			case '1923292100':
				b.data[i][3] = '森工总局沾河林业局'
				break;
			case '1923292200':
				b.data[i][3] = '森工总局绥棱林业局'
				break;
			case '1923292300':
				b.data[i][3] = '森工总局兴隆林业局'
				break;
			case '1923292400':
				b.data[i][3] = '森工总局带岭林业局'
				break;

		}
	}
}
