$(function(){
	var _timer = false;
	var _moveSpeed = 600;
	var _delay = 5000;
	var _imgCount = 0;
	var _liCount = $('.banner > ul.img>li').length;
	var _liCircle = "";

	/*for(var i = 0 ; i < _liCount ; ++ i){
		_liCircle += '<li class="control"></li>';
	}
	$('.banner').append($('<ul class="imgControl"></ul>').html(_liCircle).css('left' , function(){
		return ($('.banner').width() - $(this).width) / 2;
	}))*/

	//startTime();
	function startTime(){
		timer = setTimeout(slider, _delay);
	}

	function slider(){
		_imgCount = (_imgCount < $('.banner > ul.img>li').length - 1) ? _imgCount + 1 : 0;
		$('.banner > ul.img').animate({
			right: $('.banner').width() * _imgCount
		} , _moveSpeed,startTime());
	};

	$('.monkey').mouseover(function(){
		$('.dialog').fadeIn();
	});
	$('.monkey').mouseout(function(){
		$('.dialog').fadeOut();
	});
	$('.monkey').click(function(){
		$('body').remove();
		$('html').append('<body><div style = "text-align: center; margin: 10% auto"><img src = "img/1.gif" class = "refresh"></body>')
	});
});