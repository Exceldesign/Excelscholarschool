$(document).ready(function(){
    $("#gallery-carousel").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000, // 3 seconds
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
            // 1020: {
            //     items: 2.7,
            // },
        },
        // navText: [
        //     '<span class="owl-nav-prev">&#10094;</span>',
        //     '<span class="owl-nav-next">&#10095;</span>'
        // ]
    });
});