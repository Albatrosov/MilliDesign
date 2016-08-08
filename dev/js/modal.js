$(function() {
    
    $('button').on('click', function() {
        
        $('.modal__bg').show()
    });
    
    $('legend,.button--form').on('click', function() {
        
        $('.modal__bg').hide();
        
    });
})