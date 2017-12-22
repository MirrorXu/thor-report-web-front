
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js');


module.exports = merge( common, {
	devtool: "inline-source-map", // 开发环境中配置
	devServer: {
		contentBase:'./dist'
	},
});

