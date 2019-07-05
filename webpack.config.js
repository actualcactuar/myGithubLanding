const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main:['./src/index.js'],
    elements:['./src/elements.js']
  },
  mode:'development',
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: "babel-loader",
            options: {
                babelrc: true 
            }
          }
      },{
        test:/\.(s*)css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
     },{
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
        options: {
          attrs: [':data-src']
        }
      }
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  watch:false,
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath:'/dist/',
    compress: true,
    watchContentBase: true,
    port: 8080,
    host:'192.168.1.220',
    index: 'index.html',
    inline: true,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    writeToDisk: false,
    open: true,
    stats:'minimal'
  }
};