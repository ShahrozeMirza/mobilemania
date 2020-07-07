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
	if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		$("#header-menu").css('padding','5px 0');
		$("#header-menu").css('background-color','rgba(35, 49, 72, 1)');
		$("a.nav-link").css('font-size','16px');
 
		

	} else {
		$("#header-menu").css('padding', '25px 0');
		$("#header-menu").css('background-color','rgba(35, 49, 72, .5)')
		$("a.nav-link").css('font-size','20px');
  }

}
$('#nav-icon0').on('click', function(){
	if($('button').hasClass('open')){
		$("#header-menu").css('background-color','rgba(35, 49, 72, 1)');
		$("a.nav-link").css('font-size','16px');
	}
	else{
		$("#header-menu").css('background-color','rgba(35, 49, 72, .5)');
		$("a.nav-link").css('font-size','20px');
	}
}) 

AOS.init({
	duration: 1000
});
     
});