;(function($){
	$.fn.banner=function(options){
		var imgarr=['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg'];
		var def={
			banner:'#banner',
			img:'#banner img',
			ul:'#banner ul',
			li:'#banner li',
			lion:'#banner li.on',
			liClass:'on',
			slideButton:'span',
			slideLeft:'.slideLeft',
			slideRight:'.slideRight',
			imgs:imgarr,
			times:2000,
			fadeTime:800,
			imgAdr:'images/'
		}
		var opts=$.extend(def,options);
		var i=0;
		function banChange(){
			if(i<opts.imgs.length){
				if(i>=opts.imgs.length-1){
					i=-1;
				}
				i++;
				change(i);
			}
		}
		function change(n){
			$(opts.img).stop().fadeOut(0).attr('src',opts.imgAdr+opts.imgs[n]).fadeIn(opts.fadeTime);
			$(opts.lion).removeClass(opts.liClass);
			$(opts.li).eq(n).addClass(opts.liClass);
		}
		//计时器
		var t=setInterval(function(){
			banChange();
		},opts.times);
		//banner的hover状态
		$(opts.banner).hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(function(){
				banChange();
			},opts.times);
		});
		
		$(opts.slideLeft).hover(function(){
			$(this).css('opacity',0.6);
		},function(){
			$(this).css('opacity',0.3)
		});
		$(opts.slideRight).hover(function(){
			$(this).css('opacity',0.6);
		},function(){
			$(this).css('opacity',0.3)
		});
		//左右切换的点击事件
		$(opts.slideLeft).click(function(){
			i--;
			if(i<0){
				i=opts.imgs.length-1;
			}
			change(i);
		});
		$(opts.slideRight).click(function(){
			i++;
			
			if(i>=opts.imgs.length){
				i=0;
			}
			change(i);
		});
		//小圆点点击事件
		$(opts.li).click(function(){
			i=$(this).index()-1;
			banChange();
		})
	}
})(jQuery);