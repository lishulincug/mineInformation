
$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
$(window).keydown(function(event){
	switch(event.keyCode) {
		case'13':
			alert()
			$('.login').click(function(){
    	        var name = $('.user').val();
    	        var password = $.md5($('.password').val());
    	       // window.location.href = 'index.html';
    	        $.ajax({
    	            type : "post",
    	            url : "login",
    	            data:JSON.stringify({
    	                "user" : name,
    	                "pw" : password
    	            }),
    	            dataType:"json",
    	            success : function(c, f, d) {
    	                if (c.message == "ok") {
    	                    window.location.href = "index.html";
    	                } else {
    	                    if (c.message == "sess") {
    	                        window.location.href = "/";
    	                    } else {
    	                        $("#loginform p").html("\u767b\u5f55\u5931\u8d25");
    	                        $("#loginform p").css('color','red');
    	                    }
    	                }
    	            }
    	        });
    	    });
		break;
	}
});
$("body").keydown(function() {
    if (event.keyCode == "13") {//keyCode=13是回车键
    	
    	
    	$('.login').click(function(){
	        var name = $('.user').val();
	        var password = $.md5($('.password').val());
	       // window.location.href = 'index.html';
	        $.ajax({
	            type : "post",
	            url : "login",
	            data:JSON.stringify({
	                "user" : name,
	                "pw" : password
	            }),
	            dataType:"json",
	            success : function(c, f, d) {
	                if (c.message == "ok") {
	                    window.location.href = "index.html";
	                } else {
	                    if (c.message == "sess") {
	                        window.location.href = "/";
	                    } else {
	                        $("#loginform p").html("\u767b\u5f55\u5931\u8d25");
	                        $("#loginform p").css('color','red');
	                    }
	                }
	            }
	        });
	    });
    }
});
$(document).ready(function(){
	
	
    var login = $('#loginform');
    var recover = $('#recoverform');
    var speed = 400;
    login.show();
    recover.hide();
    $('#to-recover').click(function(){
        login.fadeTo(speed,0.01)
        recover.fadeTo(speed,1);
        login.hide();
        recover.show();
    });

    $('#to-login').click(function(){
        recover.fadeTo(speed,0.01);
        login.fadeTo(speed,1);
        login.show();
        recover.hide();
        
    });
    //回车登录
    
    
    
    
    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        $('input[placeholder]').each(function(){ 
       
        var input = $(this);       
       
        $(input).val(input.attr('placeholder'));
               
        $(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('');
             }
        });
       
        $(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });
    }
    $('.login').click(function(){
        var name = $('.user').val();
        var password = $.md5($('.password').val());
       // window.location.href = 'index.html';
        $.ajax({
            type : "post",
            url : "login",
            data:JSON.stringify({
                "user" : name,
                "pw" : password
            }),
            dataType:"json",
            success : function(c, f, d) {
                if (c.message == "ok") {
                    window.location.href = "index.html";
                } else {
                    if (c.message == "sess") {
                        window.location.href = "/";
                    } else {
                        $("#loginform p").html("\u767b\u5f55\u5931\u8d25");
                        $("#loginform p").css('color','red');
                    }
                }
            }
        });
    });
    
});