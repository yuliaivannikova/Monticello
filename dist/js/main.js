var lem = document.getElementById('lol');;
console.log(lem);

// lem.onmousemove = function () {
//     var dy = _ymouse - mc._y;
//     var dx = _xmouse - mc._x;
//     var a = Math.atan2(dy, dx) / Math.PI * 180;
//     mc._rotation = a;
//     updateAfterEvent();
// }



//header slider
$('.header__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [{
            breakpoint: 991,
            settings: {
                autoplay: false,
                vertical: false,
                verticalSwiping: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                dots: false,
            }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// News slider

$('.my-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: true,
            }
        },
        {
            breakpoint: 836,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: true,
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 1,
                arrows: false,

            }
        },

    ]
});

//map

var GM = {
    init: function () {
        this.initCache();
        this.initMap();

    },

    initCache: function () {
        this.$body = $('body');
        this.$popupContent = $('.js-marker-content');

    },

    initMap: function () {
        var coordinates = {
                lat: 40.663323,
                lng: -73.876256
            },
            coordinatesMarker = {
                lat: 40.680993,
                lng: -73.909858
            }
        popupContent = this.$popupContent.html(),
            markerImage = './img/marker.png',
            zoom = 13.5;


        map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true,
                scrollwheel: false
            }),
            marker = new google.maps.Marker({
                position: coordinatesMarker,
                map: map,
                icon: markerImage
            });

        var styles = [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]



        map.setOptions({
            styles: styles
        });

    }

};

$(document).ready(function () {
    GM.init();
});

// scroll

// $(function () {
//     var scrollIcon = $(".header__scroll");
//     scrollIcon.on('click', function () {
//         var top = 0;
//         $('html,body').animate({
//             scrollTop: $(document).height()
//         }, 2000)
//     });

// });

// navigation

$(function () {
    var navLink = $('li a', '.header__scroll-projects');
    navLink.on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var top = $(target).offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 2000)
    });
});

$(function () {
    var open = $('.nav__burger'),
        menu = $('.nav__barlist'),
        close = $('.nav__close'),
        overlay = $('.nav__overlay');
    link = $('.nav__barlink')

    open.on('click', function () {
        menu.toggleClass('nav__barlist--active');
        overlay.show();
    });
    close.on('click', function () {
        menu.toggleClass('nav__barlist--active');
        overlay.hide();
    })
    link.on('click', function () {
        menu.toggleClass('nav__barlist--active');
        overlay.hide();
    })
    overlay.on('click', function () {
        menu.toggleClass('nav__barlist--active');
        overlay.hide();
    })


});

// close.click(function() {
//     modal.toggleClass('popup_active');

// });
// link.on('click', function () {
//     fruitName.text($(this).attr('data-fruit'));

//     modal.toggleClass('popup_active');
// });