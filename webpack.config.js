const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
      	rules: [
	        {
	          test: /\.css$/,
	          use: [
	            'style-loader',
	            'css-loader'
	          ]
	        },
	        {
	         test: /\.(png|svg|jpg|gif)$/,
	         	use: [
	           		'file-loader'
	        	]
	       	}
      	]
    }, 
    plugins: [
    	new CleanWebpackPlugin(['dist/*']),
      	new HtmlWebpackPlugin({
	        title: 'Yotman Reyes || Javascript FullStack Developer',
	        hash: true,
	        filename: './index.html',
	        template:'./src/templates/index.html'

      })
    ],
    devtool: 'inline-source-map',
    devServer:{
    	contentBase: './dist'
    },
    output: {
	    filename: 'bundle.js',
	    path: path.resolve(__dirname, 'dist')
 	}
};