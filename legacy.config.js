const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: ['./src/index.js'],
    polyfill: ['./src/polyfill.js'],
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
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: '11',
                  },
                  corejs: '2',
                  useBuiltIns: 'usage',
                },
              ],
            ],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
  ],
  output: {
    filename: 'legacy/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: false,
  watchOptions: {
    ignored: /node_modules/,
  },
};
