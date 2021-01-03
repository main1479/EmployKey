(function ($) {
	"use strict";

    jQuery(document).ready(function($){


    

        $('select').niceSelect();

        

        $('.menu-open').click( function (){
                  
                $('.body-left-bar').toggleClass('activee');  
                $('.menu-open').toggleClass('toggle');  
                  
        });

        $('[data-toggle="datepicker"]').datepicker();
              
        $(".single-slider-item").owlCarousel({
            items:5,
            nav:true,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:4,
                   
                },
                1000:{
                    items:5,
                   
                }
            }
            
          
        });




    });


    jQuery(window).load(function(){

    });

    


}(jQuery));	