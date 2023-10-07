function main() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        center: true,
        autoWidth:true,
        margin: 0,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:2
            }
        }
    });

    AOS.init();

}

$(document).ready(function() {
    main();
});