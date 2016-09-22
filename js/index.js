$(function(){
	$('.navLeft').hover(function(){
		$(this).children('.adrBox').show();
		$(this).children('.adrBox').css('left',0)
		$(this).children('p').css({
			'border-left':'1px solid #ccc',
			'border-right':'1px solid #ccc',
			'background':'#fff'
		});
		$(this).children('p').children('.toBottom').css('transform','rotate(-90deg)')
	},function(){
		$(this).children('.adrBox').hide();
		$(this).children('p').css({
			'border-left':'1px solid transparent',
			'border-right':'1px solid transparent',
			'background':'#eee'
		});
		$(this).children('p').children('.toBottom').css('transform','rotate(90deg)')
	});
	$('.adrBox li a').click(function(){
		var txt=$(this).text();
		$('.navLeft p .presentAdr').text(txt);
	})
});
$('.outsideLi').hover(function(){
		$(this).children('.hidMenu').show();
	},function(){
		$(this).children('.hidMenu').hide();
	});

$(function(){
	var i=0;
	function bannerLunbo(){
		if(i<$('.lunboPics li').length){
			i++;
			$('.lunboPics li').fadeOut(600).css('display','none');
			$('.lunboYuan li').removeClass('on');
			$('.lunboPics li').eq(i).fadeIn(1000).css('display','block');
			$('.lunboYuan li').eq(i).addClass('on');
			if(i>=$('.lunboPics li').length-1){
				i=-1;
			}
		}
	}
	var t=setInterval(bannerLunbo,3000);
	$('.lunboPics').hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(bannerLunbo,3000);
	})
	$('.lunboYuan li').click(function(){
		clearInterval(t);
		i=$(this).index()-1;
		bannerLunbo(); 
	})
	$('.slideLeft').click(function(){
		clearInterval(t);
		var p=$('.on').index();
		i=p-2;
		if(i<-1){
			i=4;
		}
		bannerLunbo(); 
	})
	$('.slideRight').click(function(){
		clearInterval(t);
		var p=$('.on').index();
		i=p;
		if(i>4){
			i=-1;
		}
		bannerLunbo(); 
	})
})
$('.lunboPics').hover(function(){
	$(this).children('.slideRight').show();
	$(this).children('.slideLeft').show();
},function(){
	$(this).children('.slideRight').hide();
	$(this).children('.slideLeft').hide();
})
//今日推荐
$('.slidLeft').click(function(){
	$('.truRight').animate({'margin-left':'-=245px'},600,function(){
		$('.truRight').append($('.trRight li:first-child'));
		$('.truRight').css('margin-left',0);
	})
})
$('.slidRight').click(function(){
	$('.truRight').animate({'margin-left':'+=245px'},600,function(){
		$('.truRight').prepend($('.trRight li:last-child'));
		$('.truRight').css('margin-left',0);
	})
});
//服装鞋包轮播
$(function(){
	var i=0;
	function smallLunbo(){
		$('.yuandian li').removeClass('onin');
		var yuandian=$('.yuandian li');
		if(i<yuandian.length){
			$('.lunboPic').animate({'margin-left':-440*i},1000);
			yuandian[i].className='onin';
			i++;
			if(i>=yuandian.length){
				i=0;
				$('.lunboPic').css('margin-left',0);
			}
		}
	}
	var t=setInterval(smallLunbo,3000);
	$('.lunboPic').hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(smallLunbo,3000);
	})
	$('.yuandian li').click(function(){
		clearInterval(t);
		i=$(this).index();
		smallLunbo(); 
	})
	$('.sliLeft').click(function(){
		clearInterval(t);
		var p=$('.onin').index();
		i=p-1;
		if(i<0){
			i=3;
		}
		smallLunbo(); 
	})
	$('.sliRight').click(function(){
		clearInterval(t);
		var p=$('.onin').index();
		i=p+1;
		if(i>3){
			i=0;
		}
		smallLunbo(); 
	})
})
$('.smallLunbo').hover(function(){
	$(this).children('.sliLeft').show();
	$(this).children('.sliRight').show();
},function(){
	$(this).children('.sliLeft').hide();
	$(this).children('.sliRight').hide();
});
//天天低价
$(function(){
	function srtp(){
		$('.crotp').animate({'margin-top':'-110px'},600,function(){
			$('.crotp').append($('.crotp li:first-child'));
			$('.crotp').css('margin-top',0);
		});
	}
	var t=setInterval(srtp,2000);
	$('.dayRight').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(srtp,2000)
	})
});
