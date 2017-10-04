const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");


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

			// {
   //      test: /\.css$/,
   //      use: [
   //      	'style-loader',
   //      	'css-loader'
   //      ]
   //    }
  	]
  },

  devtool: 'inline-source-map',

  // plugins
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })  ]
};
