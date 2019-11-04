$(document).ready(function(){
    window.scroll(0, 0);
//Nice scroll initialization
	$("html").niceScroll({
		scrollspeed: 50,
		autohidemode : true,
		cursorwidth : 8,
		horizrailenabled: false,
		cursorborderradius: 8,
		cursorborder : "0",
		background : "rgba(48, 48, 48, .4)",
		cursorcolor : '#1f1f1f',
		zindex : 999
	});
    
    $('header nav ul li a').click(function(event){
		event.preventDefault();
		var section = $(this).attr('href');
		var section_pos = $(section).position();

		if(section_pos){
			$(window).scrollTo({top:section_pos.top, left:'0px'}, 1000);
		}
		
	});
    
    var altura = $('nav.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('nav.menu').addClass('fixed');
		} else {
			$('nav.menu').removeClass('fixed');
		}
	});


});