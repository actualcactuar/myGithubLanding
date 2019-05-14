const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main:['./app/src/index.js'],
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
    contentBase: path.join(__dirname+'/app'),
    publicPath:'/dist/',
    compress: true,
    watchContentBase: true,
    port: 9000,
    index: 'app/index.html',
    inline: true,
    proxy: {
      '/api': 'http://localhost:3000'
    },
    writeToDisk: false,
    open: true,
    stats:'minimal'
  }
};