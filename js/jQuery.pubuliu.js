;(function($){
	$.fn.pubuliu=function(options){
		
		$(this).scroll(function(){
			var def={main:'#main',list:'.list',imgA:'img/'};
			var setting=$.extend(def,options);
			var bottom=$(document).height()-$(document).scrollTop()-$(window).height();
			if(bottom<=200){
				addImgs();
			}
			function addImgs(){
				var n=Math.ceil(Math.random()*45);
				var num=0;
				$(setting.main+' '+setting.list).each(function(i){
					if($(setting.main+' '+setting.list).eq(num).height()>$(setting.main+' '+setting.list).eq(i).height()){
						num=i;
					}
				})
				$(setting.main+' '+setting.list).eq(num).append('<img src="'+setting.imgAd+n+'.jpg" alt="">')
			}
		})
	}
})(jQuery);