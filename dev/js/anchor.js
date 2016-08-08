$(function() {
    
    $("nav").on("click","a", function (event) {
        
		event.preventDefault();
        
		var id  = $(this).attr('href'),
            
			top = $(id).offset().top;
        
		$('body').animate({scrollTop: top}, 750);
	});
})