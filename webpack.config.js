const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
  },

  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
      minify: true,
    }),
  ],

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'public',
  },

  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000, // bytes
          name: 'images/[name].[hash:8].[ext]',
        },
      },
    ],
  },
};

module.exports = config;
