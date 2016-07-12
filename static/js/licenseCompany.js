function changePosition(b){
	for(var i = 0;i < b.data.length;i++){
		$('.empty').eq(i).find('td').each(function(j){
			b.data[i][17] = b.data[i][0]
			b.data[i][18] = b.data[i][1]
			b.data[i][j] = b.data[i][j+2]
			if(b.data[i][j] == null){
    			b.data[i][j] = 0;
    			$(this).text(b.data[i][j])
    		}else{
    			$(this).text(b.data[i][j])
   	 		}
		})
	}
}
//function sum(b){
//	var sum1 = 0;
//	var sum2 = 0;
//	var sum3 = 0;
//	var sum4 = 0;
//	var sum5 = 0;
//	var sum6 = 0;
//	var sum7 = 0;
//	var sum8 = 0;
//	var sum9 = 0;
//	var sum10 = 0;
//	var sum11 = 0;
//	var sum12 = 0;
//	var sum13 = 0;
//	var sum14 = 0;
//	for(var i = 0;i<b.data.length;i++){
//		for(var j = 1;j<b.data[0].length;j++){
//			if(b.data[i][j] == null){
//				b.data[i][j] = 0;
//			}
//		}
//	}
//	for(var i = 0;i<b.data.length;i++){
//		sum1 = sum1 + parseInt(b.data[i][0]);
//		sum2 = sum2 + parseInt(b.data[i][1]);
//		sum3 = sum3 + parseInt(b.data[i][2]);
//		sum4 = sum4 + parseInt(b.data[i][3]);
//		sum5 = sum5 + parseInt(b.data[i][4]);
//		sum6 = sum6 + parseInt(b.data[i][5]);
//		sum7 = sum7 + parseInt(b.data[i][6]);
//		sum8 = sum8 + parseInt(b.data[i][7]);
//		sum9 = sum9 + parseInt(b.data[i][8]);
//		sum10 = sum10 + parseInt(b.data[i][9]);
//		sum11 = sum11 + parseInt(b.data[i][10]);
//		sum12 = sum12 + parseInt(b.data[i][11]);
//		sum13 = sum13 + parseInt(b.data[i][12]);
//		sum14 = sum14 + parseInt(b.data[i][13]);
//	}
//	$('.sum1').text(sum1);
//	$('.sum2').text(sum2);
//	$('.sum3').text(sum3);
//	$('.sum4').text(sum4);
//	$('.sum5').text(sum5);
//	$('.sum6').text(sum6);
//	$('.sum7').text(sum7);
//	$('.sum8').text(sum8);
//	$('.sum9').text(sum9);
//	$('.sum10').text(sum10);
//	$('.sum11').text(sum11);
//	$('.sum12').text(sum12);
//	$('.sum13').text(sum13);
//	$('.sum14').text(sum14);
//}
$(document).ready(function(b){
    $('.statistics').click(function(){
        var e = {};
        var f = function(b){
        	 changePosition(b)
//             sum(b)
        }
        pcdata('post', 'StatisticalQueryServlet', e, 'json', false, f);
    })
    $('#excel').click(function(){
    	window.open("StatisticalToExcel");
    })
})