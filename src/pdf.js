import $ from 'jquery';

import Vue from '../node_modules/vue/dist/vue';

let content = new Vue({
	el: '#content',
	data: {
		msg:'hello world',
		contentHtml: '<p style="color: red"> 数据加载中</p>',
	},
	methods: {
	},
	mounted: function () {
		let _this = this;
		if (contentData) {
			_this.contentHtml = contentData;
		}else{
			alert('未请求到报告内容数据')
		}


		console.log(  $('#content') )
	},
	updated: function () {

	}

})