
// css
import  './HTML/font/css/font-awesome.min.css' ;
import  './HTML/css/index.css';

// less
// import './less/index.less';

// import


// json

const  data = require('./HTML/data/data.json');



// js module
import '../node_modules/jquery/dist/jquery.min.js';

import print from './HTML/js/print'

const $ = require('jquery');



console.log("-----------------------------------------");

console.log("-----------------------------------------");



// const print = require('./js/print');


import { cube } from './HTML/js/math.js';


setTimeout(function () {
	$('body').addClass('bgGreen');

	$('.box').removeClass('blur');


} , 2000);


$(function () {

	$('.box').addClass( 'blur scaleImg');

	$('.json').html( 'via riquire(\'data.json\')' + data.name );


	$('.btn').text('clickMe').on('click' , print).css({
		'background' : 'red',
		'padding':'20px',
		'fontSize':'20px',
	})

	$('.mathBox').text(  '5的三次方是：' + cube(5)  )

});

