$(document).ready(function(){

    $('.slide-one').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            800:{
                items:2
            },

            1000:{
                items:2
            }
        }
    });
});

$(document).ready(function(){

    $('.slide-two').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            800:{
                items:3
            },

            1000:{
                items:4
            }
        }
    });
});