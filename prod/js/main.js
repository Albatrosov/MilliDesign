$(function() {
    
    $("nav").on("click","a", function (event) {
        
		event.preventDefault();
        
		var id  = $(this).attr('href'),
            
			top = $(id).offset().top;
        
		$('body').animate({scrollTop: top}, 750);
	});
})
$(function() {
    
    $('button').on('click', function() {
        
        $('.modal__bg').show()
    });
    
    $('legend,.button--form').on('click', function() {
        
        $('.modal__bg').hide();
        
    });
})