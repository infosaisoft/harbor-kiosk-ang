// $(document).ready(function(){
//     $(".know-city-box button.btn-link").on("click", function(){
//         $(this).find("i").toggleClass("fa-plus fa-minus");
//     });
// });


$(document).ready(function() {
    $('#articles-resp').lightSlider({
        item:2,
        loop:true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        auto:true,
        slideMargin: 20,
        pager: false,
        pause:4000,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
});