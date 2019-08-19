const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpack = require('webpack');

module.exports = {
	// 入口
	entry: {
		app: './src/index.js'
	},

	// 出口
	output: {
		filename: 'static/js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	devtool: 'inline-source-map',

	devServer: {
		contentBase: 'dist',
		hot: true
	},

	// resolve: {
	// 	extensions: ['ts', 'js']
	// },

	// loader模块
	module: {
		rules: [{
				test: /\.js$/,
				exclude: path.resolve(__dirname, '/node_modules'),
				include: path.resolve(__dirname, 'src'),
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}]

			},
			{
				test: /\.ts$/,
				exclude: path.resolve(__dirname, '/node_modules'),
				include: path.resolve(__dirname, 'src'),
				use: [{
					loader: 'ts-loader'
				}]
			},
			{
				test: /\.vue$/,
				exclude: path.resolve(__dirname, '/node_modules'),
				include: path.resolve(__dirname, 'src'),
				use: [{
					loader: 'vue-loader'
				}]
			},
			{
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [{
						loader: 'css-loader',
					}]
				})
			}, {
				test: /\.(png|jpg|gif|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'static/images/[name].[hash:8].[ext]',
						publicPath: '/'
					}
				}],

			}, {
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 5000,
						name: 'static/fonts/[name].[hash:8].[ext]',
						publicPath: '/'
					}
				}]
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'index',
			filename: 'index.html'
		}),
		new ExtractTextWebpackPlugin({
			filename: 'static/css/global.css'
		}),
		new VueLoaderPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};
