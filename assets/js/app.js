$(document).ready(function(){
	$('#nav-icon0').click(function(){
		$(this).toggleClass('open');
	});

	$(window).on('scroll', function(){

	})

    window.onscroll = function() {
		scrollFunction()
	};

	function scrollFunction() {
	if ($(document).scrollTop() > 70) {
		$("#header-menu").css('padding','5px 0');
		// $("#header-menu").css('background-color','rgba(35, 49, 72, 1)');
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
		$("a.nav-link").css('font-size','16px');

	} else {
		$("#header-menu").css('padding', '25px 0');
		// $("#header-menu").css('background-color','rgba(35, 49, 72, .5)')
		$("#header-menu").addClass('bg-nav-trans');
		$("#header-menu").removeClass('bg-nav-solid');
		$("a.nav-link").css('font-size','20px');
  }

}
$(document).on('click', '#nav-icon0', function(){
	if($('button').hasClass('open') && $(document).scrollTop() < 70){
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
	}
	else if($('button').hasClass('collapsed') && $(document).scrollTop() < 70){
		$("#header-menu").addClass('bg-nav-trans');
		$("#header-menu").removeClass('bg-nav-solid');
	}
	else if($('button').hasClass('open') && $(document).scrollTop() > 70){
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
	}
	else if($('button').hasClass('collapsed') && $(document).scrollTop() > 70){
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
	}
}) 

AOS.init({
	duration: 1000
});
     
});