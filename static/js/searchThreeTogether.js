//获取公司详情
function CompanyInfo(){
	if($('#wesafetyTable').attr('id')=='wesafetyTable'){
		var e={
				ttid: $('#wesafetyTable input[type="checkbox"]:checked').val()
			}
		var f = function(b){
			$('#InfoAlert').modal({keyboard:false,backdrop:'static'});
			$('.replyTime').val(b.data[2]);
			$('.replyNumber').val(b.data[3]);
			$('.specialManager').val(b.data[4]);
			$('.bussinessManager').val(b.data[5]);
			$('.approval').val(b.data[6]);
			$('.professor').val(b.data[9]);
			$('.officeHeader').val(b.data[7]);
		    $('.leader').val(b.data[8]);
		    $('.buildType').val(b.data[10]);
			$('.approvalCompany').val(b.data[11]);
			$('.approvalDate').val(b.data[12]);
			$('.designCompany').val(b.data[13]);
			$('.cmopanyIntelligence').val(b.data[14]);
			$('.changeInfo').val(b.data[15]);
			$('.completedTime').val(b.data[18]);
			$('.completedState').val(b.data[17]);
		}
		pcdata('post', 'FindThreeTogetherByIdServlet', e, 'json', false, f)
	}
	if($('#weminingTable').attr('id')=='weminingTable'){
		
		var e={
				ttid: $('#weminingTable input[type="checkbox"]:checked').val()
			}
		var f = function(b){
			$('#InfoAlert').modal({keyboard:false,backdrop:'static'});
			$('.replyTime').val(b.data[2]);
			$('.replyNumber').val(b.data[3]);
			$('.specialManager').val(b.data[4]);
			$('.bussinessManager').val(b.data[5]);
			$('.approval').val(b.data[6]);
			$('.professor').val(b.data[9]);
			$('.officeHeader').val(b.data[7]);
		    $('.leader').val(b.data[8]);
		    $('.buildType').val(b.data[10]);
			$('.approvalCompany').val(b.data[11]);
			$('.approvalDate').val(b.data[12]);
			$('.designCompany').val(b.data[13]);
			$('.cmopanyIntelligence').val(b.data[14]);
			$('.changeInfo').val(b.data[15]);
			$('.completedTime').val(b.data[18]);
			$('.completedState').val(b.data[17]);
		}
		pcdata('post', 'FindThreeTogetherByIdServlet', e, 'json', false, f)
	}
	if($('#wemningTable').attr('id')=='wemningTable'){
		
		var e={
				ttid: $('#wemningTable input[type="checkbox"]:checked').val()
			}
		var f = function(b){
			$('#InfoAlert').modal({keyboard:false,backdrop:'static'});
			$('.replyTime').val(b.data[2]);
			$('.replyNumber').val(b.data[3]);
			$('.specialManager').val(b.data[4]);
			$('.bussinessManager').val(b.data[5]);
			$('.approval').val(b.data[6]);
			$('.professor').val(b.data[9]);
			$('.officeHeader').val(b.data[7]);
		    $('.leader').val(b.data[8]);
		    $('.buildType').val(b.data[10]);
			$('.approvalCompany').val(b.data[11]);
			$('.approvalDate').val(b.data[12]);
			$('.designCompany').val(b.data[13]);
			$('.cmopanyIntelligence').val(b.data[14]);
			$('.changeInfo').val(b.data[15]);
			$('.completedTime').val(b.data[18]);
			$('.completedState').val(b.data[17]);
		}
		pcdata('post', 'FindThreeTogetherByIdServlet', e, 'json', false, f)
	}
}
//修改公司详情
function changeInfo(){
	if($('#wesafetyTable').attr('id')=='wesafetyTable'){
		var e={
			ttid: $('#wesafetyTable input[type="checkbox"]:checked').val()
		}
		var f = function(b){
			$('#changeAlert').modal({keyboard:false,backdrop:'static'});
			$('#replyTime').val(b.data[2]);
			$('#replyNumber').val(b.data[3]);
			$('#specialManager').val(b.data[4]);
			$('#bussinessManager').val(b.data[5]);
		    $('#approval').val(b.data[6]);
		    $('#professor').val(b.data[9]);
		    $('#officeHeader').val(b.data[7]);
		    $('#leader').val(b.data[8]);
		    $('#buildType').val(b.data[10]);
			$('#approvalCompany').val(b.data[11]);
			$('#approvalDate').val(b.data[12]);
			$('#designCompany').val(b.data[13]);
			$('#cmopanyIntelligence').val(b.data[14]);
			$('#changeInfo').val(b.data[15]);
			$('#completedTime').val(b.data[18]);
			$('#completedState').val(b.data[17]);
			$('.changeSave').click(function(){
				var e = {
					ttid:b.data[0],				
					company:b.data[1],
					approveDate: $('#replyTime').val(),
					approveNum:$('#replyNumber').val(),
					acceptPerson:$('#specialManager').val(),
					handlePerson:$('#bussinessManager').val(),
					multiple:$('#approval').val(),
					responsible:$('#officeHeader').val(),
					leader:$('#leader').val(),
					expert:$('#professor').val(),
					buildType:$('#buildType').val(),
					projectcompany:$('#approvalCompany').val(),
					projectdate:$('#approvalDate').val(),
					designcompany:$('#designCompany').val(),
					designaptitude:$('#cmopanyIntelligence').val(),
					changedestall:$('#changeInfo').val(),
					changenum:b.data[16]+1,
					isFinish:$('#completedState').val(),
					finishDate:$('#completedTime').val()
				}
				var f =function(){
			         $('#changeAlert').modal('hide');
			         location.reload();
				}
				pcdata('post', 'ChangethreeTogetherServlet', e, 'json', false, f)
			})
		}
		pcdata('post', 'FindThreeTogetherByIdServlet', e, 'json', false, f)
	}
	if($('#weminingTable').attr('id')=='weminingTable'){
		var e={
			ttid: $('#wesafetyTable input[type="checkbox"]:checked').val()
		}
		var f = function(b){
			$('#changeAlert').modal({keyboard:false,backdrop:'static'});
			$('#replyTime').val(b.data[2]);
			$('#replyNumber').val(b.data[3]);
			$('#specialManager').val(b.data[4]);
			$('#bussinessManager').val(b.data[5]);
		    $('#approval').val(b.data[6]);
		    $('#professor').val(b.data[9]);
		    $('#officeHeader').val(b.data[7]);
		    $('#leader').val(b.data[8]);
		    $('#buildType').val(b.data[10]);
			$('#approvalCompany').val(b.data[11]);
			$('#approvalDate').val(b.data[12]);
			$('#designCompany').val(b.data[13]);
			$('#cmopanyIntelligence').val(b.data[14]);
			$('#changeInfo').val(b.data[15]);
			$('#completedTime').val(b.data[18]);
			$('#completedState').val(b.data[17]);
			$('.changeSave').click(function(){
				var e = {
					ttid:b.data[1],				
					company:b.data[2],
					approveDate: $('#replyTime').val(),
					approveNum:$('#replyNumber').val(),
					acceptPerson:$('#specialManager').val(),
					handlePerson:$('#bussinessManager').val(),
					multiple:$('#approval').val(),
					responsible:$('#officeHeader').val(),
					leader:$('#leader').val(),
					expert:$('#professor').val(),
					buildType:$('#buildType').val(),
					projectcompany:$('#approvalCompany').val(),
					projectdate:$('#approvalDate').val(),
					designcompany:$('#designCompany').val(),
					designaptitude:$('#cmopanyIntelligence').val(),
					changedestall:$('#changeInfo').val(),
					changenum:b.data[16]+1,
					isFinish:$('#completedState').val(),
					finishDate:$('#completedTime').val(),
					changeRemark:$('#changeRemark').val()
				}
				var f =function(){
			         $('#changeAlert').modal('hide');
			         location.reload();
				}
				pcdata('post', 'ChangethreeTogetherServlet', e, 'json', false, f)
			})
		}
		pcdata('post', 'FindThreeTogetherByIdServlet', e, 'json', false, f)
	}
	if($('#wemningTable').attr('id')=='wemningTable'){
		var e={
			ttid: $('#wesafetyTable input[type="checkbox"]:checked').val()
		}
		var f = function(b){
			$('#changeAlert').modal({keyboard:false,backdrop:'static'});
			$('#replyTime').val(b.data[2]);
			$('#replyNumber').val(b.data[3]);
			$('#specialManager').val(b.data[4]);
			$('#bussinessManager').val(b.data[5]);
		    $('#approval').val(b.data[6]);
		    $('#professor').val(b.data[9]);
		    $('#officeHeader').val(b.data[7]);
		    $('#leader').val(b.data[8]);
		    $('#buildType').val(b.data[10]);
			$('#approvalCompany').val(b.data[11]);
			$('#approvalDate').val(b.data[12]);
			$('#designCompany').val(b.data[13]);
			$('#cmopanyIntelligence').val(b.data[14]);
			$('#changeInfo').val(b.data[15]);
			$('#completedTime').val(b.data[18]);
			$('#completedState').val(b.data[17]);
			$('.changeSave').click(function(){
				var e = {
					ttid:b.data[1],				
					company:b.data[2],
					approveDate: $('#replyTime').val(),
					approveNum:$('#replyNumber').val(),
					acceptPerson:$('#specialManager').val(),
					handlePerson:$('#bussinessManager').val(),
					multiple:$('#approval').val(),
					responsible:$('#officeHeader').val(),
					leader:$('#leader').val(),
					expert:$('#professor').val(),
					buildType:$('#buildType').val(),
					projectcompany:$('#approvalCompany').val(),
					projectdate:$('#approvalDate').val(),
					designcompany:$('#designCompany').val(),
					designaptitude:$('#cmopanyIntelligence').val(),
					changedestall:$('#changeInfo').val(),
					changenum:b.data[16]+1,
					isFinish:$('#completedState').val(),
					finishDate:$('#completedTime').val()
				}
				var f =function(){
			         $('#changeAlert').modal('hide');
			         location.reload();
				}
				pcdata('post', 'ChangethreeTogetherServlet', e, 'json', false, f)
			})
		}
		pcdata('post', 'FindThreeTogetherByIdServlet', e, 'json', false, f)
	}
}
//获得地下矿山的表格
function getMetal(c){
    var f = function(b){
        option = {
            id : "getmetal",
            total : b.total,
            pagination : true,
            functionName : getMetal,
            tableCheckboxValIndex : 0,
            col : [{
            	isCheckbox : true,
				index : 0,
				fun : null,
				name : '<input type="checkbox" id="selectallcheckbox"/>',
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
                index : 10,
                fun : null,
                name : '建设类型（新、改、扩）',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '开采矿种',
                minWidth : 90,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '生产能力（万立方米、吨/年）',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 18,
                fun : null,
                name : '批准建设日期',
                minWidth : 70,
                show : true,
                sortable : false
            }]};
        $('#wesafety').makeTbody(b.data,option);
        $('#wesafetyTable input[type="checkbox"]').click(function(){
            if ($('#wesafetyTable input[type="checkbox"]:checked').length == 1){
                $('.center .del').removeClass('disabled');
                $('.center .details').removeClass('disabled');
                $('.center .revise').removeClass('disabled')
            }else{
                $('.center .del').addClass('disabled')
                $('.center .details').addClass('disabled')
                $('.center .revise').addClass('disabled')
            }
        })
    }
    var e = {
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        company : $('.companyquery').val(),
        companytype: '地下矿山企业'
    }
//    f({total:10,data:[[1,2,3,4],[1,2,3,4]]})
     pcdata('post', 'FindThreeTogethersServlet', e, 'json', false, f)
}
//获得露天矿山
function getOpen(c){
    var f = function(b){
        option = {
            id : "getmetal",
            total : b.total,
            pagination : true,
            functionName : getMetal,
            tableCheckboxValIndex : 0,
            col : [{
            	isCheckbox : true,
				index : 0,
				fun : null,
				name : '<input type="checkbox" id="selectallcheckbox"/>',
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
                index : 10,
                fun : null,
                name : '建设类型（新、改、扩）',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '开采矿种',
                minWidth : 90,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '生产能力（万立方米、吨/年）',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 18,
                fun : null,
                name : '批准建设日期',
                minWidth : 70,
                show : true,
                sortable : false
            }]};
        $('#weining').makeTbody(b.data,option);
        $('#weiningTable input[type="checkbox"]').click(function(){
            if ($('#weiningTable input[type="checkbox"]:checked').length == 1){
                $('.center .del').removeClass('disabled');
                $('.center .details').removeClass('disabled');
                $('.center .revise').removeClass('disabled')
            }else{
                $('.center .del').addClass('disabled')
                $('.center .details').addClass('disabled')
                $('.center .revise').addClass('disabled')
            }
        })
    }
    var e = {
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        company : $('.companyquery').val(),
        companytype: '露天矿山企业'
    }
//    f({total:10,data:[[1,2,3,4],[1,2,3,4]]})
     pcdata('post', 'FindThreeTogethersServlet', e, 'json', false, f)
}
//获得露天采石场
function getStone(c){
    var f = function(b){
        option = {
            id : "getmetal",
            total : b.total,
            pagination : true,
            functionName : getMetal,
            tableCheckboxValIndex : 0,
            col : [{
            	isCheckbox : true,
				index : 0,
				fun : null,
				name : '<input type="checkbox" id="selectallcheckbox"/>',
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
                index : 10,
                fun : null,
                name : '建设类型（新、改、扩）',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '开采矿种',
                minWidth : 90,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '生产能力（万立方米、吨/年）',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 18,
                fun : null,
                name : '批准建设日期',
                minWidth : 70,
                show : true,
                sortable : false
            }]};
        $('#wmning').makeTbody(b.data,option);
        $('#wmningTable input[type="checkbox"]').click(function(){
            if ($('#wmningTable input[type="checkbox"]:checked').length == 1){
                $('.center .del').removeClass('disabled');
                $('.center .details').removeClass('disabled');
                $('.center .revise').removeClass('disabled')
            }else{
                $('.center .del').addClass('disabled')
                $('.center .details').addClass('disabled')
                $('.center .revise').addClass('disabled')
            }
        })
    }
    var e = {
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        company : $('.companyquery').val(),
        companytype: '小型露天采石场'
    }
//    f({total:10,data:[[1,2,3,4],[1,2,3,4]]})
     pcdata('post', 'FindThreeTogethersServlet', e, 'json', false, f)
}
//获得石油企业
function getOil(c){
    var f = function(b){
        option = {
            id : "getoil",
            total : b.total,
            pagination : true,
            functionName : getOil,
            tableCheckboxValIndex : 0,
            col : [{
            	isCheckbox : true,
				index : 0,
				fun : null,
				name : '<input type="checkbox" id="selectallcheckbox"/>',
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
                index : 10,
                fun : null,
                name : '许可范围',
                minWidth : 60,
                show : true,
                sortable : false
            }]};
        $('#weming').makeTbody(b.data,option);
        $('#wemingTable input[type="checkbox"]').click(function(){
            if ($('#wemingTable input[type="checkbox"]:checked').length == 1){
                $('.center .del').removeClass('disabled');
                $('.center .details').removeClass('disabled');
                $('.center .revise').removeClass('disabled')
            }else{
                $('.center .del').addClass('disabled')
                $('.center .details').addClass('disabled')
                $('.center .revise').addClass('disabled')
            }
        })
    }
    var e = {
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        company : $('.companyquery').val(),
        companytype:'石油天然气开采企业'
    }
//    f({total:10,data:[[1,2,3,4],[1,2,3,4]]})
     pcdata('post', 'FindThreeTogethersServlet', e, 'json', false, f)

}
//获得尾矿库
function getTailing(c){
    var f = function(b){
        option = {
            id : "gettailing",
            total : b.total,
            pagination : true,
            functionName : getTailing,
            tableCheckboxValIndex : 0,
            col : [{
            	isCheckbox : true,
				index : 0,
				fun : null,
				name : '<input type="checkbox" id="selectallcheckbox"/>',
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
                index : 10,
                fun : null,
                name : '建设类型（新、改、扩）',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '等别',
                minWidth : 50,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '库型',
                minWidth : 70,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 4,
                fun : null,
                name : '批准建设日期',
                minWidth : 70,
                show : true,
                sortable : false
            }]};
        $('#wemnng').makeTbody(b.data,option);
        $('#wemnngTable input[type="checkbox"]').click(function(){
            if ($('#wemnngTable input[type="checkbox"]:checked').length == 1){
                $('.center .del').removeClass('disabled');
                $('.center .details').removeClass('disabled');
                $('.center .revise').removeClass('disabled')
            }else{
                $('.center .del').addClass('disabled')
                $('.center .details').addClass('disabled')
                $('.center .revise').addClass('disabled')
            }
        })
    }
    var e = {
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit,
        company : $('.companyquery').val(),
        companytype: '尾矿库'
    }
//    f({total:10,data:[[1,2,3,4],[1,2,3,4]]})
     pcdata('post', 'FindThreeTogethersServlet', e, 'json', false, f)

}
//查询
function search(c){
	var e={
		offset : (parseInt(c.page) - 1) * limit,
	    limit : limit,
	    company : $('.companyquery').val()
	}
	var f = function(b){
		getMetal({page:1});
	    getOil({page:1});
	    getTailing({page:1});
	}
	pcdata('post', 'FindThreeTogethersServlet', e, 'json', false, f)
}
function getExcel(){
	window.open("GetThreeTogetherExcel")
}
$(document).ready(function(){
	getMetal({page:1});
	$('.details').click(function(){
		CompanyInfo();
	})
	$('.revise').click(function(){
		changeInfo();
	})
	$('.oil').click(function(){
		getOil({page:1});
	})
    $('.tailing').click(function(){
    	getTailing({page:1});
    })
    $('.metal').click(function(){
    	getMetal({page:1});
    })
    $('.open').click(function(){
    	getOpen({page:1});
    })
    $('.stone').click(function(){
    	getStone({page:1});
    })
    $('.select').click(function(){
    	search({page:1});
    })
    $('.getExcel').click(function(){
    	getExcel();
    })
})