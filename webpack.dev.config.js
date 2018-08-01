var path = require('path');
const VueLoder = require('vue-loader/lib/plugin');

module.exports = {

	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'vui.js'
	},
	externals: {
		Vue: {
			root: 'vue'
		}
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: 'vue-loader'
		},{
			test: /\.css$/,
			use: ['vue-style-loader','css-loader']
		}]
	},
	devServer:{
		contentBase: path.resolve(__dirname,'dist'),
		port: 8080
	},
	plugins: [new VueLoder()],
	mode: 'development'

};