
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

require('./HTML/lib/Swiper-3.4.2/dist/js/swiper.jquery.min.js');

import Vue from '../node_modules/vue/dist/vue';


let app_content = new Vue({
	el: '#content',
	data: {
		contentHtml: '数据加载中',
		// ImgViewer:'',
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

			let start = 0 ;
			$('.load_btn').on('click', function () {
				if( Date.now() - start > 500){
					// console.log($(this).parent().find('.select_box').val());
					window.open($(this).parent().find('.select_box').val());
				}else{
					return false
				}
			});
		},
		// showImgViewer:function ( v ) {
		// 	this.ImgViewer =  v;
		// },
	},
	mounted: function () {
		let _this = this;
		if (content) {
			_this.contentHtml =  contentData;
		}


	},
	updated: function () {
		this.render();
	}

})

let app_nav = new Vue({
	el: '#nav',
	data: {
		nav: navData,
	},

});



window.onload = function () {

	let app_ImgViewer =  new Vue({
		el:'#ImgViewer' ,
		data:{
			ImgViewer:''
		},
		methods:{

			showImgViewer:function ( v ) {
				this.ImgViewer =  v;
			},
		}
	})


	$( '.imgs_single img').dblclick(function () {

		let imgPath =  $(this).attr( 'src') ;
		app_ImgViewer._data.ImgViewer = imgPath;
	})
	$( '.gallery-top img').dblclick( function () {

		let imgPath =  $(this).attr( 'src') ;
		app_ImgViewer._data.ImgViewer = imgPath;
	} )
}

