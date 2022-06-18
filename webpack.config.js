const path = require('path');

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /nude_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader'
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
