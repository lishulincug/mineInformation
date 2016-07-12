function getThreeInfo(){
	var e={}
	var f = function(b){
		$('.empty').each(function(i){
			$(this).text(b.data[i]);
		})
	}
	pcdata('post', 'GetAllNumServlet', e, 'json', false, f);
	$('.haerbin').click(function(){
		var e = {
			unitaddress: $('.haerbin').attr('class')
		}
		var f = function(b){
			$('.hrbempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.qiqihaer').click(function(){
		console.log($('.qiqihaer').attr('class'))
		var e = {
			unitaddress:$('.qiqihaer').attr('class')
		}
		var f = function(b){
			$('.qqempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.mudanjiang').click(function(){
		console.log($('.mudanjiang').attr('class'))
		var e = {
			unitaddress:$('.mudanjiang').attr('class')
		}
		var f = function(b){
			$('.mdjempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.jiamusi').click(function(){
		var e = {
			unitaddress:$('.jiamusi').attr('class')
		}
		var f = function(b){
			$('.jmsempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.daqing').click(function(){
		var e = {
			unitaddress:$('.daqing').attr('class')
		}
		var f = function(b){
			$('.dqempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.jixi').click(function(){
		var e = {
			unitaddress:$('.jixi').attr('class')
		}
		var f = function(b){
			$('.jxempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.shuangyashan').click(function(){
		var e = {
			unitaddress:$('.shuangyashan').attr('class')
		}
		var f = function(b){
			$('.sysempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.yichun').click(function(){
		var e = {
			unitaddress:$('.yichun').attr('class')
		}
		var f = function(b){
			$('.ycempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.qitaihe').click(function(){
		var e = {
			unitaddress:$('.qitaihe').attr('class')
		}
		var f = function(b){
			$('.qthempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.hegang').click(function(){
		var e = {
			unitaddress:$('.hegang').attr('class')
		}
		var f = function(b){
			$('.hgempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.heihe').click(function(){
		var e = {
			unitaddress:$('.heihe').attr('class')
		}
		var f = function(b){
			$('.hhempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.suihua').click(function(){
		var e = {
			unitaddress:$('.suihua').attr('class')
		}
		var f = function(b){
			$('.shempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.daxinganling').click(function(){
		var e = {
			unitaddress:$('.daxinganling').attr('class')
		}
		var f = function(b){
			$('.dxalempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.nongkenzongju').click(function(){
		var e = {
			unitaddress:$('.nongkenzongju').attr('class')
		}
		var f = function(b){
			$('.nkzjempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.sengongzongju').click(function(){
		var e = {
			unitaddress:$('.sengongzongju').attr('class')
		}
		var f = function(b){
			$('.sgzjempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.suifenhe').click(function(){
		var e = {
			unitaddress:$('.suifenhe').attr('class')
		}
		var f = function(b){
			$('.sfhempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
	$('.fuyuan').click(function(){
		var e = {
			unitaddress:$('.fuyuan').attr('class')
		}
		var f = function(b){
			$('.fyempty').each(function(i){
				$(this).text(b.data[i]);
			});
		}
		pcdata('post', 'NumThreeTogetherServlet', e, 'json', false, f);
	})
}
$(document).ready(function(){
	getThreeInfo();
	
})