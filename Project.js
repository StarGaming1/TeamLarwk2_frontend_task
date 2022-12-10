$(".plus").on('click', function(){
    $(this).parent().parent().find('.answer').
        slideToggle();
});