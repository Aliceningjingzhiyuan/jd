$(function(){
	$('.navMenuLeft').hover(function(){
		$(this).children('.hideNavLeft').stop().show();
	},function(){
		$(this).children('.hideNavLeft').stop().hide();
	});
	
});
