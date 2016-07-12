function startLicense(){
	var e = {}
	var f = function(b){
		moveTable(b);
        for(var i = 0;i <= b.data.length;i ++){     	
            $('.empty').eq(i).find('.empty1').each(function(j){
            	console.log(2)
            	b.data[i][5]=b.data[i][0]
            	b.data[i][0]=b.data[i][1]
            	b.data[i][1]=b.data[i][2]
            	b.data[i][2]=b.data[i][3]
            	if(b.data[i][j] == null){
            		b.data[i][j] = 0;
            		$(this).text(b.data[i][j])
            	}else{
            		$(this).text(b.data[i][j])
            	}
            })
        }
    }
	pcdata('post','UnitStaticalQueryServlet',e,false,'json',f)
}
function startThreeTogether(){
	var e = {}
	var f = function(b){
        for(var i = 0;i<b.data.length;i++){
            $('.empty').eq(i).find('.empty2').each(function(i){
            	if(b.data[i] == null){
            		b.data[i] = 0;
            		$(this).text(b.data[i])
            	}else{
            		$(this).text(b.data[i])
            	}
            })
            $('.empty').eq(i).find('.empty3').each(function(i){
            	$(this).text($('.empty').eq(i).find('.empty2').text())
            })
        }
    }
	pcdata('post','GetAllNumServlet',e,false,'json',f)
}
function sum(b){
	var sum1 = 0;
	var sum2 = 0;
	var sum3 = 0;
	var sum4 = 0;
	var sum5 = 0;
	var sum6 = 0;
	var sum7 = 0;
	var sum8 = 0;
	var sum9 = 0;
	var sum10 = 0;
	var sum11 = 0;
	var sum12 = 0;
	var sum13 = 0;
	var sum14 = 0;
	for(var i = 0;i<b.data.length;i++){
		for(var j = 1;j<b.data[0].length;j++){
			if(b.data[i][j] == null){
				b.data[i][j] = 0;
			}
		}
	}
	for(var i = 0;i<b.data.length;i++){
		sum1 = sum1 + parseInt(b.data[i][0]);
		sum2 = sum2 + parseInt(b.data[i][1]);
		sum3 = sum3 + parseInt(b.data[i][2]);
		sum4 = sum4 + parseInt(b.data[i][3]);
		sum5 = sum5 + parseInt(b.data[i][4]);
		sum6 = sum6 + parseInt(b.data[i][5]);
		sum7 = sum7 + parseInt(b.data[i][6]);
		sum8 = sum8 + parseInt(b.data[i][7]);
		sum9 = sum9 + parseInt(b.data[i][8]);
		sum10 = sum10 + parseInt(b.data[i][9]);
		sum11 = sum11 + parseInt(b.data[i][10]);
		sum12 = sum12 + parseInt(b.data[i][11]);
		sum13 = sum13 + parseInt(b.data[i][12]);
		sum14 = sum14 + parseInt(b.data[i][13]);
	}
	$('.sum1').text(sum1);
	$('.sum2').text(sum2);
	$('.sum3').text(sum3);
	$('.sum4').text(sum4);
	$('.sum5').text(sum5);
	$('.sum6').text(sum6);
	$('.sum7').text(sum7);
	$('.sum8').text(sum8);
	$('.sum9').text(sum9);
	$('.sum10').text(sum10);
	$('.sum11').text(sum11);
	$('.sum12').text(sum12);
	$('.sum13').text(sum13);
	$('.sum14').text(sum14);
}
function clickEvents(){
	$('.hrbUnder').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=hrb" + "&id=01";
	})
	$('.hrbOpen').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=hrb" + "&id=02";
	})
	$('.hrbStone').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=hrb" + "&id=03";
	})
	$('.hrbOil').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=hrb" + "&id=04";
	})
	$('.hrbExcavate').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=hrb" + "&id=05";
	})
	$('.hrbExplore').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=hrb" + "&id=06";
	})
	$('.hrbTailing').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=hrb" + "&id=07";
	})
	
	$('.qqUnder').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=qq" + "&id=01";
	})
	$('.qqOpen').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=qq" + "&id=02";
	})
	$('.qqStone').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=qq" + "&id=03";
	})
	$('.qqOil').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=qq" + "&id=04";
	})
	$('.qqExcavate').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=qq" + "&id=05";
	})
	$('.qqExplore').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=qq" + "&id=06";
	})
	$('.qqTailing').click(function(){
		window.location.href = "companyInfoSearchPop.html?type=qq" + "&id=07";
	})

    $('.mdjUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=mdj" + "&id=01";
    })
    $('.mdjOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=mdj" + "&id=02";
    })
    $('.mdjStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=mdj" + "&id=03";
    })
    $('.mdjOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=mdj" + "&id=04";
    })
    $('.mdjExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=mdj" + "&id=05";
    })
    $('.mdjExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=mdj" + "&id=06";
    })
    $('.mdjTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=mdj" + "&id=07";
    })

    $('.jmsUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jms" + "&id=01";
    })
    $('.jmsOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jms" + "&id=02";
    })
    $('.jmsStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jms" + "&id=03";
    })
    $('.jmsOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jms" + "&id=04";
    })
    $('.jmsExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jms" + "&id=05";
    })
    $('.jmsExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jms" + "&id=06";
    })
    $('.jmsTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jms" + "&id=07";
    })

    $('.dqUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dq" + "&id=01";
    })
    $('.dqOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dq" + "&id=02";
    })
    $('.dqStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dq" + "&id=03";
    })
    $('.dqOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dq" + "&id=04";
    })
    $('.dqExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dq" + "&id=05";
    })
    $('.dqExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dq" + "&id=06";
    })
    $('.dqTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dq" + "&id=07";
    })

    $('.jxUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jx" + "&id=01";
    })
    $('.jxOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jx" + "&id=02";
    })
    $('.jxStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jx" + "&id=03";
    })
    $('.jxOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jx" + "&id=04";
    })
    $('.jxExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jx" + "&id=05";
    })
    $('.jxExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jx" + "&id=06";
    })
    $('.jxTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=jx" + "&id=07";
    })

    $('.sysUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sys" + "&id=01";
    })
    $('.sysOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sys" + "&id=02";
    })
    $('.sysStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sys" + "&id=03";
    })
    $('.sysOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sys" + "&id=04";
    })
    $('.sysExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sys" + "&id=05";
    })
    $('.sysExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sys" + "&id=06";
    })
    $('.sysTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sys" + "&id=07";
    })

    $('.ycUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=yc" + "&id=01";
    })
    $('.ycOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=yc" + "&id=02";
    })
    $('.ycStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=yc" + "&id=03";
    })
    $('.ycOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=yc" + "&id=04";
    })
    $('.ycExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=yc" + "&id=05";
    })
    $('.ycExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=yc" + "&id=06";
    })
    $('.ycTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=yc" + "&id=07";
    })

    $('.qthUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=qth" + "&id=01";
    })
    $('.qthOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=qth" + "&id=02";
    })
    $('.qthStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=qth" + "&id=03";
    })
    $('.qthOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=qth" + "&id=04";
    })
    $('.qthExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=qth" + "&id=05";
    })
    $('.qthExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=qth" + "&id=06";
    })
    $('.qthTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=qth" + "&id=07";
    })

    $('.hgUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hg" + "&id=01";
    })
    $('.hgOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hg" + "&id=02";
    })
    $('.hgStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hg" + "&id=03";
    })
    $('.hgOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hg" + "&id=04";
    })
    $('.hgExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hg" + "&id=05";
    })
    $('.hgExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hg" + "&id=06";
    })
    $('.hgTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hg" + "&id=07";
    })

    $('.hhUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hh" + "&id=01";
    })
    $('.hhOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hh" + "&id=02";
    })
    $('.hhStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hh" + "&id=03";
    })
    $('.hhOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hh" + "&id=04";
    })
    $('.hhExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hh" + "&id=05";
    })
    $('.hhExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hh" + "&id=06";
    })
    $('.hhTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=hh" + "&id=07";
    })

    $('.shUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sh" + "&id=01";
    })
    $('.shOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sh" + "&id=02";
    })
    $('.shStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sh" + "&id=03";
    })
    $('.shOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sh" + "&id=04";
    })
    $('.shExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sh" + "&id=05";
    })
    $('.shExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sh" + "&id=06";
    })
    $('.shTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sh" + "&id=07";
    })

    $('.dxalUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dxal" + "&id=01";
    })
    $('.dxalOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dxal" + "&id=02";
    })
    $('.dxalStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dxal" + "&id=03";
    })
    $('.dxalOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dxal" + "&id=04";
    })
    $('.dxalExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dxal" + "&id=05";
    })
    $('.dxalExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dxal" + "&id=06";
    })
    $('.dxalTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=dxal" + "&id=07";
    })

    $('.nkzjUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=nkzj" + "&id=01";
    })
    $('.nkzjOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=nkzj" + "&id=02";
    })
    $('.nkzjStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=nkzj" + "&id=03";
    })
    $('.nkzjOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=nkzj" + "&id=04";
    })
    $('.nkzjExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=nkzj" + "&id=05";
    })
    $('.nkzjExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=nkzj" + "&id=06";
    })
    $('.nkzjTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=nkzj" + "&id=07";
    })

    $('.sgzjUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sgzj" + "&id=01";
    })
    $('.sgzjOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sgzj" + "&id=02";
    })
    $('.sgzjStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sgzj" + "&id=03";
    })
    $('.sgzjOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sgzj" + "&id=04";
    })
    $('.sgzjExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sgzj" + "&id=05";
    })
    $('.sgzjExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sgzj" + "&id=06";
    })
    $('.sgzjTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sgzj" + "&id=07";
    })

    $('.sfhUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sfh" + "&id=01";
    })
    $('.sfhOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sfh" + "&id=02";
    })
    $('.sfhStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sfh" + "&id=03";
    })
    $('.sfhOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sfh" + "&id=04";
    })
    $('.sfhExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sfh" + "&id=05";
    })
    $('.sfhExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sfh" + "&id=06";
    })
    $('.sfhTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=sfh" + "&id=07";
    })

    $('.fyUnder').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=fy" + "&id=01";
    })
    $('.fyOpen').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=fy" + "&id=02";
    })
    $('.fyStone').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=fy" + "&id=03";
    })
    $('.fyOil').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=fy" + "&id=04";
    })
    $('.fyExcavate').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=fy" + "&id=05";
    })
    $('.fyExplore').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=fy" + "&id=06";
    })
    $('.fyTailing').click(function(){
        window.location.href = "companyInfoSearchPop.html?type=fy" + "&id=07";
    })
}
function changePosition(b){
	for(var i = 0;i < b.data.length;i++){
		for(var j = 0;j <= 15;j++){
			b.data[i][15] = b.data[i][0];
			b.data[i][j] = b.data[i][j+1]
		}
	}
}
$(document).ready(function(){
//	var e = {}
//	var f = function(b){
//        for(var i = 0;i<b.data.length;i++){
//            $('.empty').eq(i).find('.empty1').each(function(j){
//            	b.data[i][5]=b.data[i][0]
//            	b.data[i][0]=b.data[i][1]
//            	b.data[i][1]=b.data[i][2]
//            	b.data[i][2]=b.data[i][3]
//            	if(b.data[i][j] == null){
//            		b.data[i][j] = 0;
//            		$(this).text(b.data[i][j])
//            	}else{
//            		$(this).text(b.data[i][j])
//            	}
//            })
//        }
//    }
//	pcdata('post','UnitStaticalQueryServlet',e,false,'json',f)
	startLicense();
	startThreeTogether();
	
	$('.tab0').click(function(){
		var e = {}
		var f = function(b){
			startLicense(b)
        }
		pcdata('post','UnitStaticalQueryServlet',e,false,'json',f)
	})
	$('.tab1').click(function(){
		var e = {
			areaname: $('.tab1').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.hrbempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f);
		
		clickEvents();
	})
	$('.tab2').click(function(){
		var e = {
			areaname: $('.tab2').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.qqempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab3').click(function(){
		var e = {
			areaname: $('.tab3').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.mdjempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab4').click(function(){
		var e = {
			areaname: $('.tab4').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.jmsempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab5').click(function(){
		var e = {
			areaname: $('.tab5').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.dqempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab6').click(function(){
		var e = {
			areaname: $('.tab6').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.jxempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab7').click(function(){
		var e = {
			areaname: $('.tab7').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.sysempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab8').click(function(){
		var e = {
			areaname: $('.tab8').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.ycempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab9').click(function(){
		var e = {
			areaname: $('.tab9').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.qthempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab10').click(function(){
		var e = {
			areaname: $('.tab10').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.hgempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab11').click(function(){
		var e = {
			areaname: $('.tab11').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.hhempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab12').click(function(){
		var e = {
			areaname: $('.tab12').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.shempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab13').click(function(){
		var e = {
			areaname: $('.tab13').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.dxalempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab14').click(function(){
		var e = {
			areaname: $('.tab14').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.nkzjempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab15').click(function(){
		var e = {
			areaname: $('.tab15').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.sgzjempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab16').click(function(){
		var e = {
			areaname: $('.tab16').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.sfhempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
	$('.tab17').click(function(){
		
		var e = {
			areaname: $('.tab17').attr('name')
		}
		var f = function(b){
			changePosition(b);
            for(var i = 0;i<b.data.length;i++){
                $('.fyempty').eq(i).find('td').each(function(j){
                	if(b.data[i][j] == null){
                		b.data[i][j] = 0;
                		$(this).text(b.data[i][j])
                	}else{
                		$(this).text(b.data[i][j])
                	}
                })
            }
            sum(b)
        }
		pcdata('post','MineStaticalQueryServlet',e,false,'json',f)
		
		clickEvents();
	})
})