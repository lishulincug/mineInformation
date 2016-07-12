var url = GetRequest()
function back(){
    var json = {
        "1":"business.html?type=1",
        "2":"business.html?type=2",
        "3":"business.html?type=3"
    }
    window.location.href = json[url['type']]
}
function refissue(){
    var f = function(b){
    	window.location.href = "business.html?type=3";
    }
    var e={
    	oid: url['id'],
    	reason:$('#refissueReason').val()
    }
    pcdata('post','RefuseTransactionServlet',e,'json',false,f)
}
 function getissuing () {
     var f = function(b){
    	 var a = [b.data[0],b.data[1],b.data[2],b.data[3],b.data[4],b.data[5],b.data[6],b.data[7],b.data[8],b.data[8]]
    	 for(var i=0;i<a.length;i++){
    		 $('#issue .info').eq(i).val(a[i])
    	 }
     }
     var e = {
         id:url['id']
     }
     pcdata('post','permit/byId',e,false,'json',f)
 }

var transaclist=[0,9,5,6,10,8]

$(document).ready(function(){
    laydate({
        elem: '#validityend'
    });
//    laydate({
//        elem: '#validityst'
//    });
//    laydate({
//        elem: '#issuingtime'
//    });
    if (url['type'] == 2){
        $('.save').addClass('disabled')
        $('.refuse').addClass('disabled')
        $('.original').removeClass('disabled')
        $('.copy').removeClass('disabled')
        $('.valid').html('<span>有效期结束:</span><input type="text" style="width: 150px;margin-left:3px;" class="validityend" readonly>')
    }else if (url['type'] == 3){
        $('.refuse').addClass('disabled')
        $('.issuing').addClass('disabled')
    }
    var f = function(b){
    	unit_type1 = b.data[0].getUnit[0]
    	
    	if(b.data[0].askUnit[0] == "小型露天采石场" ||b.data[0].askUnit[0] == "地下矿山企业" ||b.data[0].askUnit[0] == "露天矿山企业" ||b.data[0].askUnit[0] == "金属非金属矿山企业" || b.data[0].askUnit[0] == '矿山生产系统'){
    		var getunit = [b.data[0].askUnit[1],b.data[0].askUnit[3],b.data[0].askUnit[4],b.data[0].askUnit[6],b.data[0].askUnit[7],
    	                   b.data[0].askUnit[14],b.data[0].askUnit[16],b.data[0].askUnit[15],b.data[0].askUnit[8],b.data[0].askUnit[5],
    	                   b.data[0].askUnit[11],b.data[0].askUnit[12],b.data[0].askUnit[5],b.data[0].askUnit[11],b.data[0].askUnit[12]]
    	
    	
    	}else{
    		var getunit = [b.data[0].askUnit[1],b.data[0].askUnit[3],b.data[0].askUnit[4],b.data[0].askUnit[5],b.data[0].askUnit[8],
        	               b.data[0].askUnit[6],b.data[0].askUnit[11],b.data[0].askUnit[7],b.data[0].askUnit[12],b.data[0].askUnit[14]]
    		
    	}
    	
    	if(b.data[0].askUnit[0] == "小型露天采石场" ||b.data[0].askUnit[0] == "地下矿山企业" ||b.data[0].askUnit[0] == "露天矿山企业" ||b.data[0].askUnit[0] == "金属非金属矿山企业" || b.data[0].askUnit[0] == '矿山生产系统'){
    		var askunit = [b.data[0].getUnit[1],b.data[0].getUnit[3],b.data[0].getUnit[4],b.data[0].getUnit[8],b.data[0].getUnit[11],b.data[0].getUnit[12],
    	                   b.data[0].mine[1],   b.data[0].mine[2],b.data[0].mine[5],b.data[0].mine[6],b.data[0].mine[9],b.data[0].mine[11],
    	                   b.data[0].mine[13],  b.data[0].mine[12],b.data[0].mine[4],b.data[0].mine[3],b.data[0].mine[7],b.data[0].mine[8]]
    		
    	}else{
    		var askunit = [b.data[0].getUnit[1],b.data[0].getUnit[3],b.data[0].getUnit[4],b.data[0].getUnit[5],b.data[0].getUnit[8],
        	               b.data[0].getUnit[6],b.data[0].getUnit[11],b.data[0].getUnit[7],b.data[0].getUnit[12],b.data[0].getUnit[14]]
    	
    	
    	}
        $('.head').html(b.data[0].getUnit[0] + '安全生产许可证')
        for (var i = 0;i<transaclist.length;i++){
            $('.transac .info').eq(i).text(b.data[0].transaction[transaclist[i]])
        }
        
        if (b.data[0].getUnit[0] == "地下矿山企业" ||b.data[0].getUnit[0] == "露天矿山企业" ||b.data[0].getUnit[0] == "小型露天采石场" ||b.data[0].getUnit[0] == "金属非金属矿山企业" || b.data[0].getUnit[0] == '矿山生产系统'){
        	$('.getunit').first().removeClass('hide')
            $('.askunit').first().removeClass('hide')
            for(var i = 0;i<b.data[0].getUnit.length;i++){
                if (getunit[i]== "" || getunit[i] == null){
                    $('.getunit .info').first().eq(i).text('-')
                }else{
                    $('.getunit').first().find('.info').eq(i).text(getunit[i])
                }
            }
            for(var i = 0;i<b.data[0].askUnit.length;i++){
                if (askunit[i] == ""|| askunit[i] == null){
                    $('.askunit').first().find('.info').eq(i).text('-')
                }else{
                    $('.askunit').first().find('.info').eq(i).text(askunit[i])
                }
            }
            
//      }else{}
        }else{
        	$('.getunit').last().removeClass('hide')
            $('.askunit').last().removeClass('hide')
            for(var i = 0;i<getunit.length;i++){
                if (getunit[i] == ""){
                    $('.getunit .info').last().eq(i).text('-')
                }else{
                    $('.getunit').last().find('.info').eq(i).text(getunit[i])
                }
            }
//            if(b.data[0].askUnit[0] == "金属非金属矿山企业" || b.data[0].askUnit[0] == '矿山生产系统'){
	        for(var i = 0;i<askunit.length;i++){
	            if (askunit[i] == ""|| askunit[i] == null){
	                $('.askunit').last().find('.info').eq(i).text('-')
	            }else{
	                $('.askunit').last().find('.info').eq(i).text(askunit[i])
	            }
	        }
        }
        if (b.data[0].transaction[3] != "" && b.data[0].transaction[3]!= null){
        	$('.rang .info').text(b.data[0].transaction[3])
        }
        if (url['type'] == 1){

            var mydate = new Date();
            var date = mydate.getFullYear() + '-';
            var month = mydate.getMonth()+ 1;
            if (month < 10){
                date += '0' + month + '-';
            }else{
                date += month + '-';
            }
            if (mydate.getDate() < 10){
                date += '0' + mydate.getDate();
            }else{
                date += mydate.getDate()
            }
            $('.year').val(mydate.getFullYear())
            $('.validityst').val(date)
            $('.issuingtime').val(date)
        }else{
        }
        $('.companyname').val(b.data[0].getUnit[1])
        $('.companyaddr').val(b.data[0].getUnit[3])
        $('.icrmrang').val(b.data[0].transaction[3])
        $('.icrmrang').val(b.data[0].transaction[3])
        $('.economictype').val(b.data[0].getUnit[5])
        $('.safety').val(b.data[0].getUnit[8])
    }
    var e = {
        type:url['type'],
        id:url['id']
    }
//     f({
//         data:[{
//             "transaction":["4","\u77f3\u6cb9\u5929\u7136\u6c14\u5f00\u91c7\u4f01\u4e1a","2","\u77f3\u58a8","\u62d2\u53d1","11","2015\u002e10\u002e24","\u5ef6\u671f","13766818497","2015\u002e10\u002e24","\u5f20\u4e09","\u4e0d\u5408\u683c",null],
//             "getUnit":["\u77f2\u6cb9\u5929\u7136\u6c14\u5f00\u91c7\u4f01\u4e1a","2","大庆","2","2","\u56fd\u6709\u53ca\u56fd\u6709\u63a7\u80a1\u4f01\u4e1a","2","2","2","2","2","2","2","2","2","2","2","2","on","1"],
//             "askUnit":["\u77f3\u6cb9\u5929\u7136\u6c14\u5f00\u91c7\u4f01\u4e1a","2","1923010000","2","2","\u56fd\u6709\u53ca\u56fd\u6709\u63a7\u80a1\u4f01\u4e1a","2","2","2","2","2","2","2","2","2","2","2","2","on","1"]
//         }]
//     })
    //获取详情
    pcdata('post','PermitChangePostponeInformationQueryServlet',e,'json',false,f)
    $('.refuse').click(function(){
        if(checkdisabled($('.refuse'))){

            $('#refissue').modal({keyboard:false,backdrop:'static'});
        }
    })
    $('.issuing').click(function(){
        if (checkdisabled($('.issuing'))){
            if (url['type'] == 1){
                $('.license').hide()
            }else if(url['type'] == 2){
                $('.setlicense').hide()
//                var f = function() {
//                    $('.valid').html('<span>有效期结束:</span><input type="text" style="width: 150px;margin-left:3px;" class="validityend" readonly>')
//                    $('.icrm').val(b.data)
//                    $('.year').val(b.data)
//                    $('.companyname').val(b.data)
//                    $('.companyaddr').val(b.data)
//                    $('.icrmrang').val(b.data)
//                    $('.economictype').val(b.data)
//                    $('.safety').val(b.data)
//                    $('.validityst').val(b.data)
//                    $('.validityend').val(b.data)
//                    $('.issuingtime').val(b.data)
//                }
                var f = function(b){
                	$('.original').val(b.data[0])
                	$('.valid').html('<span>有效期结束:</span><input type="text" style="width: 150px;margin-left:3px;" class="validityend info" readonly>')
					
                	var a = [b.data[1],b.data[2],b.data[3],b.data[7],b.data[4],b.data[5],b.data[8],b.data[9],b.data[6]]
					for(var i=0;i<a.length;i++){
						$('#issue .info').eq(i).val(a[i])
					}
                }
                var e = {
                    tid:url['id']
                }
                pcdata('post','permit/byId',e,false,'json',f)
            }
            $('#issue').modal({keyboard:false,backdrop:'static'});
        }
    })
    $('.original').click(function(){
    	window.open('print.html?id=' + $('.original').val() + '&type=zb')
    })
    $('.copy').click(function(){
    	window.open('print.html?id=' + $('.original').val() + '&type=fb')
    })
//    $('.refsave').click(function(){
//        var f = function(b){
//            back();
//        }
//        var e = {
//            id:url['id']
//        }
//        pcdata('post','refissue',e,'json',false,f);
//    })
    $('.save').click(function(){
    	if ($(this).hasClass('disabled')){
    		return false
    	}
    	if($('#validityend').val() == "" || $('#validityend').val() == null){
    		alert("请填写有效期结束时间");
    	}
    	else{
	        var f = function(b){
	        	$('.original').val(b.data[0])
	            message('success','成功','许可证保存成功')
	            $('.save').addClass('disabled')
	            $('.setlicense').hide()
	            $('.license').show()
	            $('.original').removeClass('disabled')
	            $('.copy').removeClass('disabled')
	            $('.valid').html('<span>有效期结束:</span><input type="text" style="width: 150px;margin-left:3px;" class="validityend" readonly>')
	            $('.setlicense').attr('display','none')
	            $('.icrm').val(b.data[1])
	            $('.companyname').val(b.data[2])
	            $('.companyaddr').val(b.data[3])
	            $('.icrmrang').val(b.data[7])
	            $('.economictype').val(b.data[4])
	            $('.safety').val(b.data[5])
	            $('.validityst').val(b.data[8])
	            $('.validityend').val(b.data[9])
	            $('.issuingtime').val(b.data[8])
	        }
	        // license = '(黑)FM安许证字[' + $('.setlicense input').eq(0).val() + ']号'
	        //* oid					业务ID
	        //* province				省
	        //* city					市
	        //* year					年份
	        //* unit_name			单位名称
	        //* unit_address			单位地址
	        //* unit_charge			单位负责人
	        //* issue_date			发证日期
	        //* ava_end				有效期结束
	        //* status				当前状态
	        //* arrange				许可范围
	        //* eco_type			经济类型
	        //* issue_organ			发放机构
	        var e ={
	        	oid:url['id'],
	        	province:'黑',
	            city:$('.key').val(),
	            year:$('.year').val(),
	            unit_name:$('.companyname').val(),
	            unit_address:$('.companyaddr').val(),
	            unit_type:unit_type1,
	            arrange:$('.icrmrang').val(),
	            eco_type:$('.economictype').val(),
	            unit_charge:$('.safety').val(),
	            issue_date:$('.validityst').val(),//发证日期
	            ava_end:$('.validityend').val(),//有效期结束
	            ava_st:$('.validityst').val(),
	            issue_organ:$('.issuingauth').val(), //发证机关
	            status:'正常'
	        }
	        //f({message:'ok',data:'asdf'})
	        // 保存许可证
	        var d = {
	        	pid:url['id']
	        }
	        g = function(c){
	        	$().text(b.data.id)
	        }
	         pcdata('post','permit/add',e,'json',false,f)
//	         pcdata('post','permit/byPid',d,'json',false,g)
    	}
    })
    $('#issue .close').click(function(){
	    window.location.href="business.html?type=" + url['type']
    })
})

//缺少打印