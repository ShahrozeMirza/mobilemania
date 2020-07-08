$(document).ready(function(){
	$('#nav-icon0').click(function(){
		$(this).toggleClass('open');
	});

	
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

	}
	else if($('#header-menu').hasClass('bg-nav-trans') && $('#nav-icon0').hasClass('open') && $(document).scrollTop() < 70){
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
	} 
	else if($('#header-menu').hasClass('bg-nav-solid') && $('#nav-icon0').hasClass('collapsed') && $(document).scrollTop() < 70){
		$("#header-menu").css('padding', '25px 0');
		// $("#header-menu").css('background-color','rgba(35, 49, 72, .5)')
		$("#header-menu").addClass('bg-nav-trans');
		$("#header-menu").removeClass('bg-nav-solid');
		$("a.nav-link").css('font-size','20px');
  }

}
$(document).on('click', '#nav-icon0', function(){
	if($('#nav-icon0').hasClass('open') && $(document).scrollTop() < 70){
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
	}
	else if($('#nav-icon0').hasClass('collapsed') && $(document).scrollTop() < 70){
		$("#header-menu").addClass('bg-nav-trans');
		$("#header-menu").removeClass('bg-nav-solid');
	}
	else if($('#nav-icon0').hasClass('open') && $(document).scrollTop() > 70){
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
	}
	else if($('#nav-icon0').hasClass('collapsed') && $(document).scrollTop() > 70){
		$("#header-menu").addClass('bg-nav-solid');
		$("#header-menu").removeClass('bg-nav-trans');
	}
}) 

AOS.init({
	duration: 1000,
	once: true
});
     
});