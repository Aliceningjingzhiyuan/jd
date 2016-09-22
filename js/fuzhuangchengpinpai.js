;$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=$(window).height()){
			$('.blackMenu').css({position:'fixed',left:0,top:0,'z-index':100})
		}else{
			$('.blackMenu').css({position:'relative',left:0,top:0,'z-index':100})
		}
	})
	
});