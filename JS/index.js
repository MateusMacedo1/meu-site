$(document).ready(function(){
    $('.mobile-btn').on('click', function(){
        $('.mobile-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    $('.mobile-menu a').on('click', function(){
        $('.mobile-menu').removeClass('active');
        $('.mobile-btn').find('i').removeClass('fa-xmark').addClass('fa-bars');
    });
});