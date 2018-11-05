// TODO Add webpack-dev-server
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DEV_CONFIG = {

  devServer: {
    port: "9000",
    contentBase: 'dist',
    compress: true
  },

  entry: {
    "public": ["babel-polyfill", "./src/js/app.js"],
  },

  output: {
    path: path.resolve(__dirname, "dist/js/"),
    filename: "[name]-bundle.js",
    chunkFilename: "[chunkhash].chunk.js",
    publicPath: "dist"
  },

  watch: true,

  devtool: 'inline-source-map',

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader?cacheDirectory',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'sass-loader',
        }),
      },
      {
        test: /\.(png|gif|ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=[name].[ext]',
      },
    ],
  },
};

module.exports = DEV_CONFIG;
