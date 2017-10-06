const webpack = require('webpack');
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	"vender": ['jquery', 'vue'],
  	"app": './src/assets/js/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/assets/js')
  },

  // modules
  module: {
  	rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.pug$/,
        use: 'pug-loader'
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'autoprefixer-loader', 'csscomb-loader', 'sass-loader']
        })
      }
  	]
  },

  // plugins
  plugins: [
    new ImageminPlugin({
      pngquant: {
        quality: '90-95'
      }
    }),
    new CopyWebpackPlugin([{
      context: 'src/assets/img',
      from: '**/*',
      to: '../../assets/img'
    }]),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      filename: '../../index.html',
      template: './src/index.pug'
    }),
    new ExtractTextPlugin('bundle.css')
  ]
};