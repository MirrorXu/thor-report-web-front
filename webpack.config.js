const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

//
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');


const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


const ExtractCss = new ExtractTextWebpackPlugin('css/[name]-[chunkhash].css');

const ExtractLess = new ExtractTextWebpackPlugin('css/[name]-[chunkhash].less.css');


module.exports = {
	entry: {
		main:'./src/main.js' ,
	},
	output: {
		filename: "js/[name]-[chunkhash].bundle.js",
		path: path.resolve(__dirname, 'dist'),
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
				use:ExtractCss.extract({
					fallback:'style-loader',
					use:['css-loader' , 'postcss-loader'],
					publicPath:'../'
				})
			},
			{
				test: /\.less$/,
				use:ExtractLess.extract({
					fallback:'style-loader',
					use:['css-loader'  , 'postcss-loader' , 'less-loader'],
					publicPath:'../'
				})
			},
			{
			    test:/\.(png|jpg|gif)$/,
			    use:[
				    {
					    loader: "file-loader",
					    options: {
					    	// limit:0,
						    name:'[name]_[hash].[ext]' ,
						    outputPath:'imgs/'
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
							name:'[name]_[hash].[ext]',
							outputPath:'fonts/'
						}
					}

				]
			}
		]
	},
	plugins:[
		ExtractCss ,
		ExtractLess ,

		new CleanWebpackPlugin('dist'),  // 每次打包以前清理dist文件夹
		new htmlWebpackPlugin({
			title:'htmlwebpackplugin插件参数使用' ,
			template:'./src/index.html',
			filename:'./index.html',
			chunks:[
				'main'
			],
			favicon:'./src/favicon/favicon.ico',
			showErrors:true,
			minify:{
				// caseSensitive:false , // 是否大小写不敏感
				removeComments:true,  // 去除注释
				removeEmptyAttributes: true , // 去除空属性
				// collapseWhitespace:true // 是否去除空格
			},
			// hash:true
		}) ,
		//new UglifyjsWebpackPlugin() , // dev 开发环境中配置，生产环境中配置的话会报错，报错原因不详
	],
	devtool: "inline-source-map", // 开发环境中配置
	devServer: {
		contentBase:'./dist'
	}

};