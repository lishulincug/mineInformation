$(document).ready(function(){

	$('#selectallcheckbox').hide();
	var Request = GetRequest();
	applyId = Request['applyId'];
	switch(applyId){
		case '101':
			companytype = '金属非金属矿山企业';
			$('.tableHead').html("地下矿山企业三同时设计变更");
			break;
		case '102':
			companytype = '金属非金属矿山企业';
			$('.tableHead').html("露天矿山企业三同时设计变更");
			break;
		case '103':
			companytype = '金属非金属矿山企业';
			$('.tableHead').html("小型露天采石场三同时设计变更");
			break;
		case '104':
			companytype = '石油天然气开采企业';
			$('.tableHead').html("石油天然气开采企业三同时设计变更");
			break;
		case '105':
			companytype = '尾矿库';
			$('.applyRangeButton').remove();
			$('#applyRange').html('尾矿库');
			$('.tableHead').html("尾矿库三同时设计变更");
			break;
	}
	$('.applyInfButton').click(function(){
		
		var p = '<div id="searchApplyCompany" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
			<div class="modal-header">\
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
				<h3 id="myModalLabel">查找申请单位</h3>\
			</div>\
			<div class="modal-body">\
				<div id="userlog">\
					<div class="control-group">\
						<span>&nbsp;&nbsp;单位名称:</span>\
						<input type="text" class="usercompany" style="width: 300px;"/>\
					</div>\
				   	<div class="control-group" style="margin-top:10px;">\
					   	<button type="button" class="btn btn-info" id="search" style="width:80px;">查询</button>\
					   	<button type="button" class="btn btn-info" id="choose" style="width:80px;">选择</button>\
					</div>\
				</div>\
			</div>\
		</div>'
		$('.popbox').append(p);
		$('#searchApplyCompany').modal({keyboard:false,backdrop:'static'});
		$('#choose').hide();
		
		$('#userlogTable').hide();
		$('#userlogPager').hide();
		$('#search').click(function(){
			function userlog(c){
				var f = function(b){
					option = {
						id : "userlog",
						total : b.total,
						pagination : true,
						functionName : userlog,
						tableCheckboxValIndex : 0,
						col : [
						{
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
							name : '单位名称',
							minWidth : 100,
							show : true,
							sortable : false
						},
						{
							isCheckbox : false,
							index : 3,
							fun : null,
							name : '单位地址',
							minWidth : 100,
							show : true,
							sortable : false
						},
						{
							isCheckbox : false,
							index : 0,
							fun : null,
							name : '单位类型',
							minWidth : 100,
							show : true,
							sortable : false
						}]
					};
					$('#userlog').makeTbody(b.data,option);
					$('#searchApplyCompany input[type="checkbox"]').click(function(){

						if ($('#searchApplyCompany input:checked').length == 1){
							
							$('#choose').removeClass('disabled');
						}else if($('#searchApplyCompany input:checked').length == 0){
							$('#choose').addClass('disabled');
							alert('至少选择一项');
						}else{
							$('#choose').addClass('disabled');
							alert('只能选择一项');
						}
					});
				}
				
				// f({total:100,data:[
				// 		['1','dsfdf','c','d'],['2','b','c','d']	
				// 	]})
				var b = {
					companyname: $('.usercompany').val(),
					companytype: companytype,
					limit: limit,
					offset:(parseInt(c.page) - 1) * limit
				}
				pcdata('post', 'FindUnitByUnittypeServlet', b, 'json', false, f);
			}
			userlog({page:1});
			function applyThreeTogether(){
				var e = {
					company$('#applyCompanyName').text()
				}
				pcdata('post', 'FindThreeTogetherByIdServlet ', b, 'json', false, f);
			}
			$('#choose').addClass('disabled');
			$('#choose').show();
			$('#selectallcheckbox').hide();
			
			$("#choose").click(function(){
				if ($('#searchApplyCompany input:checked').length == 1){
					var c = {
						companyname: $('#searchApplyCompany input:checked').parent().next().html()
					}
					
					var f = function(b){
						b.data[0].unit[0] = b.data[0].unit[1];
						b.data[0].unit[1] = b.data[0].unit[3];
						b.data[0].unit[2] = b.data[0].unit[4];
						b.data[0].unit[3] = b.data[0].unit[6];
						b.data[0].unit[4] = b.data[0].unit[7];
						b.data[0].unit[12] = b.data[0].unit[5]
						b.data[0].unit[5] = b.data[0].unit[14];
						b.data[0].unit[6] = b.data[0].unit[16];
						b.data[0].unit[7] = b.data[0].unit[15];
						b.data[0].unit[13] = b.data[0].unit[9]
						b.data[0].unit[9] = b.data[0].unit[12];//
						b.data[0].unit[10] = b.data[0].unit[11];
						b.data[0].unit[11] = b.data[0].unit[13];//
						$('.empty').each(function(i){
							if(b.data[0].unit[i] == null){
								b.data[0].unit[i] = '';
								$(this).text(b.data[0].unit[i])
							}
							else{
								$(this).text(b.data[0].unit[i])
							}
						});
						$('.avaEnd').text(b.avaEnd);
						$('.registerOffice').text(b.data[0].mine[13]);
						
					}
					$('#searchApplyCompany').modal('hide')
					// f({total:100,data:[
					// 	['1','dsfdf','c','d'],['2','b','c','d']	
					// ],unit:['2','b','c','d']})
					pcdata('post', 'FindUnitAndMineByNameServlet', c, 'json', false, f);
				}else{
					return false;
				}
			});
		});
	});


	var checktime = /\d{4}-[0-1]\d-[0-3]\d/;
	if ($('.replyTime').val() != ""){
		if (!checktime.test($('.replyTime').val())){
			$('.replyTime').parent().addClass('error');
			message("error", '错误!', '查询时间格式不正确');
			return false;
		}
		else{
			$('.replyTime').parent().removeClass('error');
			a = {total:1,data:[["1",'asdf','gasdfga','asdfg']]}
		}
	}
	if ($('.approvalDate').val() != ""){
		if (!checktime.test($('.approvalDate').val())){
			$('.approvalDate').parent().addClass('error');
			message("error", '错误!', '查询时间格式不正确');
			return false;
		}
		else{
			$('.approvalDate').parent().removeClass('error');
			a = {total:1,data:[["1",'asdf','gasdfga','asdfg']]}
		}
	}
	if ($('.completedTime').val() != ""){
		if (!checktime.test($('.completedTime').val())){
			$('.completedTime').parent().addClass('error');
			message("error", '错误!', '查询时间格式不正确');
			return false;
		}
		else{
			$('.completedTime').parent().removeClass('error');
			a = {total:1,data:[["1",'asdf','gasdfga','asdfg']]}
		}
	}
	laydate({
        elem: '#replyTime'
     });
    laydate({
        elem: '#approvalDate'
    });
    laydate({
        elem: '#completedTime'
    });
    
	$('.applysubmit').click(function(){
		function checkout(){
			if (($('#applyNumber').val()&&$('#stime').val()&&$('#acceptNumer').val()&&$('#etime').val()&&$('#transactor').val()&&$('#tel').val()&&$('#applyCompanyName').text()&&$('#evidentCompanyName').text()) == 0 ) {
				alert('请将信息填写完整');
			}else{
				var e = {
						ttid:"",
						company:$('#applyCompanyName').text(),
						approveDate:$('#replyTime').val(),
						approveNum:$('#replyNumber').val(),
						acceptPerson:$('#specialManager').val(),
						handlePerson:$('#bussinessManager').val(),
						multiple:$('#approval').val(),
						responsible:$('#officeHeader').val(),
						leader:$('#leader').val(),
						expert:$('#professor').val(),
						buildType:$('#buildType option:selected').val(),
						projectcompany:$('#approvalCompany').val(),
						projectdate:$('#approvalDate').val(),
						designcompany:$('#designCompany').val(),
						designaptitude:$('#cmopanyIntelligence').val(),
						changedestall:$('#changeInfo').val(),
						changenum:$('#changeNum').text(),
						isFinish:$('#completedState').val(),
						finishDate:$('#completedTime').val()
					}
					var f = function(b){
						if (b.message == 'ok') {
							alert(b.message);
							location.href="business.html" + "?type=1";
						}else{
							alert(b.message);
						}
					}
					// f({total:100,data:[
					// 	['1','dsfdf','c','d'],['2','b','c','d']	
					// ]})
					pcdata('post', 'ChangethreeTogetherServlet', e, 'json', false, f);
			};
		}
		checkout();
		
		// userlog(a);
	})
})