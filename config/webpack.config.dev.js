
const webpackConfigBase = require('./webpack.config.base');
const rootDir = process.cwd();
const srcDir = rootDir + '/src';

module.exports = {
  ...webpackConfigBase,
  entry: {
    ...webpackConfigBase.entry,
    mock: srcDir + '/mock/index.js', // 开发环境，注入 mockjs 做模拟数据
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
};