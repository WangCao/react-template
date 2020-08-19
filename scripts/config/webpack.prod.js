const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const { resolve } = require('path');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const { PROJECT_PATH } = require('../constant');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(
        `${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`,
        { nodir: true }
      ),
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by wangcao */',
    }),
  ],
});
