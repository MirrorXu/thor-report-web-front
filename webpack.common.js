const  path = require( 'path' );
const CleanWebpackPlugin  = require( 'clean-webpack-plugin' );
const htmlWebpackPlugin = require( 'html-webpack-plugin' );

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const ExtractCss = new ExtractTextWebpackPlugin('HTML/css/[name]-[chunkhash].css');
// const ExtractLess = new ExtractTextWebpackPlugin('HTML/css/[name]-[chunkhash].less.css');


 function assetsPath (_path) {
	return path.posix.join('HTML', _path)
}


module.exports = {
	entry: {
		main:'./src/main.js' ,
	},
	output: {
		filename: assetsPath( 'js/[name]-[chunkhash].bundle.js' ),
		path: path.resolve(__dirname, 'dist'),
		// publicPath: "/"
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				use:[
					{
						loader:'babel-loader',
						options: {
							presets:['env']
						}
					}
				]
			},
			{
				test: /\.css$/,
				// use:ExtractCss.extract({
				// 	fallback:'style-loader',
				// 	use:['css-loader' ,'postcss-loader' ],
				// 	// publicPath:'../'
				// })
				use:[
					// {
					// 	loader: "file-loader",
					// 	options: {
					// 		name:assetsPath('css/[name].[hash].[ext]'),
					// 	}
					// },
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader"
					}
				]
			},
			{
				// test: /\.less$/,
				// use:ExtractLess.extract({
				// 	fallback:'style-loader',
				// 	use:['css-loader'  , 'postcss-loader' , 'less-loader'],
				// 	// publicPath:'../'
				// })
			},
			{
				test:/\.(png|jpg|gif)$/,
				use:[
					{
						loader: "file-loader",
						options: {
							// limit:0,
							name:assetsPath( 'imgs/[name].[ext]' ),
							// outputPath:'HTML/imgs/',
						}
					}
				]
			},
			{
				test:/\.(otf|eot|svg|ttf|woff|woff2)$/,
				use:[
					{
						loader:'file-loader',
						options: {
							name:assetsPath('fonts/[name]_[hash].[ext]'),
						}
					}

				]
			}
		]
	},
    plugins: [
	    // ExtractCss ,
	    // ExtractLess ,

	    new CleanWebpackPlugin('dist'),  // 每次打包以前清理dist文件夹
	    new htmlWebpackPlugin({
		    title:'htmlwebpackplugin插件参数使用' ,
		    template:'./src/index.html',
		    filename:'./index.html',
		    chunks:[
			    'main'
		    ],
		    // favicon:'./src/favicon/favicon.ico',
		    showErrors:true,
		    minify:{
			    // caseSensitive:false , // 是否大小写不敏感
			    removeComments:true,  // 去除注释
			    removeEmptyAttributes: true , // 去除空属性
			    // collapseWhitespace:true // 是否去除空格
		    },
		    // hash:true
	    }) ,

    ]
};