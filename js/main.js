$(function(){
    var winH = $(window).height();
    var upperH = $(".upper").innerHeight();
    var navH = $(".navbar").innerHeight();

    $(".slider , .carousel-item").height(winH - (upperH + navH))

    $(".work .buttons .btn").on('click' , function() {

    $(this).addClass('active').siblings().removeClass('active');
    console.log($(this).data('class'));

    if ($(this).data('class') === 'all') {
        $('.shuffle .col-lg-3').css('opacity' , 1);
    }else{
        $('.shuffle .col-lg-3').css('opacity' , '.08');
        $($(this).data('class')).parent().css('opacity' , 1);
    }

})

});



