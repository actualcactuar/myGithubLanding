const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/index.js'],
    elements: ['./src/elements.js'],
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.html', '.css'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      lib: path.resolve(__dirname, 'src/lib/'),
      'custom-elements': path.resolve(__dirname, 'src/custom-elements/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: false,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: '/',
    compress: true,
    watchContentBase: true,
    port: 8080,
    index: 'index.html',
    inline: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    writeToDisk: false,
    open: true,
    stats: 'minimal',
  },
};
