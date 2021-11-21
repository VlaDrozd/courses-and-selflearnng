const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader?name=./assets/fonts/[name].[ext]'
          }
        ]
      }, 
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [
          {
            loader: 'file-loader?name=./assets/img/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]

};