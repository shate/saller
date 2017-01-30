$(document).ready(function(){
    $('ul.tabs').on('click', 'li:not(.current)', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('div.section').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
    });
    $('.center').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3,
    });


    $('.slider').slick();
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $('#wrap-img img').addClass('closed').eq(nextSlide).removeClass('closed');

    });
    $('.brands').slick({
        slidesToShow: 5 ,
        arrows : false,
        autoplay : true

    });

    $('.accordion ul.numeric-list>li').on('click', function () {
        if($(this).hasClass('open')){
            $('.comment-list', this).slideUp();
            $(".sticky", this).animate({opacity: 0}, 1000);
            $(this).removeClass('open')
        }
        else{
            $('.comment-list', this).slideDown() ;
            $(".sticky", this).animate({opacity: 1}, 1000);
            $(this).addClass('open') ;
        }

    }) ;
    //map
    var myMap;
    $('.show-map').on('click', function (){

        ymaps.ready(init);
        function init() {

            Map = new ymaps.Map('map', {

                center: [55.8260727, 37.3896408],
                zoom: 16,
                controls: []
            });
            var placemark = new ymaps.Placemark([55.8260727, 37.3896408], {}, {
                preset: 'islands#icon',
                iconColor: 'red'
            });
            Map.geoObjects.add(placemark);
        }
      $('#modal-overlay').removeClass('closed') ;
    })

      $('#modal-overlay').on('click', function (e) {

          if(e.target.id != 'modal-overlay') return;

          $(this).addClass(('closed'))  ;
          $('#map').html('')
      });

    $('.header_nav li a, .footer_nav li a, .order').on('click', function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); //
        }
        return false;
    });

    $('.ico-play').on('click', function() {
        $(this).hide()
    })
})