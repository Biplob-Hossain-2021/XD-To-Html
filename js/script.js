$(document).ready(function(){
    new WOW().init();
	$('.search').click(function(){
        $('.header-search').toggleClass('show');
        return false;
        
    });
	
})