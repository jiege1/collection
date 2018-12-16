
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const webpack = require('webpack');

const rootDir = process.cwd();
const srcDir = path.resolve(rootDir, 'src');
const publicDir = path.resolve(rootDir, 'public');

module.exports = {
  entry: {
    index: srcDir + '/index.js',
  },
  output: {
    path: path.resolve(rootDir, 'build'),
    filename: '[name].min.js',
    chunkFilename: 'chunks/[name]/chunk.min.js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true // css压缩
              }
            }
          ],
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                localIdentName: '[local]_[hash:base64:6]',
                modules: true,
                camelCase: true,
                sourceMap: false,
                minimize: true // css压缩
              }
            },
            {
              loader: 'less-loader',
            }
          ],
          fallback: 'style-loader'
        })
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      store: path.resolve(srcDir, 'store'),
      router: path.resolve(srcDir, 'router'),
      pages: path.resolve(srcDir, 'pages'),
      components: path.resolve(srcDir, 'components'),
      containers: path.resolve(srcDir, 'containers'),
      common: path.resolve(srcDir, 'common'),
      api: path.resolve(srcDir, 'api'),
    }
  },
  plugins: [
    // 指定一个html模版，
    new HtmlWebpackPlugin({
      template: path.resolve(publicDir, 'index.html'),
      inject: true,
      chunks: ['index'],
    }),
    new CaseSensitivePathsPlugin(),
    // 将css写入css文件，并注入html模版
    new ExtractTextPlugin({
      filename: 'index.min.css',
      allChunks: true,
    }),
    new webpack.optimize.ModuleConcatenationPlugin({})
  ],
};