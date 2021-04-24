const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	entry: './src/main.js',
	output: {
		filename: 'js/bundle.js'
	},
	devtool: 'source-map',
	devServer: {
		//hot: true
		//hotOnly: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Tutorial',
			template: './src/index.html'
		})
		//new webpack.HotModuleReplacementPlugin()
	]
}
