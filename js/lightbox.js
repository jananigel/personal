$(function(){
	/*lightbox*/
	/*$('#wheel').click(function(){
		$('body').css({
				overflow: 'hidden'
			});
		$('.lightbox').fadeIn('normal' , function(){
				$('.lightbox').css({
				height: $('body').height(),
				left: 0
			});
		})
	});*/

	$('.lightbox .close').click(function(){
		$('.lightbox').fadeOut();
		$('body').css({
			overflow: 'auto'
		});
	});

	$('[data-lightbox]').click(function(){
		var currLightbox = $(this).attr('data-lightbox');
		$('body').css({
				overflow: 'hidden'
			});
		$($(this).attr('data-lightbox')).fadeIn('normal' , function(){
				$('.lightbox').css({
				//height: $('body').height(),
				height: '100%',
				left: 0
			});
		});
		$('.message .body img').attr('src' , $(currLightbox + ' .messageFooter img:first-child').attr('src'));
	});

	//lightbox click
	$('.messageFooter img').click(function(){
		var imgSrc = $(this).attr('src');
		$('.message .body img').fadeOut('normal' , function(){
			//console.log($(this).attr('src'));
			$('.message .body img').attr('src' , imgSrc).fadeIn();
		});
	});

	$('.selfImg').click(function(){
		//$("<a>").attr("href", src).attr("download", "filename").appendTo("body").click().remove();
		var a = $("<a></a>").attr("href", 'img').attr("download", 'CV_A4.jpg').appendTo("body");
	    a[0].click();
	    a.remove();
	});
})
