const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const { resolve } = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
    }),
  ],
});
