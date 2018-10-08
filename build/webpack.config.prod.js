'use strict'


const path = require("path");
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',

  // output: {    
  //   path: path.resolve(__dirname, "../dist/js"),   
  //   filename: "[name].js" 
  // },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css?$/,
  //       use: [
  //         MiniCssExtractPlugin.loader, 
  //         'css-loader',
  //         'vue-style-loader'
  //       ]
  //     }
  //   ]
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'main.css'
  //   })
  // ]
})