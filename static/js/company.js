var coption=0;
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
	$('#0101000000range').hide();
	$('#0102000000range').hide();
	$('#0103000000range').hide();
	$('#0104000000range').hide();
	$('#0105000000range').hide();
}
function remove(){
	$('#0102000000Choose').remove();
	$('#0102010000range').remove();
	$('#0102020000range').remove();
	$('#0102030000range').remove();
	$('#0102040000range').remove();
	$('#0102050000range').remove();
	$('#0102060000range').remove();
	$('#0102070000range').remove();
	$('#0102080000range').remove();
	$('#0102090000range').remove();
	$('#0102100000range').remove();
	$('#0102110000range').remove();
	$('#0101000000range').remove();
	$('#0102000000range').remove();
	$('#0103000000range').remove();
	$('#0104000000range').remove();
	$('#0105000000range').remove();
	$('.mineTypeImportant').remove();
}
function changeByCompanyType(){
	if($('.minearea').find('select')){
		remove();
	}
	var p = '<select id="0102000000Choose" class="form-control" placeholder="请选择">\
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
		<span class="mineTypeImportant" style="color:red;">*</span>\
		<div class="control-group" id="0102010000range">\
			<input type="checkbox" value="1201002000">&nbsp;<span>油页岩、</span>\
	        <input type="checkbox" value="1201003000">&nbsp;<span>石油、</span>\
	        <input type="checkbox" value="1201004000">&nbsp;<span>天然气、</span>\
	        <input type="checkbox" value="1201005000">&nbsp;<span>煤层气、</span>\
	        <input type="checkbox" value="1201006000">&nbsp;<span>天然沥青、</span>\
	        <input type="checkbox" value="1201007000">&nbsp;<span>地热、</span>\
	        <input type="checkbox" value="1201008000">&nbsp;<span>铀、</span>\
	        <input type="checkbox" value="1201009000">&nbsp;<span>钍、</span>\
	        <input type="checkbox" value="1201010000">&nbsp;<span>石煤、</span>\
	    </div>\
		<div class="control-group" id="0102020000range">\
	        <input type="checkbox" value="1202001000">&nbsp;<span>铁矿、</span>\
	        <input type="checkbox" value="1202002000">&nbsp;<span>锰矿、</span>\
	        <input type="checkbox" value="1202003000">&nbsp;<span>铬铁矿、</span>\
	        <input type="checkbox" value="1202004000">&nbsp;<span>钛矿、</span>\
	        <input type="checkbox" value="1202005000">&nbsp;<span>钒矿、</span>\
	        <input type="checkbox" value="1202006000">&nbsp;<span>金红石、</span>\
		</div>\
		<div class="control-group" id="0102030000range">\
	        <input type="checkbox" value="1203001000">&nbsp;<span>铜矿、</span>\
	        <input type="checkbox" value="1203002000">&nbsp;<span>铅矿、</span>\
	        <input type="checkbox" value="1203003000">&nbsp;<span>锌矿、</span>\
	        <input type="checkbox" value="1203004000">&nbsp;<span>铝土矿、</span>\
	        <input type="checkbox" value="1203005000">&nbsp;<span>镁矿、</span>\
	        <input type="checkbox" value="1203006000">&nbsp;<span>镍矿、</span>\
	        <input type="checkbox" value="1203007000">&nbsp;<span>钴矿、</span>\
	        <input type="checkbox" value="1203008000">&nbsp;<span>钨矿、</span>\
	        <input type="checkbox" value="1203009000">&nbsp;<span>锡矿、</span>\
	        <input type="checkbox" value="1203010000">&nbsp;<span>铋矿、</span>\
	        <input type="checkbox" value="1203011000">&nbsp;<span>钼矿、</span>\
	        <input type="checkbox" value="1203012000">&nbsp;<span>汞矿、</span>\
	        <input type="checkbox" value="1203013000">&nbsp;<span>锑矿、</span>\
	        <input type="checkbox" value="1203014000">&nbsp;<span>多金属、</span>\
		</div>\
		<div class="control-group" id="0102040000range">\
	        <input type="checkbox" value="1204001000">&nbsp;<span>金矿、</span>\
	        <input type="checkbox" value="1204002000">&nbsp;<span>砂金、</span>\
	        <input type="checkbox" value="1204003000">&nbsp;<span>银矿、</span>\
		</div>\
		<div class="control-group" id="0102050000range">\
	        <input type="checkbox" value="1205001000">&nbsp;<span>铌钽矿、</span>\
	        <input type="checkbox" value="1205002000">&nbsp;<span>铌矿、</span>\
	        <input type="checkbox" value="1205003000">&nbsp;<span>钽矿、</span>\
	        <input type="checkbox" value="1205004000">&nbsp;<span>铍矿、</span>\
	        <input type="checkbox" value="1205005000">&nbsp;<span>锂矿、</span>\
	        <input type="checkbox" value="1205006000">&nbsp;<span>锆矿、</span>\
	        <input type="checkbox" value="1205007000">&nbsp;<span>锶矿(天青石)、</span>\
	        <input type="checkbox" value="1205008000">&nbsp;<span>铷矿、</span>\
	        <input type="checkbox" value="1205009000">&nbsp;<span>铯矿、</span>\
	        <input type="checkbox" value="1205010000">&nbsp;<span>重稀土矿、</span>\
	        <input type="checkbox" value="1205011000">&nbsp;<span>钇矿、</span>\
	        <input type="checkbox" value="1205012000">&nbsp;<span>钆矿、</span>\
	        <input type="checkbox" value="1205013000">&nbsp;<span>铽矿、</span>\
	        <input type="checkbox" value="1205014000">&nbsp;<span>镝矿、</span>\
	        <input type="checkbox" value="1205015000">&nbsp;<span>钬矿、</span>\
	        <input type="checkbox" value="1205016000">&nbsp;<span>铒矿、</span>\
	        <input type="checkbox" value="1205017000">&nbsp;<span>铥矿、</span>\
	        <input type="checkbox" value="1205018000">&nbsp;<span>镱矿、</span>\
	        <input type="checkbox" value="1205019000">&nbsp;<span>镥矿、</span>\
	        <input type="checkbox" value="1205020000">&nbsp;<span>轻稀土矿、</span>\
	        <input type="checkbox" value="1205021000">&nbsp;<span>铈矿、</span>\
	        <input type="checkbox" value="1205022000">&nbsp;<span>镧矿、</span>\
	        <input type="checkbox" value="1205023000">&nbsp;<span>镨矿、</span>\
	        <input type="checkbox" value="1205024000">&nbsp;<span>铷矿、</span>\
	        <input type="checkbox" value="1205025000">&nbsp;<span>钐矿、</span>\
	        <input type="checkbox" value="1205026000">&nbsp;<span>铕矿、</span>\
	        <input type="checkbox" value="1205027000">&nbsp;<span>锗矿、</span>\
	        <input type="checkbox" value="1205028000">&nbsp;<span>镓矿、</span>\
	        <input type="checkbox" value="1205029000">&nbsp;<span>铟矿、</span>\
	        <input type="checkbox" value="1205030000">&nbsp;<span>铊矿、</span>\
	        <input type="checkbox" value="1205031000">&nbsp;<span>鉿矿、</span>\
	        <input type="checkbox" value="1205032000">&nbsp;<span>铼矿、</span>\
	        <input type="checkbox" value="1205033000">&nbsp;<span>镉矿、</span>\
	        <input type="checkbox" value="1205034000">&nbsp;<span>钪矿、</span>\
	        <input type="checkbox" value="1205035000">&nbsp;<span>硒矿、</span>\
	        <input type="checkbox" value="1205036000">&nbsp;<span>碲矿、</span>\
		</div>\
		<div class="control-group" id="0102060000range">\
	        <input type="checkbox" value="1206001000">&nbsp;<span>蓝晶石、</span>\
	        <input type="checkbox" value="1206002000">&nbsp;<span>矽线石、</span>\
	        <input type="checkbox" value="1206003000">&nbsp;<span>红柱石、</span>\
	        <input type="checkbox" value="1206004000">&nbsp;<span>菱镁矿、</span>\
	        <input type="checkbox" value="1206005000">&nbsp;<span>萤石(普通)、</span>\
	        <input type="checkbox" value="1206006000">&nbsp;<span>熔剂用石灰岩、</span>\
	        <input type="checkbox" value="1206007000">&nbsp;<span>冶金用白云岩、</span>\
	        <input type="checkbox" value="1206008000">&nbsp;<span>冶金用石英岩、</span>\
	        <input type="checkbox" value="1206009000">&nbsp;<span>冶金用砂岩、</span>\
	        <input type="checkbox" value="1206010000">&nbsp;<span>铸型用砂岩、</span>\
	        <input type="checkbox" value="1206011000">&nbsp;<span>铸型用砂、</span>\
	        <input type="checkbox" value="1206012000">&nbsp;<span>冶金用脉石英、</span>\
	        <input type="checkbox" value="1206013000">&nbsp;<span>耐火粘土、</span>\
	        <input type="checkbox" value="1206014000">&nbsp;<span>铁矾土、</span>\
	        <input type="checkbox" value="1206015000">&nbsp;<span>铸型用粘土、</span>\
	        <input type="checkbox" value="1206016000">&nbsp;<span>熔剂用蛇纹岩、</span>\
	        <input type="checkbox" value="1206017000">&nbsp;<span>其他粘土、</span>\
	        <input type="checkbox" value="1206018000">&nbsp;<span>耐火用橄榄岩、</span>\
		</div>\
		<div class="control-group" id="0102070000range">\
	        <input type="checkbox" value="1207001000">&nbsp;<span>铂矿、</span>\
	        <input type="checkbox" value="1207002000">&nbsp;<span>钯矿、</span>\
	        <input type="checkbox" value="1207003000">&nbsp;<span>铱矿、</span>\
	        <input type="checkbox" value="1207004000">&nbsp;<span>铑矿、</span>\
	        <input type="checkbox" value="1207005000">&nbsp;<span>锇矿、</span>\
	        <input type="checkbox" value="1207006000">&nbsp;<span>钌矿、</span>\
		</div>\
		<div class="control-group" id="0102080000range">\
	        <input type="checkbox" value="1208001000">&nbsp;<span>自然硫、</span>\
	        <input type="checkbox" value="1208002000">&nbsp;<span>硫铁矿、</span>\
	        <input type="checkbox" value="1208003000">&nbsp;<span>纳硝石、</span>\
	        <input type="checkbox" value="1208004000">&nbsp;<span>明矾石、</span>\
	        <input type="checkbox" value="1208005000">&nbsp;<span>芒硝(含钙芒硝)、</span>\
	        <input type="checkbox" value="1208006000">&nbsp;<span>重晶石、</span>\
	        <input type="checkbox" value="1208007000">&nbsp;<span>毒重石、</span>\
	        <input type="checkbox" value="1208008000">&nbsp;<span>天然碱(Na2CO3)、</span>\
	        <input type="checkbox" value="1208009000">&nbsp;<span>电石用灰岩、</span>\
	        <input type="checkbox" value="1208010000">&nbsp;<span>制碱用灰岩、</span>\
	        <input type="checkbox" value="1208011000">&nbsp;<span>化肥用石灰岩、</span>\
	        <input type="checkbox" value="1208012000">&nbsp;<span>化肥用白云岩、</span>\
	        <input type="checkbox" value="1208013000">&nbsp;<span>化肥用石英岩、</span>\
	        <input type="checkbox" value="1208014000">&nbsp;<span>化肥用砂岩、</span>\
	        <input type="checkbox" value="1208015000">&nbsp;<span>含钾岩石、</span>\
	        <input type="checkbox" value="1208016000">&nbsp;<span>含钾砂页岩、</span>\
	        <input type="checkbox" value="1208017000">&nbsp;<span>化肥用橄榄岩、</span>\
	        <input type="checkbox" value="1208018000">&nbsp;<span>化肥用蛇纹岩、</span>\
	        <input type="checkbox" value="1208019000">&nbsp;<span>泥炭、</span>\
	        <input type="checkbox" value="1208020000">&nbsp;<span>钾盐、</span>\
	        <input type="checkbox" value="1208021000">&nbsp;<span>岩盐、</span>\
	        <input type="checkbox" value="1208022000">&nbsp;<span>湖盐、</span>\
	        <input type="checkbox" value="1208023000">&nbsp;<span>镁盐、</span>\
	        <input type="checkbox" value="1208024000">&nbsp;<span>天然卤水、</span>\
	        <input type="checkbox" value="1208025000">&nbsp;<span>碘、</span>\
	        <input type="checkbox" value="1208026000">&nbsp;<span>溴、</span>\
	        <input type="checkbox" value="1208027000">&nbsp;<span>砷、</span>\
	        <input type="checkbox" value="1208028000">&nbsp;<span>磷矿、</span>\
	        <input type="checkbox" value="1208029000">&nbsp;<span>矿盐、</span>\
		</div>\
		<div class="control-group" id="0102090000range">\
	        <input type="checkbox" value="1208030000">&nbsp;<span>磁铁磷灰石、</span>\
	        <input type="checkbox" value="1209001000">&nbsp;<span>金刚石、</span>\
	        <input type="checkbox" value="1209002000">&nbsp;<span>压电水晶、</span>\
	        <input type="checkbox" value="1209003000">&nbsp;<span>熔炼水晶、</span>\
	        <input type="checkbox" value="1209004000">&nbsp;<span>光学水晶、</span>\
	        <input type="checkbox" value="1209005000">&nbsp;<span>工艺水晶、</span>\
	        <input type="checkbox" value="1209006000">&nbsp;<span>蓝石棉、</span>\
	        <input type="checkbox" value="1209007000">&nbsp;<span>云母、</span>\
	        <input type="checkbox" value="1209008000">&nbsp;<span>电气石、</span>\
	        <input type="checkbox" value="1209009000">&nbsp;<span>冰洲石、</span>\
	        <input type="checkbox" value="1209010000">&nbsp;<span>光学萤石、</span>\
	        <input type="checkbox" value="1209011000">&nbsp;<span>硼石、</span>\
	        <input type="checkbox" value="1209012000">&nbsp;<span>水晶、</span>\
	        <input type="checkbox" value="1209013000">&nbsp;<span>方解石、</span>\
		</div>\
		<div class="control-group" id="0102100000range">\
	        <input type="checkbox" value="1210001000">&nbsp;<span>石墨、</span>\
	        <input type="checkbox" value="1210002000">&nbsp;<span>刚玉、</span>\
	        <input type="checkbox" value="1210003000">&nbsp;<span>硅灰石、</span>\
	        <input type="checkbox" value="1210004000">&nbsp;<span>滑石、</span>\
	        <input type="checkbox" value="1210005000">&nbsp;<span>石棉(温石棉)、</span>\
	        <input type="checkbox" value="1210006000">&nbsp;<span>长石、</span>\
	        <input type="checkbox" value="1210007000">&nbsp;<span>石榴子石、</span>\
	        <input type="checkbox" value="1210008000">&nbsp;<span>黄玉、</span>\
	        <input type="checkbox" value="1210009000">&nbsp;<span>叶蜡石、</span>\
	        <input type="checkbox" value="1210010000">&nbsp;<span>蛭石、</span>\
	        <input type="checkbox" value="1210011000">&nbsp;<span>沸石、</span>\
	        <input type="checkbox" value="1210012000">&nbsp;<span>石膏、</span>\
	        <input type="checkbox" value="1210013000">&nbsp;<span>宝石、</span>\
	        <input type="checkbox" value="1210014000">&nbsp;<span>玉石、</span>\
	        <input type="checkbox" value="1210015000">&nbsp;<span>玛瑙、</span>\
	        <input type="checkbox" value="1210016000">&nbsp;<span>玻璃用石灰岩、</span>\
	        <input type="checkbox" value="1210017000">&nbsp;<span>水泥用石灰岩、</span>\
	        <input type="checkbox" value="1210018000">&nbsp;<span>致灰用石灰岩、</span>\
	        <input type="checkbox" value="1210019000">&nbsp;<span>泥灰岩、</span>\
	        <input type="checkbox" value="1210020000">&nbsp;<span>白垩、</span>\
	        <input type="checkbox" value="1210021000">&nbsp;<span>玻璃用白云岩、</span>\
	        <input type="checkbox" value="1210022000">&nbsp;<span>玻璃用石英岩、</span>\
	        <input type="checkbox" value="1210023000">&nbsp;<span>玻璃用砂岩、</span>\
	        <input type="checkbox" value="1210024000">&nbsp;<span>水泥配料用砂岩、</span>\
	        <input type="checkbox" value="1210025000">&nbsp;<span>砖瓦用砂岩、</span>\
	        <input type="checkbox" value="1210026000">&nbsp;<span>陶瓷用砂岩、</span>\
	        <input type="checkbox" value="1210027000">&nbsp;<span>玻璃用砂、</span>\
	        <input type="checkbox" value="1210028000">&nbsp;<span>建筑用砂、</span>\
	        <input type="checkbox" value="1210029000">&nbsp;<span>水泥配料用砂、</span>\
	        <input type="checkbox" value="1210030000">&nbsp;<span>水泥标准砂、</span>\
	        <input type="checkbox" value="1210031000">&nbsp;<span>砖瓦用砂、</span>\
	        <input type="checkbox" value="1210032000">&nbsp;<span>玻璃用脉石英、</span>\
	        <input type="checkbox" value="1210033000">&nbsp;<span>粉石英、</span>\
	        <input type="checkbox" value="1210034000">&nbsp;<span>天然油石、</span>\
	        <input type="checkbox" value="1210035000">&nbsp;<span>硅藻土、</span>\
	        <input type="checkbox" value="1210036000">&nbsp;<span>陶粒页岩、</span>\
	        <input type="checkbox" value="1210037000">&nbsp;<span>砖瓦用页岩、</span>\
	        <input type="checkbox" value="1210038000">&nbsp;<span>水泥配料用页岩、</span>\
	        <input type="checkbox" value="1210039000">&nbsp;<span>高岭土、</span>\
	        <input type="checkbox" value="1210040000">&nbsp;<span>陶瓷土、</span>\
	        <input type="checkbox" value="1210041000">&nbsp;<span>凹凸棒石粘土、</span>\
	        <input type="checkbox" value="1210042000">&nbsp;<span>海泡石粘土、</span>\
	        <input type="checkbox" value="1210043000">&nbsp;<span>伊利石粘土、</span>\
	        <input type="checkbox" value="1210044000">&nbsp;<span>累托石粘土、</span>\
	        <input type="checkbox" value="1210045000">&nbsp;<span>膨润土、</span>\
	        <input type="checkbox" value="1210046000">&nbsp;<span>砖瓦用粘土、</span>\
	        <input type="checkbox" value="1210047000">&nbsp;<span>水泥用粘土、</span>\
	        <input type="checkbox" value="1210048000">&nbsp;<span>水泥配料用红土、</span>\
	        <input type="checkbox" value="1210049000">&nbsp;<span>水泥配料用黄土、</span>\
	        <input type="checkbox" value="1210050000">&nbsp;<span>水泥配料用泥岩、</span>\
	        <input type="checkbox" value="1210051000">&nbsp;<span>保温材料用粘土、</span>\
	        <input type="checkbox" value="1210052000">&nbsp;<span>铸石用玄武岩、</span>\
	        <input type="checkbox" value="1210053000">&nbsp;<span>水泥用辉绿岩、</span>\
	        <input type="checkbox" value="1210054000">&nbsp;<span>铸石用辉绿岩、</span>\
	        <input type="checkbox" value="1210055000">&nbsp;<span>水泥混合材料用安山岩、</span>\
	        <input type="checkbox" value="1210056000">&nbsp;<span>水泥混合材料用闪长玢岩、</span>\
	        <input type="checkbox" value="1210057000">&nbsp;<span>麦饭石、</span>\
	        <input type="checkbox" value="1210058000">&nbsp;<span>珍珠岩、</span>\
	        <input type="checkbox" value="1210059000">&nbsp;<span>黑曜石、</span>\
	        <input type="checkbox" value="1210060000">&nbsp;<span>松脂岩、</span>\
	        <input type="checkbox" value="1210061000">&nbsp;<span>浮石、</span>\
	        <input type="checkbox" value="1210062000">&nbsp;<span>水泥用粗面岩、</span>\
	        <input type="checkbox" value="1210063000">&nbsp;<span>铸石用粗面岩、</span>\
	        <input type="checkbox" value="1210064000">&nbsp;<span>玻璃用凝灰岩、</span>\
	        <input type="checkbox" value="1210065000">&nbsp;<span>水泥用凝灰岩、</span>\
	        <input type="checkbox" value="1210066000">&nbsp;<span>水泥用大理石、</span>\
	        <input type="checkbox" value="1210067000">&nbsp;<span>玻璃用大理石、</span>\
	        <input type="checkbox" value="1210068000">&nbsp;<span>建筑用石料(凝灰岩)、</span>\
	        <input type="checkbox" value="1210069000">&nbsp;<span>饰面用石料(大理石)、</span>\
	        <input type="checkbox" value="1210070000">&nbsp;<span>油砂、</span>\
	        <input type="checkbox" value="1210071000">&nbsp;<span>赭石、</span>\
	        <input type="checkbox" value="1210072000">&nbsp;<span>颜料矿物、</span>\
	        <input type="checkbox" value="1210073000">&nbsp;<span>颜料黄土、</span>\
	        <input type="checkbox" value="1210074000">&nbsp;<span>透辉石、</span>\
	        <input type="checkbox" value="1210075000">&nbsp;<span>透闪石、</span>\
	        <input type="checkbox" value="1210076000">&nbsp;<span>石灰岩、</span>\
	        <input type="checkbox" value="1210077000">&nbsp;<span>建筑石料用灰岩、</span>\
	        <input type="checkbox" value="1210078000">&nbsp;<span>含钾岩石、</span>\
	        <input type="checkbox" value="1210079000">&nbsp;<span>白云岩、</span>\
	        <input type="checkbox" value="1210080000">&nbsp;<span>建筑用白云岩、</span>\
	        <input type="checkbox" value="1210081000">&nbsp;<span>石英岩、</span>\
	        <input type="checkbox" value="1210082000">&nbsp;<span>冶金用石英岩、</span>\
	        <input type="checkbox" value="1210083000">&nbsp;<span>砂岩、</span>\
	        <input type="checkbox" value="1210084000">&nbsp;<span>天然石英砂、</span>\
	        <input type="checkbox" value="1210085000">&nbsp;<span>脉石岩、</span>\
	        <input type="checkbox" value="1210086000">&nbsp;<span>页岩、</span>\
	        <input type="checkbox" value="1210087000">&nbsp;<span>陶粒用粘土、</span>\
	        <input type="checkbox" value="1210088000">&nbsp;<span>橄榄岩、</span>\
	        <input type="checkbox" value="1210089000">&nbsp;<span>建筑用橄榄岩、</span>\
	        <input type="checkbox" value="1210090000">&nbsp;<span>蛇纹岩、</span>\
	        <input type="checkbox" value="1210091000">&nbsp;<span>饰面用蛇纹岩、</span>\
	        <input type="checkbox" value="1210092000">&nbsp;<span>玄武岩、</span>\
	        <input type="checkbox" value="1210093000">&nbsp;<span>岩棉用玄武岩、</span>\
	        <input type="checkbox" value="1210094000">&nbsp;<span>辉绿岩、</span>\
	        <input type="checkbox" value="1210095000">&nbsp;<span>建筑用辉绿岩、</span>\
	        <input type="checkbox" value="1210096000">&nbsp;<span>饰面用辉绿岩、</span>\
	        <input type="checkbox" value="1210097000">&nbsp;<span>饰面用灰岩、</span>\
	        <input type="checkbox" value="1210098000">&nbsp;<span>安山岩、</span>\
	        <input type="checkbox" value="1210099000">&nbsp;<span>饰面用安山岩、</span>\
	        <input type="checkbox" value="1210100000">&nbsp;<span>建筑用安山岩、</span>\
	        <input type="checkbox" value="1210101000">&nbsp;<span>闪长岩、</span>\
	        <input type="checkbox" value="1210102000">&nbsp;<span>建筑用闪长岩、</span>\
	        <input type="checkbox" value="1210103000">&nbsp;<span>花岗岩、</span>\
	        <input type="checkbox" value="1210104000">&nbsp;<span>建筑用花岗岩、</span>\
	        <input type="checkbox" value="1210105000">&nbsp;<span>饰面用花岗岩、</span>\
	        <input type="checkbox" value="1210106000">&nbsp;<span>粗面岩、</span>\
	        <input type="checkbox" value="1210107000">&nbsp;<span>霞石正常岩、</span>\
	        <input type="checkbox" value="1210108000">&nbsp;<span>凝灰岩、</span>\
	        <input type="checkbox" value="1210109000">&nbsp;<span>火山灰、</span>\
	        <input type="checkbox" value="1210110000">&nbsp;<span>水泥用火山灰、</span>\
	        <input type="checkbox" value="1210111000">&nbsp;<span>火山渣、</span>\
	        <input type="checkbox" value="1210112000">&nbsp;<span>大理岩、</span>\
	        <input type="checkbox" value="1210113000">&nbsp;<span>建筑用大理石、</span>\
	        <input type="checkbox" value="1210114000">&nbsp;<span>板岩、</span>\
	        <input type="checkbox" value="1210115000">&nbsp;<span>饰面用板岩、</span>\
	        <input type="checkbox" value="1210116000">&nbsp;<span>水泥配料用板岩、</span>\
	        <input type="checkbox" value="1210117000">&nbsp;<span>片麻岩、</span>\
	        <input type="checkbox" value="1210118000">&nbsp;<span>角闪岩、</span>\
	        <input type="checkbox" value="1210119000">&nbsp;<span>海砂、</span>\
		</div>\
		<div class="control-group" id="0102110000range">\
	        <input type="checkbox" value="1211001000">&nbsp;<span>矿泉水、</span>\
	        <input type="checkbox" value="1211002000">&nbsp;<span>地下水、</span>\
	        <input type="checkbox" value="1211003000">&nbsp;<span>二氧化碳气、</span>\
	        <input type="checkbox" value="1211004000">&nbsp;<span>硫化氢气、</span>\
	        <input type="checkbox" value="1211005000">&nbsp;<span>氦气、</span>\
	        <input type="checkbox" value="1211006000">&nbsp;<span>氢气、</span>\
	        <input type="checkbox" value="1211007000">&nbsp;<span>氡气、</span>\
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
	</div>'
	$('.minetypeHide').after(p);
	hideOrShow();
	otherHide();
	
	$('#0102000000Choose').bind('change',function(){
		switch($('#0102000000Choose').val()){
			case'0102010000':
				hideOrShow();
				otherHide();
				$('#0102010000range').show();
				$('input[type="checkbox"]').click(function(){
					$('.showHideRange input').attr('value',$('input:checked').next().text());
				})
				break;
			case'0102020000':
				hideOrShow();
				otherHide();
				$('#0102020000range').show();
				break;
			case'0102030000':
				hideOrShow();
				otherHide();
				$('#0102030000range').show();
				break;
			case'0102040000':
				hideOrShow();
				otherHide();
				$('#0102040000range').show();
				break;
			case'0102050000':
				hideOrShow();
				otherHide();
				$('#0102050000range').show();
				break;
			case'0102060000':
				hideOrShow();
				otherHide();
				$('#0102060000range').show();
				break;
			case'0102070000':
				hideOrShow();
				otherHide();
				$('#0102070000range').show();
				break;
			case'0102080000':
				hideOrShow();
				otherHide();
				$('#0102080000range').show();
				break;
			case'0102090000':
				hideOrShow();
				otherHide();
				$('#0102090000range').show();
				break;
			case'0102100000':
				hideOrShow();
				otherHide();
				$('#0102100000range').show();
				break;
			case'0102110000':
				hideOrShow();
				otherHide();
				$('#0102110000range').show();
				break;
		}
		$('input[type="checkbox"]').click(function(){
			$('.showHideRange input').attr('value',$('input:checked').next().text());
		})
	});
}
function getcompanylist(c){
    var f = function(b){
        option = {
            id : "company",
            total : b.total,
            pagination : true,
            functionName : getcompanylist,
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
                name : '单位名称',
                minWidth : 120,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 3,
                fun : null,
                name : '单位地址',
                minWidth : 160,
                show : true,
                sortable : false
            },
            {
                isCheckbox : false,
                index : 0,
                fun : null,
                name : '单位类型',
                minWidth : 120,
                show : true,
                sortable : false
            }]};
        $('#company').makeTbody(b.data,option);
        $('.center table input[type="checkbox"]').click(function(){
            if ($('.center table input[type="checkbox"]:checked').length == 1){
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
    var e ={
    	companyname:$('.companyquery').val(),
    	companytype:'',
        offset : (parseInt(c.page) - 1) * limit,
        limit : limit
    }
//    f({
//        total:100,
//        data:[[1,1,1,1],[2,2,2,2],[3,3,3,3]]
//    })
     pcdata('post','FindUnitByUnittypeServlet',e,'json',false,f)
}

function checkcompany(){
    var ret = true
    if ($('.companyname').val() == ""){
        $('.companyname').parent().addClass('error');
        ret = false;
    }else{
        $('.companyname').parent().removeClass('error');
    }
    if ($('.companyaddr').val() == ""){
        $('.companyaddr').parent().addClass('error')
        ret = false
    }else{
        $('.companyaddr').parent().removeClass('error')
    }
    //邮编
    if (!/\d{6}/.test($('.zipcode').val()) && $('.zipcode').val() != ""){
        $('.zipcode').parent().addClass('error')
        ret = false
    }else{
        $('.zipcode').parent().removeClass('error')
    }
    //从业人数
    if (!/\d*/.test($('.practinum').val())){
        $('.practinum').parent().addClass('error')
        ret = false
    }else{
        $('.practinum').parent().removeClass('error')
    }
    //专职安全管理人员数
    if (!/\d+/.test($('.fullsafetynum').val())){
        $('.fullsafetynum').parent().addClass('error')
        ret = false
    }else{
        $('.fullsafetynum').parent().removeClass('error')
    }
    //代表人
    $('.repre').each(function(){
        if ($(this).val() == ""){
            $(this).parent().addClass('error');
            ret = false;
        }else{
            $(this).parent().removeClass('error');
        }
    })
    //移动电话
    $('#compayinfo .mphone').each(function(){
        if (!/[1]{1}\d{10}/.test($(this).val())){
            $(this).parent().addClass('error');
            ret = false;
        }else{
            $(this).parent().removeClass('error');
        }
    })
    $('#compayinfo .ophone').each(function(){
        if (!/\d+/.test($(this).val())){
            $(this).parent().addClass('error')
            ret = false
        }else{
            $(this).parent().removeClass('error');
        }
    })
    if (!/\d+/.test($('.icrm').val())){
        $('.icrm').parent().addClass('error');
        ret = false
    }else{
        $('.icrm').parent().removeClass('error');
    }
    if (!checknotnull('.regauthority')){
    	ret = false
    }
    $('#compayinfo .time').each(function(){
        if (!/\d{4}-\d{2}-\d{2}/.test($(this).val())){
            $(this).parent().addClass('error')
            ret = false
        }else{
            $(this).parent().removeClass('error');
        }
    })
    return ret
}
function checknotnull(id){
    var ret = true
    if ($(id).val() == ""){
        $(id).parent().addClass('error');
        ret = false
    }else{
        $(id).parent().removeClass('error');
    }
    return ret
}
function checkmine(){
    var ret = true
    //服务年限
    $('#mineinfo .mastnum').each(function(){
        if (!/\d+/.test($(this).val())){
            $(this).parent().addClass('error');
            ret = false;
        }else{
            $(this).parent().removeClass('error');
        };
    });
//    alert(ret)
    //人数
    $('#mineinfo .mchecknum').each(function(){
        if (!/\d*/.test($(this).val())){
            $(this).parent().addClass('error');
            ret = false;
        }else{
            $(this).parent().removeClass('error');
        }
    });
//    alert(ret)
    if (checknotnull('.acceptancecompany') && checknotnull('.acceptanceapproval')&&
    		checknotnull('.mininglicense')&&checknotnull('.miningregauthority')&&
    		checknotnull('.miningst')&&checknotnull('.miningst')&&checknotnull('.miningend')){
    	
    }else{
    	ret = false
    }
    return ret
}

function checkpremitscope(){
    var ret = true
    if (checknotnull('.rangmininglicense')&&checknotnull('.rangminingregauthority')&&
    		checknotnull('.rangst')&&checknotnull('.rangend')&&checknotnull('.rangacceptancecom')&&
    		checknotnull('.rangacceptanceapproval')){
    	
    }else{
    	ret = false
    }
    return ret
}

function checktailing(){
    var ret = true
    $('#tailingreservoir .mastnum').each(function(){
        if (!/\d+/.test($(this).val())){
            $(this).parent().addClass('error')
            ret = false
        }else{
            $(this).parent().removeClass('error')
        }
    });
    if (!/(\d+)|(0\.\d+)/.test($('.damslope').val())){
        $('.damslope').addClass('error')
        ret = false
    }else{
        $('.damslope').removeClass('error')
    }
    if (checknotnull('.reservoiracceptancecom')&&checknotnull('.reservoiracceptanceapproval')){
    	
    }else{
    	ret = false
    }
    return ret
}

function checkquali(){
    var ret = true
    if (checknotnull('#qualification .qualificanum')&&checknotnull('#qualification .issuingauthor')&&
    		checknotnull('#qualification .qualificalvl')&&checknotnull('#qualification .qualificarang')&&
    		checknotnull('#qualification .qualificast')&&checknotnull('#qualification .qualificaend')){
    	
    }else{
    	ret = false
    }
    return ret
}

function cleardata(){
    $('#createcompany input[type="text"]').each(function(){
        $(this).val('')
    })
    $('#createcompany select').each(function(){
        $(this).removeAttr("selected")
    })
    $('#createcompany input[type="checkbox"]').each(function(){
        $(this).removeAttr('checked')
    })
}

function setselect(id,data){
    $(id).each(function(){
        if ($(this).val() == data){
            $(this).attr('selected',true)
        }
    })
}

function getcompanyinfo(id){
	changeByCompanyType();
	
    if (id.hasClass('disabled')) {
        return false
    };
//    alert($('.center table input[type="checkbox"]:checked').length)
    if ($('.center table input[type="checkbox"]:checked').length != 1){
        message('warning','警告','请选择一个单位进行操作')
        return false
    }
    $('#createcompany button.btn').each(function(){
        $(this).show()
    })
    coption = 1
    var f = function(b){
    	$('#myTab').children().each(function(){
            $(this).removeClass('active')
            $(this).hide()
        })
        $('.compayinfo').show()
        $('.companytype option').each(function(){
        	if ($(this).attr('name') == b.companytype){
        		$('.' + $(this).val()).show()
        	}
        })
        $('select').children().first().attr('selected',true)
        $('#myTabContent').children().each(function(){
            $(this).removeClass('active')
        })
        $('#compayinfo').addClass('in')
        $('#compayinfo').addClass('active')
        $('.compayinfo').addClass('active')
    	$('.companytype').attr('disabled',true)
        $('.companytype option').each(function(){
            if ($(this).attr('name') == b.companytype){
                $(this).attr('selected',true)
            }
        })
        setselect('.area option',b.area)
        $('.companyname').val(b.companyname)
        $('.companyaddr').val(b.companyaddr)
        $('.zipcode').val(b.zipcode)
        $('.practinum').val(b.practinum)
        setselect('.economictype option',b.economictype)
        $('.fullsafetynum').val(b.fullsafetynum)
        $('.legalrepre').val(b.legalrepre)
        $('.legalrepreo_ophone').val(b.legalrepreo_ophone)
        $('.legalrepreo_mphone').val(b.legalrepreo_mphone)
        $('.principal').val(b.principal)
        $('.principal_ophone').val(b.principal_ophone)
        $('.principal_mphone').val(b.principal_mphone)
        $('.safety').val(b.safety)
        $('.safety_ophone').val(b.safety_ophone)
        $('.safety_mphone').val(b.safety_mphone)
        $('.icrm').val(b.icrm)
        $('.regauthority').val(b.regauthority)
        $('.regtime').val(b.regtime)
        $('.regendtime').val(b.regendtime)
        if (b.survey){
            $('.survey').attr('checked',true)
        }
        switch($('.companytype option:selected').val()){
            case 'mineinfo':
                $('.showHideRange input').val(b.minetype)
                setselect('.miningmethod option',b.miningmethod)
                $('.desservicelife').val(b.desservicelife)
                $('.producdate').val(b.producdate)
                $('.desthroughput').val(b.desthroughput)
                setselect('.throughputunit option',b.throughputunit)
                $('.acceptancecompany').val(b.acceptancecompany)
                $('.acceptanceapproval').val(b.acceptanceapproval)
                $('.holdernum').val(b.holdernum)
                $('.qualificationnum').val(b.qualificationnum)
                $('.safetyengineer').val(b.safetyengineer)
                $('.mininglicense').val(b.mininglicense)
                $('.miningregauthority').val(b.miningregauthority)
                $('.miningst').val(b.miningst)
                $('.miningend').val(b.miningend)
                break
            case 'premitscope':
            	var str = b.premitscoperang.split(',');
            	for(var i = 0;i < str.length;i++){
                    $('#premitscope table input').each(function(){
                        if ($(this).next().text() == str[i]){
                            $(this).attr('checked',true)
                        }
                    })
            	}
                $('.rangmininglicense').val(b.rangmininglicense)
                $('.rangminingregauthority').val(b.rangminingregauthority)
                $('.rangst').val(b.rangst)
                $('.rangend').val(b.rangend)
                $('.rangacceptancecom').val(b.rangacceptancecom)
                $('.rangacceptanceapproval').val(b.rangacceptanceapproval)
                break
            case 'tailingreservoir':
                setselect('.reservoirtype option',b.reservoirtype)
                setselect('.reservoirlvl option',b.reservoirlvl)
                setselect('.security option',b.security)
                setselect('.constructionmethod option',b.constructionmethod)
                setselect('.floodmethod option',b.floodmethod)
                setselect('.putminemethod option',b.putminemethod)
                $('.damslope').prev().val('1')
                $('.desreservoirvol').val(b.desreservoirvol)
                $('.desdamheight').val(b.desdamheight)
                $('.resdesservicelife').val(b.resdesservicelife)
                $('.earlydamheight').val(b.earlydamheight)
                $('.earlydamwidth').val(b.earlydamwidth)
                $('.damslope').val(b.damslope)
                $('.reservoiracceptancecom').val(b.reservoiracceptancecom)
                $('.reservoiracceptanceapproval').val(b.reservoiracceptanceapproval)
                break
            case 'qualification':
                $('.qualificanum').val(b.qualificanum)
                $('.issuingauthor').val(b.issuingauthor)
                $('.qualificalvl').val(b.qualificalvl)
                $('.qualificarang').val(b.qualificarang)
                $('.qualificast').val(b.qualificast)
                $('.qualificaend').val(b.qualificaend)
                break
//            case 'othercompany':
//               break
        }
        $('#myTab .tabli').each(function(){
            $(this).addClass('hide')
        })
        $('.' + $('.companytype option:selected').val()).removeClass('hide')
        $('#createcompany').modal('show');
    }
    var e = {
		companyname :　$('input:checked').parent().next().html()
    }
//    f({data:{companytype:"金属非金属矿山企业",area:"1923010200"}})
     pcdata('post','SelectCompanyByNameServlet',e,'json',false,f)
}

function getcominfo(id){
	
	if (id.hasClass('disabled')) {
        return false
    };
//    alert($('.center table input[type="checkbox"]:checked').length)
    if ($('.center table input[type="checkbox"]:checked').length != 1){
        message('warning','警告','请选择一个单位进行操作')
        return false
    }
    $('#createcompany button.btn').each(function(){
        $(this).show()
    })
    coption = 1
    var f = function(b){
    	$('#myTab').children().each(function(){
            $(this).removeClass('active')
            $(this).hide()
        })
        $('.compayinfo').show()
        $('.companytype option').each(function(){
        	if ($(this).attr('name') == b.companytype){
        		$('.' + $(this).val()).show()
        	}
        })
        $('select').children().first().attr('selected',true)
        $('#myTabContent').children().each(function(){
            $(this).removeClass('active')
        })
        $('#compayinfo').addClass('in')
        $('#compayinfo').addClass('active')
        $('.compayinfo').addClass('active')
    	$('.companytype').attr('disabled',true)
        $('.companytype option').each(function(){
            if ($(this).attr('name') == b.companytype){
                $(this).attr('selected',true)
            }
        })
        setselect('.area option',b.area)
        $('.companyname').val(b.companyname)
        $('.companyaddr').val(b.companyaddr)
        $('.zipcode').val(b.zipcode)
        $('.practinum').val(b.practinum)
        setselect('.economictype option',b.economictype)
        $('.fullsafetynum').val(b.fullsafetynum)
        $('.legalrepre').val(b.legalrepre)
        $('.legalrepreo_ophone').val(b.legalrepreo_ophone)
        $('.legalrepreo_mphone').val(b.legalrepreo_mphone)
        $('.principal').val(b.principal)
        $('.principal_ophone').val(b.principal_ophone)
        $('.principal_mphone').val(b.principal_mphone)
        $('.safety').val(b.safety)
        $('.safety_ophone').val(b.safety_ophone)
        $('.safety_mphone').val(b.safety_mphone)
        $('.icrm').val(b.icrm)
        $('.regauthority').val(b.regauthority)
        $('.regtime').val(b.regtime)
        $('.regendtime').val(b.regendtime)
        if (b.survey){
            $('.survey').attr('checked',true)
        }
        switch($('.companytype option:selected').val()){
            case 'mineinfo':
            	$('.minearea').hide();
                $('.showHideRange input').val(b.minetype)
                setselect('.miningmethod option',b.miningmethod)
                $('.desservicelife').val(b.desservicelife)
                $('.producdate').val(b.producdate)
                $('.desthroughput').val(b.desthroughput)
                setselect('.throughputunit option',b.throughputunit)
                $('.acceptancecompany').val(b.acceptancecompany)
                $('.acceptanceapproval').val(b.acceptanceapproval)
                $('.holdernum').val(b.holdernum)
                $('.qualificationnum').val(b.qualificationnum)
                $('.safetyengineer').val(b.safetyengineer)
                $('.mininglicense').val(b.mininglicense)
                $('.miningregauthority').val(b.miningregauthority)
                $('.miningst').val(b.miningst)
                $('.miningend').val(b.miningend)
                break
            case 'premitscope':
            	var str = b.premitscoperang.split(',');
            	for(var i = 0;i < str.length;i++){
                    $('#premitscope table input').each(function(){
                        if ($(this).next().text() == str[i]){
                            $(this).attr('checked',true)
                        }
                    })
            	}
                $('.rangmininglicense').val(b.rangmininglicense)
                $('.rangminingregauthority').val(b.rangminingregauthority)
                $('.rangst').val(b.rangst)
                $('.rangend').val(b.rangend)
                $('.rangacceptancecom').val(b.rangacceptancecom)
                $('.rangacceptanceapproval').val(b.rangacceptanceapproval)
                break
            case 'tailingreservoir':
                setselect('.reservoirtype option',b.reservoirtype)
                setselect('.reservoirlvl option',b.reservoirlvl)
                setselect('.security option',b.security)
                setselect('.constructionmethod option',b.constructionmethod)
                setselect('.floodmethod option',b.floodmethod)
                setselect('.putminemethod option',b.putminemethod)
                $('.damslope').prev().val('1')
                $('.desreservoirvol').val(b.desreservoirvol)
                $('.desdamheight').val(b.desdamheight)
                $('.resdesservicelife').val(b.resdesservicelife)
                $('.earlydamheight').val(b.earlydamheight)
                $('.earlydamwidth').val(b.earlydamwidth)
                $('.damslope').val(b.damslope)
                $('.reservoiracceptancecom').val(b.reservoiracceptancecom)
                $('.reservoiracceptanceapproval').val(b.reservoiracceptanceapproval)
                break
            case 'qualification':
                $('.qualificanum').val(b.qualificanum)
                $('.issuingauthor').val(b.issuingauthor)
                $('.qualificalvl').val(b.qualificalvl)
                $('.qualificarang').val(b.qualificarang)
                $('.qualificast').val(b.qualificast)
                $('.qualificaend').val(b.qualificaend)
                break
//            case 'othercompany':
//               break
        }
        $('#myTab .tabli').each(function(){
            $(this).addClass('hide')
        })
        $('.' + $('.companytype option:selected').val()).removeClass('hide')
        $('#createcompany').modal('show');
    }
    var e = {
		companyname :　$('input:checked').parent().next().html()
    }
//    f({data:{companytype:"金属非金属矿山企业",area:"1923010200"}})
     pcdata('post','SelectCompanyByNameServlet',e,'json',false,f)
	
//    getcompanyinfo(id)
    $('#createcompany button.btn').each(function(){
        $(this).hide()
    })
//    pcdata('post','SelectCompanyByNameServlet',e,'json',false,f)
//    getcompanyinfo(id)
    
}

function delcompanyinfo(id){
    var f = function(b){
        message('success','成功','删除单位成功')
        getcompanylist({page:1})
    }
    if (id.hasClass('disabled')) {
        return false;
    }
    if ($('.center table input[type="checkbox"]:checked').length != 1){
        message('warning','警告','请选择一个单位进行操作');
        return false;
    }
    var e = {
        id:$('.center table input[type="checkbox"]:checked').val()
    }
    pcdata('post','delcompany',e,'json',false,f)
}

function getExcel(){
	window.open('unit/excel');
}


$(document).ready(function(){
	
    $('.select').click(function(){
        if ($('.companyquery').val() == ''){
            return false
        }
        getcompanylist({page:1})
    })
    getcompanylist({page:1})
    $('#createcompany .close').click(function(){
    	cleardata()
    	$('.info').each(function(){
    		$(this).parent().removeClass('error')
    	})
    })
    $('.save').click(function(){
    	if($('.showHideRange input').val().indexOf('*') >= 0){
    		var mineTypestr = $('.showHideRange input').val().substring(1);
    	}else{
    		var mineTypestr = $('.showHideRange input').val();
    	}
        var f = function(b){
            message('success','成功','保存单位成功')
            cleardata()
            $('#createcompany').modal('hide');
            getcompanylist({page:1})
        }
        if (!checkcompany()){
            return false
        }
        var e = {
            companytype:$('.companytype option:selected').attr('name'),
            area:$('.area').val(),
            companyname:$('.companyname').val(),
            companyaddr:$('.companyaddr').val(),
            zipcode:$('.zipcode').val(),
            practinum:$('.practinum').val(),
            economictype:$('.economictype').val(),
            fullsafetynum:$('.fullsafetynum').val(),
            legalrepre:$('.legalrepre').val(),
            legalrepreo_ophone:$('.legalrepreo_ophone').val(),
            legalrepreo_mphone:$('.legalrepreo_mphone').val(),
            principal:$('.principal').val(),
            principal_ophone:$('.principal_ophone').val(),
            principal_mphone:$('.principal_mphone').val(),
            safety:$('.safety').val(),
            safety_ophone:$('.safety_ophone').val(),
            safety_mphone:$('.safety_mphone').val(),
            icrm:$('.icrm').val(),
            regauthority:$('.regauthority').val(),
            regtime:$('.regtime').val(),
            regendtime:$('.regendtime').val(),
            survey:$('.survey').val(),
        }
        switch($('.companytype').val()){
            case 'mineinfo':
                if (!checkmine()){
                    return false
                }
                e.minetype = $('.showHideRange input').val()
                e.miningmethod = $('.miningmethod  option:selected').text()
                e.desservicelife = $('.desservicelife').val()
                e.producdate = $('.producdate').val()
                e.desthroughput = $('.desthroughput').val()
                e.throughputunit = $('.throughputunit option:selected').text()
                e.acceptancecompany = $('.acceptancecompany').val()
                e.acceptanceapproval = $('.acceptanceapproval').val()
                e.holdernum = $('.holdernum').val()
                e.qualificationnum = $('.qualificationnum').val()
                e.safetyengineer = $('.safetyengineer').val()
                e.mininglicense = $('.mininglicense').val()
                e.miningregauthority = $('.miningregauthority').val()
                e.miningst = $('.miningst').val()
                e.miningend = $('.miningend').val()
                break;
            case 'premitscope':
                if (!checkpremitscope()){
                    return false
                }
                e.premitscoperang = [];
                $('#premitscope table input').each(function(){
                    if ($(this).is(':checked')){
                        e.premitscoperang.push($(this).next().text())
                    }
                })
                e.premitscoperang =  e.premitscoperang.join(",")
                console.log(e.premitscoperang)
                e.rangmininglicense = $('.rangmininglicense').val()
                e.rangminingregauthority = $('.rangminingregauthority').val()
                e.rangst = $('.rangst').val()
                e.rangend = $('.rangend').val()
                e.rangacceptancecom = $('.rangacceptancecom').val()
                e.rangacceptanceapproval = $('.rangacceptanceapproval').val()
                break;
            case 'tailingreservoir':
                if (!checktailing()){
                    return false
                }
                e.reservoirtype = $('.reservoirtype option:selected').text()
                e.reservoirlvl = $('.reservoirlvl').val()
                e.security = $('.security').val()
                e.constructionmethod = $('.constructionmethod').val()
                e.floodmethod = $('.floodmethod').val()
                e.putminemethod = $('.putminemethod').val()
                e.desreservoirvol = $('.desreservoirvol').val()
                e.desdamheight = $('.desdamheight').val()
                e.resdesservicelife = $('.resdesservicelife').val()
                e.earlydamheight = $('.earlydamheight').val()
                e.earlydamwidth = $('.earlydamwidth').val()
                e.damslope = $('.damslope').val()
                e.reservoiracceptancecom = $('.reservoiracceptancecom').val()
                e.reservoiracceptanceapproval = $('.reservoiracceptanceapproval').val()
                break
            case 'qualification':
                if (!checkquali()){
                    return false
                }
                e.qualificanum = $('.qualificanum').val()
                e.issuingauthor = $('.issuingauthor').val()
                e.qualificalvl = $('.qualificalvl').val()
                e.qualificarang = $('.qualificarang').val()
                e.qualificast = $('.qualificast').val()
                e.qualificaend = $('.qualificaend').val()
                break
        }
//        f()
        if (coption == 0){
        	pcdata('post','createcompany',e,'json',false,f)
        }else if (coption == 1){
        	pcdata('post','changecompany',e,'json',false,f)
        }
         
    })
    $('.create').click(function(){
    	changeByCompanyType()
    	$('#createcompany button.btn').each(function(){
            $(this).show()
        })
        coption=0
        $('#createcompany .companytype').removeAttr('disabled')
        $('.companytype').attr('name',$('.companytype').children().first().attr('name'))
        $('#myTab').children().each(function(){
            $(this).removeClass('active')
            $(this).hide()
        })
        $('.compayinfo').show()
        $('.mineinfo').show()
        $('select').children().first().attr('selected',true)
        $('#myTabContent').children().each(function(){
            $(this).removeClass('active')
        })
        $('#compayinfo').addClass('in')
        $('#compayinfo').addClass('active')
        $('.compayinfo').addClass('active')
        $('#createcompany').modal({keyboard:false,backdrop:'static'});
    })
    $('.companytype').change(function(){
        $('.companytype').attr('name',$('.companytype option:checked').text());
        $('.tabli').each(function(){
            $(this).hide()
            $(this).removeClass('active')
        })
        $("." + $(this).val()).show()
        $('#myTabContent').children().each(function(){
            $(this).removeClass('active')
        })
        $('.compayinfo').addClass('active')
        $('#compayinfo').addClass('in')
        $('#compayinfo').addClass('active')
        
    })
    laydate({
        elem: '#cstime'
    });
    laydate({
        elem: '#cetime'
    });
    laydate({
        elem: '#opertime'
    });
    laydate({
        elem: '#caikuangst'
    });
    laydate({
        elem: '#caikuangend'
    });
    laydate({
        elem: '#premitstime'
    });
    laydate({
        elem: '#premitetime'
    });
    laydate({
    	elem: '#qualistime'
    });
	laydate({
		elem: '#qualietime'
	});
})