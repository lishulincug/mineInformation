var window_width = $(window).width();
var ws=0,es=0,wm=0,em=0;
function pcdata (qtype, qurl, qdata, qdatatype, qcache, qsuccess) {
    qdata.order = columnname;
    qdata.orderby = orderby
    $.ajax({
        type: qtype,
        url: qurl,
        data: JSON.stringify(qdata),
        dataType: qdatatype,
        cache: qcache,
        async:false,
        success: function(i){
//        	alert(i.message)
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
        }
    })
}
function userIntroHref(){
	window.open('userIntro.html');
}
$(document).ready(function(){
    //背景图片
    var window_height = $(window).height() - $('#nav').height() - $('footer').height() - 50;
    $('.center img').width(window_width);
    $('.center img').height(window_height);
    $('.centerindex').height(window_height);
    
    var str=""
    var e = {
		day:90,
		limit:limit,
		offset : 0
	}
	pcdata('post','permit/mature',e,false,'json',function(b){ws=b.total;})
	var e = {
		day:0,
		limit:limit,
		offset :0
	}
	pcdata('post','permit/mature',e,false,'json',function(b){es=b.total})
	var e = {
    	limit:limit,
    	offset:0,
    	keywork:""
    }
    var h = function(b){
    	em=b.total;
    	console.log(es)
    	console.log(em)
    	if(es!=0 || em!= 0){
        	str += '<br><a href="expired.html">'
    	    if(es!=0){
    	    	str += '已到期安全许可证' + es + '个'
    	    }
    	    if(em!=0){
    	    	str += ',采矿许可证' + em+ "个"
    	    }
    	    str += '</a>'
        }
    }
    pcdata('post','FindOverMindPermitServlet',e,false,'json',h)
    var e = {
    	limit:limit,
    	offset:0,
    	keyword:""
    }
    var g = function(b){
    	wm=b.total
    	console.log(ws)
    	console.log(wm)
    	if(ws != 0 || wm != 0){
    		str += '<br><a href="willexpire.html">'
    		if (ws != 0){
    			str += "将到期安全许可证"
    			str += ws + '个'
    		}
    	    if(wm != 0){
    	    	str +=',采矿许可证' + wm + '个'
    	    }
    	    str += '</a>'
    	}
    	 if (ws!=0||wm!=0||es!=0||em!=0){
    	    	message('warning','系统提示',str)
    	}
    }
    pcdata('post','FindMindPermitServlet',e,false,'json',g)
//	if(ws != 0 || wm != 0){
//		str += '<br><a href="willexpire.html">'
//		if (ws != 0){
//			str += "将到期安全许可证"
//			str += ws + '个'
//		}
//	    if(wm != 0){
//	    	str +=',采矿许可证' + wm + '个'
//	    }
//	    str += '</a>'
//	}
    
   
    var f = function(b){
        username = b.user;
        lvl = b.lvl;
        var p = '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="icon-wrench"></i>&nbsp;&nbsp;系统工具</p>\
            <li>\
                <a class="changepassword changepassword1"><i class="icon-lock icon-white"></i><br>修改密码</a>\
            </li>'
        if (lvl == 0) {
            p += '<li>\
                <a href="userlog.html" class="userlog userlog1"><i class="icon-home icon-white"></i><br>操作员登录情况</a>\
                </li>'
        };
        if (lvl == 0) {
            p += '<li>\
                <a class="usermanage usermanage1"><i class="icon-user icon-white"></i><br>用户管理</a>\
            </li>'
        };
        p += '<li>\
                <a class="messageAlertButton messageAlertButton1"><i class="icon-envelope icon-white"></i><br>发送短信</a>\
            </li>\
        	<li>\
           		<a onclick="userIntroHref()" class="uesrIntro"><i class="icon-thumbs-up icon-white"></i><br>使用帮助</a>\
        	</li>\
            <li>\
                <a class="signOut signOut1"><i class="icon-home icon-white"></i><br>退出登录</a>\
            </li>'
        $(".list4").append(p);
    }
    pcdata('post', 'nav', {}, 'json', false, f);
});