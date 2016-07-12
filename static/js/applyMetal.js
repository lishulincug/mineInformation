//获取URL的applyId值，根据applyId值修改企业类型和标题文字
function checkURL(){
	var Request = GetRequest();
	applyId = Request['applyId'];
	switch(applyId){
		case '101':
			companytype = '地下矿山企业';
			$('.tableHead').html("地下矿山企业安全许可证申请书");
		break;
		case '102':
			companytype = '露天矿山企业';
			$('.tableHead').html("露天矿山企业企业安全许可证申请书");
		break;
		case '103':
			companytype = '小型露天采石场';
			$('.tableHead').html("小型露天采石场安全许可证申请书");
		break;
		case '104':
			companytype = '石油天然气开采企业';
			$('.tableHead').html("石油天然气开采企业安全许可证申请书");
		break;
		case '105':
			companytype = '尾矿库';
			$('.applyRangeButton').remove();
			$('#applyRange').html('尾矿库');
			$('.tableHead').html("金属非金属矿山企业安全许可证申请书");
		break;
		case '106':
			companytype = '地质勘探企业';
			$('.applyRangeButton').remove();
			$('#applyRange').html('地质勘探企业');
			$('.tableHead').html("金属非金属矿山企业安全许可证申请书");
		break;
		case '107':
			companytype = '矿山生产系统';
			$('.applyRangeButton').remove();
			$('#applyRange').html('矿山生产系统');
			$('.tableHead').html("金属非金属矿山企业安全许可证申请书");
		break;
		case '108':
			companytype = '采掘施工企业';
			$('.applyRangeButton').remove();
			$('#applyRange').html('采掘施工企业');
			$('.tableHead').html("金属非金属矿山企业安全许可证申请书");
		break;
		case '109':
			companytype = '非矿山企业';
			$('.applyRangeButton').remove();
			$('#applyRange').html('非矿山企业');
			$('.tableHead').html("金属非金属矿山企业安全许可证申请书");
		break;
	}
}
function applyInfo(){
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
			
			var b = {
				companyname: $('.usercompany').val(),
				companytype: companytype,
				limit: limit,
				offset:(parseInt(c.page) - 1) * limit
			}
		pcdata('post', 'FindUnitByUnittypeServlet', b, 'json', false, f);
		}
		userlog({page:1});

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
							b.data[0].unit[i] = '-';
							$(this).text(b.data[0].unit[i])
						}
						else{
							$(this).text(b.data[0].unit[i])
						}
					})
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
}
function hideOrShow(){
	$('#0102010000range').hide();
	$('#0102020000range').hide();
	$('#0102030000range').hide();
	$('#0102040000range').hide();
	$('#0102050000range').hide();
	$('#0102060000range').hide();
	$('#0102070000range').hide();
	$('#0102080000range').hide();
	$('#0102090000range').hide();
	$('#0102100000range').hide();
	$('#0102110000range').hide();
}
function otherHide(){
	$('#0102000000range').hide();
	$('#0101000000range').hide();

	$('#0103000000range').hide();
	$('#0104000000range').hide();
	$('#0105000000range').hide();
}
function same(){
	var e = {
			companyname: $('#applyCompanyName').text()
		}
		var f = function(b){
			b.data[0].unit[0] = b.data[0].unit[1];//名称
			b.data[0].unit[1] = b.data[0].unit[3];//地址
			b.data[0].unit[2] = b.data[0].unit[4];//邮政编码
			b.data[0].unit[3] = b.data[0].unit[8];//主要负责人
			b.data[0].unit[4] = b.data[0].unit[7];//安全负责人
			b.data[0].unit[5] = b.data[0].unit[9];//办公电话
			$('.tabkeEvident1').each(function(i){
				if(b.data[0].unit[i] == null){
					b.data[0].unit[i] = '-';
					$(this).text(b.data[0].unit[i])
				}
				else{
					$(this).text(b.data[0].unit[i])
				}
			})
			var a=[];
			a[0] = b.data[0].mine[1];//开采主矿种
			a[1] = b.data[0].mine[2];//开采方式
			a[2]  = b.data[0].mine[5];//设计生产能力
			a[3]  = b.data[0].mine[6];//产能单位
			a[4]  = b.data[0].mine[9];//从业人数
			a[5]  = b.data[0].mine[11];//专职安全人数
			a[6]  = b.data[0].mine[13];//发证机关
			a[7]  = b.data[0].mine[12];//证号
			a[8]  = b.data[0].mine[4];//投产日期
			a[9]  = b.data[0].mine[3];//设计服务年限
			a[10]  = b.data[0].mine[7];//竣工验收单位
			a[11]  = b.data[0].mine[8];//竣工验收批复文号
			a[12] = b.threeThoget;
			$('.tabkeEvident').each(function(i){
				if(a[i] == null){            
					a[i] = '-';
					$(this).text(a[i])
				}
				else{
					$(this).text(a[i])
				}
			})
		}
		pcdata('post', 'FindUnitAndMineByNameServlet', e, 'json', false, f);
}
$(document).ready(function(){
	checkURL();
	$('.applyInfButton').click(function(){
		applyInfo();
	});
	$('.sameButton').click(function(){
		same();
	})
	$('.tabkeEvidentButton').click(function(){
		
		var p = '<div id="tabkeEvidentCompany" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
			<div class="modal-header">\
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
				<h3 id="myModalLabel">查找取证单位</h3>\
			</div>\
			<div class="modal-body">\
				<div id="userlog1">\
					<div class="control-group">\
						<span>&nbsp;&nbsp;单位名称:</span>\
						<input type="text" class="usercompany" style="width: 300px;"/>\
					</div>\
				   	<div class="control-group" style="margin-top:10px;">\
					   	<button type="button" class="btn btn-info" id="search1" style="width:80px;">查询</button>\
					   	<button type="button" class="btn btn-info" id="choose1" style="width:80px;">选择</button>\
					</div>\
				</div>\
			</div>\
		</div>'
		$('.popbox').append(p);
		$('#tabkeEvidentCompany').modal({keyboard:false,backdrop:'static'});
		$('#choose1').hide();
		
		$('#userlog1Table').hide();
		$('#userlog1Pager').hide();
		$('#search1').click(function(){
			function userlog2(c){
				var f = function(b){
					option = {
						id : "userlog3",
						total : b.total,
						pagination : true,
						functionName : userlog2,
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
					$('#userlog1').makeTbody(b.data,option);
					$('#tabkeEvidentCompany input[type="checkbox"]').click(function(){

						if ($('#tabkeEvidentCompany input:checked').length == 1){
							
							$('#choose1').removeClass('disabled');
						}else if($('#tabkeEvidentCompany input:checked').length == 0){
							$('#choose1').addClass('disabled');
							alert('至少选择一项');
						}else{
							$('#choose1').addClass('disabled');
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
					limit:limit,
					offset : (parseInt(c.page) - 1) * limit
				}
			pcdata('post', 'FindUnitByUnittypeServlet', b, 'json', false, f);
			}
			userlog2({page:1});

			$('#choose1').addClass('disabled');
			$('#choose1').show();
			$('#selectallcheckbox').hide();
			
			$("#choose1").click(function(){
				if ($('#tabkeEvidentCompany input:checked').length == 1){
					var c = {
						companyname: $('#tabkeEvidentCompany input:checked').parent().next().html()
					}
					
					var f = function(b){
						b.data[0].unit[0] = b.data[0].unit[1];//名称
						b.data[0].unit[1] = b.data[0].unit[3];//地址
						b.data[0].unit[2] = b.data[0].unit[4];//邮政编码
						b.data[0].unit[3] = b.data[0].unit[8];//主要负责人
						b.data[0].unit[4] = b.data[0].unit[7];//安全负责人
						b.data[0].unit[5] = b.data[0].unit[9];//办公电话
						$('.tabkeEvident1').each(function(i){
							if(b.data[0].unit[i] == null){
								b.data[0].unit[i] = '-';
								$(this).text(b.data[0].unit[i])
							}
							else{
								$(this).text(b.data[0].unit[i])
							}
						})
						var a=[];
						a[0] = b.data[0].mine[1];//开采主矿种
						a[1] = b.data[0].mine[2];//开采方式
						a[2]  = b.data[0].mine[5];//设计生产能力
						a[3]  = b.data[0].mine[6];//产能单位
						a[4]  = b.data[0].mine[9];//从业人数
						a[5]  = b.data[0].mine[11];//专职安全人数
						a[6]  = b.data[0].mine[13];//发证机关
						a[7]  = b.data[0].mine[12];//证号
						a[8]  = b.data[0].mine[4];//投产日期
						a[9]  = b.data[0].mine[3];//设计服务年限
						a[10]  = b.data[0].mine[7];//竣工验收单位
						a[11]  = b.data[0].mine[8];//竣工验收批复文号
						a[12] = b.threeThoget;
						$('.tabkeEvident').each(function(i){
							if(a[i] == null){            
								a[i] = '-';
								$(this).text(a[i])
							}
							else{
								$(this).text(a[i])
							}
						})
					}
					$('#tabkeEvidentCompany').modal('hide')
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
	
	$('.applyRangeButton').click(function(){
		
		var p = '<div id="applyRangeAlert" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
			<div class="modal-header">\
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>\
				<h3 id="myModalLabel">选择许可范围</h3>\
			</div>\
			<div class="modal-body">\
				<div id="userlog">\
					<div class="control-group">\
		                <label for="companyType">许可范围</label>\
		                <select id="applyRangeChoose" class="form-control" placeholder="请选择" style="width:100%">\
							<option value="0" selected="selected">请选择</option>\
							<option value="0102000000">地下矿山企业许可范围</option>\
							<option value="0102000000">露天矿山企业许可范围</option>\
							<option value="0102000000">小型露天采石场许可范围</option>\
            				<option value="0101000000">石油天然气许可范围</option>\
            				<option value="0103000000">尾矿库许可范围</option>\
            				<option value="0104000000">采掘施工许可范围</option>\
            				<option value="0105000000">地质勘探许可范围</option>\
		                </select>\
            		</div>\
            		<div class="control-group" id="0102000000range">\
            			<select id="0102000000Choose" class="form-control" placeholder="请选择" style="width:100%">\
		                    <option value="0">请选择</option>\
		                    <option value="0102010000">能源矿产</option>\
		                    <option value="0102020000">黑色金属矿产</option>\
		                    <option value="0102030000">有色金属矿产</option>\
		                    <option value="0102040000">贵金属矿产</option>\
		                    <option value="0102050000">稀有稀土及分散元素矿产</option>\
		                    <option value="0102060000">冶金辅助原料非金属矿产</option>\
		                    <option value="0102070000">铂族金属矿产</option>\
		                    <option value="0102080000">化工原料非金属矿产</option>\
		                    <option value="0102090000">特种非金属矿物</option>\
		                    <option value="0102100000">建材及其他非金属矿物</option>\
		                    <option value="0102110000">水气矿产</option>\
		                </select>\
            		</div>\
            		<div class="control-group" id="0101000000range">\
            			<input type="checkbox" value="0101001000">&nbsp;<span>海上采油（气）</span>\
            			<input type="checkbox" value="0101002000">&nbsp;<span>陆上采油（气）</span>\
            			<input type="checkbox" value="0101003000">&nbsp;<span>钻井</span>\
            			<input type="checkbox" value="0101004000">&nbsp;<span>物探</span>\
            			<input type="checkbox" value="0101005000">&nbsp;<span>测井</span>\
            			<input type="checkbox" value="0101006000">&nbsp;<span>录井</span>\
            			<input type="checkbox" value="0101007000">&nbsp;<span>井下作业</span>\
            			<input type="checkbox" value="0101008000">&nbsp;<span>管道储运</span>\
            			<input type="checkbox" value="0101009000">&nbsp;<span>油建</span>\
            			<input type="checkbox" value="0101010000">&nbsp;<span>海油工程</span>\
					</div>\
					<div class="control-group" id="0102010000range">\
            			<input type="checkbox" value="1201002000">&nbsp;<span>油页岩</span>\
                        <input type="checkbox" value="1201003000">&nbsp;<span>石油</span>\
                        <input type="checkbox" value="1201004000">&nbsp;<span>天然气</span>\
                        <input type="checkbox" value="1201005000">&nbsp;<span>煤层气</span>\
                        <input type="checkbox" value="1201006000">&nbsp;<span>天然沥青</span>\
                        <input type="checkbox" value="1201007000">&nbsp;<span>地热</span>\
                        <input type="checkbox" value="1201008000">&nbsp;<span>铀</span>\
                        <input type="checkbox" value="1201009000">&nbsp;<span>钍</span>\
                        <input type="checkbox" value="1201010000">&nbsp;<span>石煤</span>\
                    </div>\
					<div class="control-group" id="0102020000range">\
                        <input type="checkbox" value="1202001000">&nbsp;<span>铁矿</span>\
                        <input type="checkbox" value="1202002000">&nbsp;<span>锰矿</span>\
                        <input type="checkbox" value="1202003000">&nbsp;<span>铬铁矿</span>\
                        <input type="checkbox" value="1202004000">&nbsp;<span>钛矿</span>\
                        <input type="checkbox" value="1202005000">&nbsp;<span>钒矿</span>\
                        <input type="checkbox" value="1202006000">&nbsp;<span>金红石</span>\
					</div>\
					<div class="control-group" id="0102030000range">\
                        <input type="checkbox" value="1203001000">&nbsp;<span>铜矿</span>\
                        <input type="checkbox" value="1203002000">&nbsp;<span>铅矿</span>\
                        <input type="checkbox" value="1203003000">&nbsp;<span>锌矿</span>\
                        <input type="checkbox" value="1203004000">&nbsp;<span>铝土矿</span>\
                        <input type="checkbox" value="1203005000">&nbsp;<span>镁矿</span>\
                        <input type="checkbox" value="1203006000">&nbsp;<span>镍矿</span>\
                        <input type="checkbox" value="1203007000">&nbsp;<span>钴矿</span>\
                        <input type="checkbox" value="1203008000">&nbsp;<span>钨矿</span>\
                        <input type="checkbox" value="1203009000">&nbsp;<span>锡矿</span>\
                        <input type="checkbox" value="1203010000">&nbsp;<span>铋矿</span>\
                        <input type="checkbox" value="1203011000">&nbsp;<span>钼矿</span>\
                        <input type="checkbox" value="1203012000">&nbsp;<span>汞矿</span>\
                        <input type="checkbox" value="1203013000">&nbsp;<span>锑矿</span>\
                        <input type="checkbox" value="1203014000">&nbsp;<span>多金属</span>\
					</div>\
					<div class="control-group" id="0102040000range">\
                        <input type="checkbox" value="1204001000">&nbsp;<span>金矿</span>\
                        <input type="checkbox" value="1204002000">&nbsp;<span>砂金</span>\
                        <input type="checkbox" value="1204003000">&nbsp;<span>银矿</span>\
					</div>\
					<div class="control-group" id="0102050000range">\
                        <input type="checkbox" value="1205001000">&nbsp;<span>铌钽矿</span>\
                        <input type="checkbox" value="1205002000">&nbsp;<span>铌矿</span>\
                        <input type="checkbox" value="1205003000">&nbsp;<span>钽矿</span>\
                        <input type="checkbox" value="1205004000">&nbsp;<span>铍矿</span>\
                        <input type="checkbox" value="1205005000">&nbsp;<span>锂矿</span>\
                        <input type="checkbox" value="1205006000">&nbsp;<span>锆矿</span>\
                        <input type="checkbox" value="1205007000">&nbsp;<span>锶矿(天青石)</span>\
                        <input type="checkbox" value="1205008000">&nbsp;<span>铷矿</span>\
                        <input type="checkbox" value="1205009000">&nbsp;<span>铯矿</span>\
                        <input type="checkbox" value="1205010000">&nbsp;<span>重稀土矿</span>\
                        <input type="checkbox" value="1205011000">&nbsp;<span>钇矿</span>\
                        <input type="checkbox" value="1205012000">&nbsp;<span>钆矿</span>\
                        <input type="checkbox" value="1205013000">&nbsp;<span>铽矿</span>\
                        <input type="checkbox" value="1205014000">&nbsp;<span>镝矿</span>\
                        <input type="checkbox" value="1205015000">&nbsp;<span>钬矿</span>\
                        <input type="checkbox" value="1205016000">&nbsp;<span>铒矿</span>\
                        <input type="checkbox" value="1205017000">&nbsp;<span>铥矿</span>\
                        <input type="checkbox" value="1205018000">&nbsp;<span>镱矿</span>\
                        <input type="checkbox" value="1205019000">&nbsp;<span>镥矿</span>\
                        <input type="checkbox" value="1205020000">&nbsp;<span>轻稀土矿</span>\
                        <input type="checkbox" value="1205021000">&nbsp;<span>铈矿</span>\
                        <input type="checkbox" value="1205022000">&nbsp;<span>镧矿</span>\
                        <input type="checkbox" value="1205023000">&nbsp;<span>镨矿</span>\
                        <input type="checkbox" value="1205024000">&nbsp;<span>铷矿</span>\
                        <input type="checkbox" value="1205025000">&nbsp;<span>钐矿</span>\
                        <input type="checkbox" value="1205026000">&nbsp;<span>铕矿</span>\
                        <input type="checkbox" value="1205027000">&nbsp;<span>锗矿</span>\
                        <input type="checkbox" value="1205028000">&nbsp;<span>镓矿</span>\
                        <input type="checkbox" value="1205029000">&nbsp;<span>铟矿</span>\
                        <input type="checkbox" value="1205030000">&nbsp;<span>铊矿</span>\
                        <input type="checkbox" value="1205031000">&nbsp;<span>鉿矿</span>\
                        <input type="checkbox" value="1205032000">&nbsp;<span>铼矿</span>\
                        <input type="checkbox" value="1205033000">&nbsp;<span>镉矿</span>\
                        <input type="checkbox" value="1205034000">&nbsp;<span>钪矿</span>\
                        <input type="checkbox" value="1205035000">&nbsp;<span>硒矿</span>\
                        <input type="checkbox" value="1205036000">&nbsp;<span>碲矿</span>\
					</div>\
					<div class="control-group" id="0102060000range">\
                        <input type="checkbox" value="1206001000">&nbsp;<span>蓝晶石</span>\
                        <input type="checkbox" value="1206002000">&nbsp;<span>矽线石</span>\
                        <input type="checkbox" value="1206003000">&nbsp;<span>红柱石</span>\
                        <input type="checkbox" value="1206004000">&nbsp;<span>菱镁矿</span>\
                        <input type="checkbox" value="1206005000">&nbsp;<span>萤石(普通)</span>\
                        <input type="checkbox" value="1206006000">&nbsp;<span>熔剂用石灰岩</span>\
                        <input type="checkbox" value="1206007000">&nbsp;<span>冶金用白云岩</span>\
                        <input type="checkbox" value="1206008000">&nbsp;<span>冶金用石英岩</span>\
                        <input type="checkbox" value="1206009000">&nbsp;<span>冶金用砂岩</span>\
                        <input type="checkbox" value="1206010000">&nbsp;<span>铸型用砂岩</span>\
                        <input type="checkbox" value="1206011000">&nbsp;<span>铸型用砂</span>\
                        <input type="checkbox" value="1206012000">&nbsp;<span>冶金用脉石英</span>\
                        <input type="checkbox" value="1206013000">&nbsp;<span>耐火粘土</span>\
                        <input type="checkbox" value="1206014000">&nbsp;<span>铁矾土</span>\
                        <input type="checkbox" value="1206015000">&nbsp;<span>铸型用粘土</span>\
                        <input type="checkbox" value="1206016000">&nbsp;<span>熔剂用蛇纹岩</span>\
                        <input type="checkbox" value="1206017000">&nbsp;<span>其他粘土</span>\
                        <input type="checkbox" value="1206018000">&nbsp;<span>耐火用橄榄岩</span>\
					</div>\
					<div class="control-group" id="0102070000range">\
                        <input type="checkbox" value="1207001000">&nbsp;<span>铂矿</span>\
                        <input type="checkbox" value="1207002000">&nbsp;<span>钯矿</span>\
                        <input type="checkbox" value="1207003000">&nbsp;<span>铱矿</span>\
                        <input type="checkbox" value="1207004000">&nbsp;<span>铑矿</span>\
                        <input type="checkbox" value="1207005000">&nbsp;<span>锇矿</span>\
                        <input type="checkbox" value="1207006000">&nbsp;<span>钌矿</span>\
					</div>\
					<div class="control-group" id="0102080000range">\
                        <input type="checkbox" value="1208001000">&nbsp;<span>自然硫</span>\
                        <input type="checkbox" value="1208002000">&nbsp;<span>硫铁矿</span>\
                        <input type="checkbox" value="1208003000">&nbsp;<span>纳硝石</span>\
                        <input type="checkbox" value="1208004000">&nbsp;<span>明矾石</span>\
                        <input type="checkbox" value="1208005000">&nbsp;<span>芒硝(含钙芒硝)</span>\
                        <input type="checkbox" value="1208006000">&nbsp;<span>重晶石</span>\
                        <input type="checkbox" value="1208007000">&nbsp;<span>毒重石</span>\
                        <input type="checkbox" value="1208008000">&nbsp;<span>天然碱(Na2CO3)</span>\
                        <input type="checkbox" value="1208009000">&nbsp;<span>电石用灰岩</span>\
                        <input type="checkbox" value="1208010000">&nbsp;<span>制碱用灰岩</span>\
                        <input type="checkbox" value="1208011000">&nbsp;<span>化肥用石灰岩</span>\
                        <input type="checkbox" value="1208012000">&nbsp;<span>化肥用白云岩</span>\
                        <input type="checkbox" value="1208013000">&nbsp;<span>化肥用石英岩</span>\
                        <input type="checkbox" value="1208014000">&nbsp;<span>化肥用砂岩</span>\
                        <input type="checkbox" value="1208015000">&nbsp;<span>含钾岩石</span>\
                        <input type="checkbox" value="1208016000">&nbsp;<span>含钾砂页岩</span>\
                        <input type="checkbox" value="1208017000">&nbsp;<span>化肥用橄榄岩</span>\
                        <input type="checkbox" value="1208018000">&nbsp;<span>化肥用蛇纹岩</span>\
                        <input type="checkbox" value="1208019000">&nbsp;<span>泥炭</span>\
                        <input type="checkbox" value="1208020000">&nbsp;<span>钾盐</span>\
                        <input type="checkbox" value="1208021000">&nbsp;<span>岩盐</span>\
                        <input type="checkbox" value="1208022000">&nbsp;<span>湖盐</span>\
                        <input type="checkbox" value="1208023000">&nbsp;<span>镁盐</span>\
                        <input type="checkbox" value="1208024000">&nbsp;<span>天然卤水</span>\
                        <input type="checkbox" value="1208025000">&nbsp;<span>碘</span>\
                        <input type="checkbox" value="1208026000">&nbsp;<span>溴</span>\
                        <input type="checkbox" value="1208027000">&nbsp;<span>砷</span>\
                        <input type="checkbox" value="1208028000">&nbsp;<span>磷矿</span>\
                        <input type="checkbox" value="1208029000">&nbsp;<span>矿盐</span>\
					</div>\
					<div class="control-group" id="0102090000range">\
                        <input type="checkbox" value="1208030000">&nbsp;<span>磁铁磷灰石</span>\
                        <input type="checkbox" value="1209001000">&nbsp;<span>金刚石</span>\
                        <input type="checkbox" value="1209002000">&nbsp;<span>压电水晶</span>\
                        <input type="checkbox" value="1209003000">&nbsp;<span>熔炼水晶</span>\
                        <input type="checkbox" value="1209004000">&nbsp;<span>光学水晶</span>\
                        <input type="checkbox" value="1209005000">&nbsp;<span>工艺水晶</span>\
                        <input type="checkbox" value="1209006000">&nbsp;<span>蓝石棉</span>\
                        <input type="checkbox" value="1209007000">&nbsp;<span>云母</span>\
                        <input type="checkbox" value="1209008000">&nbsp;<span>电气石</span>\
                        <input type="checkbox" value="1209009000">&nbsp;<span>冰洲石</span>\
                        <input type="checkbox" value="1209010000">&nbsp;<span>光学萤石</span>\
                        <input type="checkbox" value="1209011000">&nbsp;<span>硼石</span>\
                        <input type="checkbox" value="1209012000">&nbsp;<span>水晶</span>\
                        <input type="checkbox" value="1209013000">&nbsp;<span>方解石</span>\
					</div>\
					<div class="control-group" id="0102100000range">\
                        <input type="checkbox" value="1210001000">&nbsp;<span>石墨</span>\
                        <input type="checkbox" value="1210002000">&nbsp;<span>刚玉</span>\
                        <input type="checkbox" value="1210003000">&nbsp;<span>硅灰石</span>\
                        <input type="checkbox" value="1210004000">&nbsp;<span>滑石</span>\
                        <input type="checkbox" value="1210005000">&nbsp;<span>石棉(温石棉)</span>\
                        <input type="checkbox" value="1210006000">&nbsp;<span>长石</span>\
                        <input type="checkbox" value="1210007000">&nbsp;<span>石榴子石</span>\
                        <input type="checkbox" value="1210008000">&nbsp;<span>黄玉</span>\
                        <input type="checkbox" value="1210009000">&nbsp;<span>叶蜡石</span>\
                        <input type="checkbox" value="1210010000">&nbsp;<span>蛭石</span>\
                        <input type="checkbox" value="1210011000">&nbsp;<span>沸石</span>\
                        <input type="checkbox" value="1210012000">&nbsp;<span>石膏</span>\
                        <input type="checkbox" value="1210013000">&nbsp;<span>宝石</span>\
                        <input type="checkbox" value="1210014000">&nbsp;<span>玉石</span>\
                        <input type="checkbox" value="1210015000">&nbsp;<span>玛瑙</span>\
                        <input type="checkbox" value="1210016000">&nbsp;<span>玻璃用石灰岩</span>\
                        <input type="checkbox" value="1210017000">&nbsp;<span>水泥用石灰岩</span>\
                        <input type="checkbox" value="1210018000">&nbsp;<span>致灰用石灰岩</span>\
                        <input type="checkbox" value="1210019000">&nbsp;<span>泥灰岩</span>\
                        <input type="checkbox" value="1210020000">&nbsp;<span>白垩</span>\
                        <input type="checkbox" value="1210021000">&nbsp;<span>玻璃用白云岩</span>\
                        <input type="checkbox" value="1210022000">&nbsp;<span>玻璃用石英岩</span>\
                        <input type="checkbox" value="1210023000">&nbsp;<span>玻璃用砂岩</span>\
                        <input type="checkbox" value="1210024000">&nbsp;<span>水泥配料用砂岩</span>\
                        <input type="checkbox" value="1210025000">&nbsp;<span>砖瓦用砂岩</span>\
                        <input type="checkbox" value="1210026000">&nbsp;<span>陶瓷用砂岩</span>\
                        <input type="checkbox" value="1210027000">&nbsp;<span>玻璃用砂</span>\
                        <input type="checkbox" value="1210028000">&nbsp;<span>建筑用砂</span>\
                        <input type="checkbox" value="1210029000">&nbsp;<span>水泥配料用砂</span>\
                        <input type="checkbox" value="1210030000">&nbsp;<span>水泥标准砂</span>\
                        <input type="checkbox" value="1210031000">&nbsp;<span>砖瓦用砂</span>\
                        <input type="checkbox" value="1210032000">&nbsp;<span>玻璃用脉石英</span>\
                        <input type="checkbox" value="1210033000">&nbsp;<span>粉石英</span>\
                        <input type="checkbox" value="1210034000">&nbsp;<span>天然油石</span>\
                        <input type="checkbox" value="1210035000">&nbsp;<span>硅藻土</span>\
                        <input type="checkbox" value="1210036000">&nbsp;<span>陶粒页岩</span>\
                        <input type="checkbox" value="1210037000">&nbsp;<span>砖瓦用页岩</span>\
                        <input type="checkbox" value="1210038000">&nbsp;<span>水泥配料用页岩</span>\
                        <input type="checkbox" value="1210039000">&nbsp;<span>高岭土</span>\
                        <input type="checkbox" value="1210040000">&nbsp;<span>陶瓷土</span>\
                        <input type="checkbox" value="1210041000">&nbsp;<span>凹凸棒石粘土</span>\
                        <input type="checkbox" value="1210042000">&nbsp;<span>海泡石粘土</span>\
                        <input type="checkbox" value="1210043000">&nbsp;<span>伊利石粘土</span>\
                        <input type="checkbox" value="1210044000">&nbsp;<span>累托石粘土</span>\
                        <input type="checkbox" value="1210045000">&nbsp;<span>膨润土</span>\
                        <input type="checkbox" value="1210046000">&nbsp;<span>砖瓦用粘土</span>\
                        <input type="checkbox" value="1210047000">&nbsp;<span>水泥用粘土</span>\
                        <input type="checkbox" value="1210048000">&nbsp;<span>水泥配料用红土</span>\
                        <input type="checkbox" value="1210049000">&nbsp;<span>水泥配料用黄土</span>\
                        <input type="checkbox" value="1210050000">&nbsp;<span>水泥配料用泥岩</span>\
                        <input type="checkbox" value="1210051000">&nbsp;<span>保温材料用粘土</span>\
                        <input type="checkbox" value="1210052000">&nbsp;<span>铸石用玄武岩</span>\
                        <input type="checkbox" value="1210053000">&nbsp;<span>水泥用辉绿岩</span>\
                        <input type="checkbox" value="1210054000">&nbsp;<span>铸石用辉绿岩</span>\
                        <input type="checkbox" value="1210055000">&nbsp;<span>水泥混合材料用安山岩</span>\
                        <input type="checkbox" value="1210056000">&nbsp;<span>水泥混合材料用闪长玢岩</span>\
                        <input type="checkbox" value="1210057000">&nbsp;<span>麦饭石</span>\
                        <input type="checkbox" value="1210058000">&nbsp;<span>珍珠岩</span>\
                        <input type="checkbox" value="1210059000">&nbsp;<span>黑曜石</span>\
                        <input type="checkbox" value="1210060000">&nbsp;<span>松脂岩</span>\
                        <input type="checkbox" value="1210061000">&nbsp;<span>浮石</span>\
                        <input type="checkbox" value="1210062000">&nbsp;<span>水泥用粗面岩</span>\
                        <input type="checkbox" value="1210063000">&nbsp;<span>铸石用粗面岩</span>\
                        <input type="checkbox" value="1210064000">&nbsp;<span>玻璃用凝灰岩</span>\
                        <input type="checkbox" value="1210065000">&nbsp;<span>水泥用凝灰岩</span>\
                        <input type="checkbox" value="1210066000">&nbsp;<span>水泥用大理石</span>\
                        <input type="checkbox" value="1210067000">&nbsp;<span>玻璃用大理石</span>\
                        <input type="checkbox" value="1210068000">&nbsp;<span>建筑用石料(凝灰岩)</span>\
                        <input type="checkbox" value="1210069000">&nbsp;<span>饰面用石料(大理石)</span>\
                        <input type="checkbox" value="1210070000">&nbsp;<span>油砂</span>\
                        <input type="checkbox" value="1210071000">&nbsp;<span>赭石</span>\
                        <input type="checkbox" value="1210072000">&nbsp;<span>颜料矿物</span>\
                        <input type="checkbox" value="1210073000">&nbsp;<span>颜料黄土</span>\
                        <input type="checkbox" value="1210074000">&nbsp;<span>透辉石</span>\
                        <input type="checkbox" value="1210075000">&nbsp;<span>透闪石</span>\
                        <input type="checkbox" value="1210076000">&nbsp;<span>石灰岩</span>\
                        <input type="checkbox" value="1210077000">&nbsp;<span>建筑石料用灰岩</span>\
                        <input type="checkbox" value="1210078000">&nbsp;<span>含钾岩石</span>\
                        <input type="checkbox" value="1210079000">&nbsp;<span>白云岩</span>\
                        <input type="checkbox" value="1210080000">&nbsp;<span>建筑用白云岩</span>\
                        <input type="checkbox" value="1210081000">&nbsp;<span>石英岩</span>\
                        <input type="checkbox" value="1210082000">&nbsp;<span>冶金用石英岩</span>\
                        <input type="checkbox" value="1210083000">&nbsp;<span>砂岩</span>\
                        <input type="checkbox" value="1210084000">&nbsp;<span>天然石英砂</span>\
                        <input type="checkbox" value="1210085000">&nbsp;<span>脉石岩</span>\
                        <input type="checkbox" value="1210086000">&nbsp;<span>页岩</span>\
                        <input type="checkbox" value="1210087000">&nbsp;<span>陶粒用粘土</span>\
                        <input type="checkbox" value="1210088000">&nbsp;<span>橄榄岩</span>\
                        <input type="checkbox" value="1210089000">&nbsp;<span>建筑用橄榄岩</span>\
                        <input type="checkbox" value="1210090000">&nbsp;<span>蛇纹岩</span>\
                        <input type="checkbox" value="1210091000">&nbsp;<span>饰面用蛇纹岩</span>\
                        <input type="checkbox" value="1210092000">&nbsp;<span>玄武岩</span>\
                        <input type="checkbox" value="1210093000">&nbsp;<span>岩棉用玄武岩</span>\
                        <input type="checkbox" value="1210094000">&nbsp;<span>辉绿岩</span>\
                        <input type="checkbox" value="1210095000">&nbsp;<span>建筑用辉绿岩</span>\
                        <input type="checkbox" value="1210096000">&nbsp;<span>饰面用辉绿岩</span>\
                        <input type="checkbox" value="1210097000">&nbsp;<span>饰面用灰岩</span>\
                        <input type="checkbox" value="1210098000">&nbsp;<span>安山岩</span>\
                        <input type="checkbox" value="1210099000">&nbsp;<span>饰面用安山岩</span>\
                        <input type="checkbox" value="1210100000">&nbsp;<span>建筑用安山岩</span>\
                        <input type="checkbox" value="1210101000">&nbsp;<span>闪长岩</span>\
                        <input type="checkbox" value="1210102000">&nbsp;<span>建筑用闪长岩</span>\
                        <input type="checkbox" value="1210103000">&nbsp;<span>花岗岩</span>\
                        <input type="checkbox" value="1210104000">&nbsp;<span>建筑用花岗岩</span>\
                        <input type="checkbox" value="1210105000">&nbsp;<span>饰面用花岗岩</span>\
                        <input type="checkbox" value="1210106000">&nbsp;<span>粗面岩</span>\
                        <input type="checkbox" value="1210107000">&nbsp;<span>霞石正常岩</span>\
                        <input type="checkbox" value="1210108000">&nbsp;<span>凝灰岩</span>\
                        <input type="checkbox" value="1210109000">&nbsp;<span>火山灰</span>\
                        <input type="checkbox" value="1210110000">&nbsp;<span>水泥用火山灰</span>\
                        <input type="checkbox" value="1210111000">&nbsp;<span>火山渣</span>\
                        <input type="checkbox" value="1210112000">&nbsp;<span>大理岩</span>\
                        <input type="checkbox" value="1210113000">&nbsp;<span>建筑用大理石</span>\
                        <input type="checkbox" value="1210114000">&nbsp;<span>板岩</span>\
                        <input type="checkbox" value="1210115000">&nbsp;<span>饰面用板岩</span>\
                        <input type="checkbox" value="1210116000">&nbsp;<span>水泥配料用板岩</span>\
                        <input type="checkbox" value="1210117000">&nbsp;<span>片麻岩</span>\
                        <input type="checkbox" value="1210118000">&nbsp;<span>角闪岩</span>\
                        <input type="checkbox" value="1210119000">&nbsp;<span>海砂</span>\
					</div>\
					<div class="control-group" id="0102110000range">\
                        <input type="checkbox" value="1211001000">&nbsp;<span>矿泉水</span>\
                        <input type="checkbox" value="1211002000">&nbsp;<span>地下水</span>\
                        <input type="checkbox" value="1211003000">&nbsp;<span>二氧化碳气</span>\
                        <input type="checkbox" value="1211004000">&nbsp;<span>硫化氢气</span>\
                        <input type="checkbox" value="1211005000">&nbsp;<span>氦气</span>\
                        <input type="checkbox" value="1211006000">&nbsp;<span>氢气</span>\
                        <input type="checkbox" value="1211007000">&nbsp;<span>氡气</span>\
					</div>\
					<div class="control-group" id="0103000000range">\
                        <input type="checkbox" value="0103001000"><span>尾矿库运行</span>\
					</div>\
					<div class="control-group" id="0104000000range">\
                        <input type="checkbox" value="0104001000"><span>金属非金属矿山采掘施工作业</span>\
					</div>\
					<div class="control-group" id="0105000000range">\
                        <input type="checkbox" value="0105001000"><span>金属非金属矿产资源地质勘探</span>\
            		</div>\
				   	<div class="control-group" style="margin-top:10px;">\
					   	<button type="button" class="btn btn-info" id="makesure" style="width:80px;">确定</button>\
					</div>\
				</div>\
			</div>\
		</div>'
		$('.popbox').append(p);
		$('#applyRangeAlert').modal({keyboard:false,backdrop:'static'});
		
		otherHide();
		hideOrShow();
		$('#applyRangeChoose').bind('change',function(){
			switch($('#applyRangeChoose').val()){
				case '0':
					otherHide();
					hideOrShow();
					break;
				case '0101000000':
					otherHide();
					hideOrShow();
					$('#0101000000range').show();

					break;
				case '0102000000':
					otherHide();
					hideOrShow();
					$('#0102000000range').show();
					$('#0102000000Choose').bind('change',function(){
						switch($('#0102000000Choose').val()){
							case'0':
								hideOrShow();
								break;
							case '0102010000':
								hideOrShow();
								$('#0102010000range').show();
								break;
							case '0102020000':
								hideOrShow();
								$('#0102020000range').show();
								break;
							case '0102030000':
								hideOrShow();
								$('#0102030000range').show();
								break;
							case '0102040000':
								hideOrShow();
								$('#0102040000range').show();
								break;
							case '0102050000':
								hideOrShow();
								$('#0102050000range').show();
								break;
							case '0102060000':
								hideOrShow();
								$('#0102060000range').show();
								break;
							case '0102070000':
								hideOrShow();
								$('#0102070000range').show();
								break;
							case '0102080000':
								hideOrShow();
								$('#0102080000range').show();
								break;
							case '0102090000':
								hideOrShow();
								$('#0102090000range').show();
								break;
							case '0102100000':
								hideOrShow();
								$('#0102100000range').show();
								break;
							case '0102110000':
								hideOrShow();
								$('#0102110000range').show();
								break;
							}
						})
					break;
				case '0103000000':
					otherHide();
					hideOrShow();
					$('#0103000000range').show();
					break;
				case '0104000000':
					otherHide();
					hideOrShow();
					$('#0104000000range').show();
					break;
				case '0105000000':
					otherHide();
					hideOrShow();
					$('#0105000000range').show();
					break;
			}
			$('input[type="checkbox"]').click(function(){
				$('#applyRange').text($('input:checked').next().text());
			})
		})
		$('#makesure').click(function(){
			if ($('input:checked').length !=0) {
				$('#applyRangeAlert').modal('hide');
			}else{
				alert('请至少选择一项')
			}
		})
	});


	var checktime = /\d{4}-[0-1]\d-[0-3]\d/;
	if ($('.stime').val() != ""){
		if (!checktime.test($('.stime').val())){
			$('.stime').parent().addClass('error');
			message("error", '错误!', '查询时间格式不正确');
			return false;
		}
		else{
			$('.stime').parent().removeClass('error');
			a = {total:1,data:[["1",'asdf','gasdfga','asdfg']]}
		}
	}
	if ($('.etime').val() != ""){
		if (!checktime.test($('.etime').val())){
			$('.etime').parent().addClass('error');
			message("error", '错误!', '查询时间格式不正确');
			return false;
		}
		else{
			$('.etime').parent().removeClass('error');
			a = {total:1,data:[["1",'asdf','gasdfga','asdfg']]}
		}
	}
	laydate({
        elem: '#stime'
     });
    laydate({
        elem: '#etime'
    });
    
	$('.applysubmit').click(function(){
		function checkout(){
			if (($('#applyNumber').val()&&$('#stime').val()&&$('#acceptNumer').val()&&$('#etime').val()&&$('#transactor').val()&&$('#tel').val()&&$('#applyCompanyName').text()&&$('#evidentCompanyName').text()) == 0 ) {
				alert('请将信息填写完整');
			}else{
				var e = {
						applynumber : $('#applyNumber').val(),
						startdate : $('#stime').val(),
						acceptnumber : $('#acceptNumer').val(),
						enddate : $('#etime').val(),
						transactor : $('#transactor').val(),
						tel : $('#tel').val(),
						appplycompanyname: $('#applyCompanyName').text(),
						evidentcompanyname:$('#evidentCompanyName').text(),
						range: $('#applyRange').text()
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
					pcdata('post', 'AskTransactionServlet', e, 'json', false, f);
			};
		}
		checkout();
		
		// userlog(a);
	})
})