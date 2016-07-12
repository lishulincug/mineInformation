function getsafetylicensetable(c){
    var f = function(b){
        options = {
            id : "safetylicense",
            total : b.total,
            pagination : true,
            functionName : getsafetylicensetable,
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
        $('#safetylicense').makeTbody(b.data,options)
        $('table input[type="checkbox"]').click(function(){
            if($('table input[type="checkbox"]:checked').length != 1){
                $('.fun').each(function(){
                    $(this).addClass('disabled')
                })
            }else{
            	if($('.status option:selected').val() == '正常'){
	                $('.fun').each(function(){
	                    $(this).removeClass('disabled')
	                })
            	}
            	if($('.status option:selected').val() == '暂扣'){
            		$('.suspendorrecovery').removeClass('disabled')
            	}
            }
        })
    }
    var e ={
    		//unit_name 单位名称 (可选)
    		// * status 状态 (可选)
    		// * arrange 状态 (可选)
    		//// * start_from 起始时间开始(可选)
    		// *  终止时间结束(可选)
    		unit_name:$('.company').val(),
    		start_from:$('.issuingst').val(),
    		end_to:$('.issuingend').val(),
    		status:$('.status').val(),
    		arrange:$('.premitscoperang option:selected').text(),
    		offset : (parseInt(c.page) - 1) * limit,
    		limit : limit
    };
//    f({total:10,data:[[1,2,3,4],[1,2,3,4]]})
     pcdata('post','permit/query',e,'json',false,f)
}

function setstatus(id,str){
    var f = function(c){
        $('#' + id).modal('hide',function(){
            $('#'+ id +' textarea').val('')
            $('#'+ id +' input').each(function(){
                $(this).val('')
            })
        })
        getsafetylicensetable({page:1})
    }
    var t = ''
    $('#' + id + ' input').each(function(){
        if ($(this).attr('checked') != undefined){
            t =t + ',' + $(this).next().text()
        }
    })
    if ($('#' + id + ' textarea').val() != ''){
        t =t + ',' + $('#' + id + ' textarea').val()
    }
    var e = {
        id:$('table input[type="checkbox"]:checked').val(),
        status:str + '|' + t
    }
//    f()
    pcdata('post','permit/change',e,false,'json',f)
}
function outExcel(){
//	var f = function(b){
		location.href = 'permit/excel?unit_name=' + $('.company').val() + '&status=' +
		$('.status option:selected').val() + '&arrange=' +
		$('.premitscoperang option:selected').val() + '&start_from=' + 
		$('#stime').val() + '&end_to=' + $('#etime').val();
//	}
//	var e = {
//		unit_name:$('.company').val(),
//		status:$('.status option:selected').val(),
//		arrange:$('.premitscoperang option:selected').text(),
//	    start_from:$('#stime').val(),
//	    end_to:$('#etime').val()
//	}
//	 pcdata('post','permit/excel',e,false,'json',f)
}
$(document).ready(function(){
	
	laydate({
        elem: '#stime'
     });
    laydate({
        elem: '#etime'
    });
    getsafetylicensetable({page:1})
    $('.status').change(function(){
        if ($(this).val() == '撤销' || 
            $(this).val() == '吊销' || 
            $(this).val() == '注销' ||
            $(this).val() == '换证'){
	            $('.fun').each(function(){
	                $(this).addClass('disabled')
	            })
        }else if ($(this).val() == "暂扣"){
            $('.fun').each(function(){
                $(this).addClass('disabled')
            })
            $('.fun').eq(3).removeClass('disabled')
        }else{
            $('.fun').each(function(){
                $(this).removeClass('disabled')
            })
        }
    });
    $('.revoke').click(function(){
    	if ($('table input[type="checkbox"]:checked').length != 1){
    		message('waring','警告','请选择一条信息进行操作')
    		return false
    	}
        if (!$(this).hasClass('disabled')){
            $('#revoke').modal({keyboard:false,backdrop:'static'});
        }
    })
    $('.withdraw').click(function(){
    	if ($('table input[type="checkbox"]:checked').length != 1){
    		message('waring','警告','请选择一条信息进行操作')
    		return false
    	}
        if (!$(this).hasClass('disabled')){
            $('#withdraw').modal({keyboard:false,backdrop:'static'});
        }
    })
    $('.cancel').click(function(){
    	if ($('table input[type="checkbox"]:checked').length != 1){
    		message('waring','警告','请选择一条信息进行操作')
    		return false
    	}
        if (!$(this).hasClass('disabled')){
            $('#cancel').modal({keyboard:false,backdrop:'static'});
        }
    })
    $('.suspendorrecovery').click(function(){
        if ($(this).hasClass('disabled')){
            return false;
        }
        if ($('table input[type="checkbox"]:checked').length != 1){
    		message('waring','警告','请选择一条信息进行操作')
    		return false
    	}
        if ($('.status').val() != '暂扣'){
            $('#suspendorrecovery').modal({keyboard:false,backdrop:'static'});
        }else{
            var e = {
                id:$('table input[type="checkbox"]:checked').val(),
                status:'正常'
            }
            pcdata('post','permit/change',e,false,'json',function(){getsafetylicensetable({page:1})})
        }
    })
});