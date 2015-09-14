var React = require('react');
var $ = require('jquery');
var Vue = require('./vue.min');
var Backbone = require('backbone');

var counter = 0;

$(document).ready(function() {
	var routerConfig = {
        routes: {
            '': 'home',
            'home': 'home',
            'art/id:': 'art',
            'about': 'about',
            'horoscope': 'horoscope',
            'shop': 'shop'
        },
        horoscop: function() {
       
        },
        home: function() {

        },
        about: function() {

        },
        shop: function() {

        },
        art: function() {

        }
    };
    var app = Backbone.Router.extend(routerConfig);
	var myRouter = new app();
	Backbone.history.start();

	setInterval(rotate, 5000);

	function rotate() {
		counter++;
		if (counter === 0) {
			$('.car').css('background', "url(http://i.huffpost.com/gen/1968853/thumbs/o-5-POINTZ-900.jpg?1) cover no-repeat");
		} else if (counter === 1) {
			$('.car').css('background', "url(http://www.brunijazzart.com/library/originaljpgs/Gallery%20Inside,%203,%20adj%20copy.JPG) no-repeat");
		} else if (counter === 2) {
			$('.car').css('background', "url(http://www.robertmitchellartist.com.au/images/Mosman_2.JPG?47) no-repeat");
		}else if (counter === 3) {
			$('.car').css('background', "url(http://media-cdn.tripadvisor.com/media/photo-s/02/78/c3/d6/976-art-gallery.jpg) no-repeat");
		}
	}
});