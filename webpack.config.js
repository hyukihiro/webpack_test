const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // modules
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8081
  },

  devtool: 'cheap-module-eval-source-map',

  // plugins
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true
  //   })
  // ]

};
