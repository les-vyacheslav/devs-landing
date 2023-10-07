function main() {

    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        center: true,
        // autoWidth:true,
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

}

$(document).ready(function() {
    main();
});