//这是文档要求必须配置的
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode : "development" ,
	entry : "./app/main.js",
	output : {
		publicPath : "xuni",
		filename : "bundle.js"
	},
	//增强vue的功能，以下代码直接用考拉老师的：
	module : {
		rules : [
			{
				test : /\.vue$/ ,		//以vue结尾的
				loader : "vue-loader"
			},
			{
	            test: /\.less$/,
	            use: [
		            {
		                loader: "style-loader" // creates style nodes from JS strings
		            }, 
		            {
		                loader: "css-loader" // translates CSS into CommonJS
		            }, 
		            {
		                loader: "less-loader" // compiles Less to CSS
		            }
	            ]
	        }

		]
	},
	//文档要求写的，文档地址：https://vue-loader.vuejs.org/guide/#manual-configuration
	plugins: [
		new VueLoaderPlugin()
	],
	//文档要求写的，文档地址：https://cn.vuejs.org/v2/guide/installation.html
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer : {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				pathRewrite: {'^/api' : ''}
			}
		}
	}
}