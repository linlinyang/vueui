var path = require('path');
const VueLoder = require('vue-loader/lib/plugin');

module.exports = {

	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'vui.js'
	},
	externals: {
		'Vue': 'vue',
		'vueRouter': 'vue-router'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: 'vue-loader'
		},{
			test: /iview.src.*?js$/,
			use: 'babel-loader'
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader',
		},{
			test: /\.css$/,
			use: ['vue-style-loader','css-loader']
		},{
			test: /\.(jpe?g|png|gif|svg)(\?.*)?$/,
			use: 'url-loader'
		},{
			test: /\.(woff|woff2?|eot|ttf)(\?.*)?$/,
			use: 'url-loader'
		}]
	},
	devServer:{
		contentBase: path.resolve(__dirname,'dist'),
		port: 8080
	},
	resolve: {
		extensions: ['.js','.vue','.json'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname,'src'),
			components: path.resolve(__dirname,'src/components'),
			'#i': 'iview/src/components'
		}
	},
	plugins: [new VueLoder()],
	mode: 'development'

};