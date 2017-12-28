
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

require('./HTML/lib/Swiper-3.4.2/dist/js/swiper.jquery.min.js');

import Vue from '../node_modules/vue/dist/vue';


let app_content = new Vue({
	el: '#content',
	data: {
		contentHtml: '数据加载中',
	},
	methods: {
		render: function () {
			$.each($('.imgsBox'), function (i, v) {

				let tempIdTop = 'galleryTop-' + i;
				let tempIdThumbs = 'tempIdThumbs-' + i;


				$(v).find('.gallery-top').attr('id', tempIdTop);
				$(v).find('.gallery-thumbs').attr('id', tempIdThumbs);


				let galleryTop = new Swiper('#' + tempIdTop, {
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					spaceBetween: 10,
					speed: 500,
					// loop:true,
					grabCursor: true
				});
				let galleryThumbs = new Swiper('#' + tempIdThumbs, {
					spaceBetween: 10,
					centeredSlides: true,
					slidesPerView: 'auto',
					touchRatio: 0.2,
					slideToClickedSlide: true,
					grabCursor: true

				});


				galleryTop.params.control = galleryThumbs;
				galleryThumbs.params.control = galleryTop;
			});

			$('.load_btn').on('click', function () {
				alert($(this).parent().find('.select_box').val());
				window.open($(this).parent().find('.select_box').val())
			});
		}
	},
	mounted: function () {
		let _this = this;
		if (content) {
			_this.contentHtml = content;
		}

	},
	updated: function () {
		this.render();
	}

})

let app_nav = new Vue({
	el: '#nav',
	data: {
		nav: nav,
	},

})


