'use strict';
var webpack = require("webpack");
module.exports = {  
  entry: [
    "bootstrap-sass!./assets/js/bootstrap-sass-config.js",
    './index.js'
  ],
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    //new webpack.optimize.UglifyJSPlugin()
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    loaders: [
     // { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { test: /\.html/, loader: 'raw' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/,loader: 'style!css!sass' },
      { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=res/[name].[ext]?[hash]'
      },
    ]
  }
}
