$(function(){
	$('.resume').css({opacity: 0});
		$('.introSpace').css({opacity: 0});
		$('.portfolio').css({opacity: 0});
		$('.goTop').css({display:'none'});
		$(window).scroll(function(){
	   /* var scrollPos = $(document).scrollTop();
	    console.log(scrollPos);*/
	    if($($(window).scrollTop() + $(window).height() > $('.resume').offset().top + $('.resume').outerHeight())){
	    	$('.resume').animate({
	    		opacity: '1'
	    	},800,function(){
	    		if($($(window).scrollTop() + $(window).height() > $('.introSpace').offset().top + $('.introSpace').outerHeight())){
			    	$('.introSpace').animate({
			    		opacity: '1'
			    	},800,function(){
			    		$('.portfolio').animate({
			    			opacity: '1'
			    		},800)
			    	})
			    }
	    	});
	    };
	    //gotop
	    if($(window).scrollTop() > $('.banner').offset().top){
	    	$('.goTop').fadeIn();
	    }else{
	    	$('.goTop').fadeOut();
	    }
		});


		//menu click
		$("[data-menu]").click(function(){
				//alert($('.' + $(this).attr('data-menu')).offset().top);
	      jQuery("html,body").animate({
				    scrollTop: $('.' + $(this).attr('data-menu')).offset().top
				},800);
				return false;
	  });


		//goTop
		$(".goTop").click(function(){
			$('html , body').animate({
				scrollTop: 0
			},500);
			return false;
		});
});