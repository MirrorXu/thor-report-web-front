const  path = require( 'path' );
const CleanWebpackPlugin  = require( 'clean-webpack-plugin' );
const htmlWebpackPlugin = require( 'html-webpack-plugin' );

// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// const ExtractCss = new ExtractTextWebpackPlugin('HTML/css/[name]-[chunkhash].css');
// const ExtractLess = new ExtractTextWebpackPlugin('HTML/css/[name]-[chunkhash].less.css');


 function assetsPath (_path) {
	return path.posix.join('HTML', _path)
}


module.exports = {
	entry: {
		main:'./src/main.js' ,
		htmlStyle:'./src/htmlStyle.js',
		pdf:'./src/pdf.js'
	},
	output: {
		// filename: assetsPath( 'js/[name]-[chunkhash].bundle.js' ),
		filename: assetsPath( 'js/[name].[hash].bundle.js' ),
		// filename: assetsPath( 'js/[name].bundle.js' ),
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
				test: /\.less$/,
				// use:ExtractLess.extract({
				// 	fallback:'style-loader',
				// 	use:['css-loader'  , 'postcss-loader' , 'less-loader'],
				// 	// publicPath:'../'
				// })

				use:[
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "less-loader"
					}
				]
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
	    // 每次打包以前清理dist文件夹
	    new CleanWebpackPlugin(['HTML'],{
			root:path.resolve(__dirname , 'dist'),
			verbose:true,
		    exclude:[ 'data', 'pdf' ,'imgs']
	    }),
	    new htmlWebpackPlugin({
		    title:'网页版报告' ,
		    template:'./src/index.html',
		    filename:'./index.html',
		    // favicon:'./src/favicon/favicon.ico',
		    showErrors:true,
		    minify:{
			    // caseSensitive:false , // 是否大小写不敏感
			    removeComments:true,  // 去除注释
			    removeEmptyAttributes: true , // 去除空属性
			    // collapseWhitespace:true // 是否去除空格
		    },
		    // hash:true
		    chunks:[ 'main' , 'htmlStyle'  ]
	    }) ,
	    new htmlWebpackPlugin({
		    title:'pdf版报告' ,
		    template:'./src/pdf.html',
		    filename:'./pdf.html',
		    // favicon:'./src/favicon/favicon.ico',
		    showErrors:true,
		    minify:{
			    // caseSensitive:false , // 是否大小写不敏感
			    removeComments:true,  // 去除注释
			    removeEmptyAttributes: true , // 去除空属性
			    // collapseWhitespace:true // 是否去除空格
		    },
		    // hash:true
		    // chunks:[ 'main' , 'pdfStyle' ]
		    chunks:['pdf' ]
	    })

    ]
};