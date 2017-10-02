const webpack = require('webpack');
const path = require('path');

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
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  // plugins
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ]

};
