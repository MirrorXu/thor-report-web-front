function print() {
	alert('I get called from print.js!');
	let str = 'print.js error: this is test inline-source-map';
	console.error(str)
};


// export default  print

module.exports = print