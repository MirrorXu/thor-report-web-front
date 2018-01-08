const merge = require( 'webpack-merge' );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );
const common = require( './webpack.common' );
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge( common, {
	plugins: [
		new UglifyJSPlugin(),

	]
})