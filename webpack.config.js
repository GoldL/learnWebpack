const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      use: {
        // loader: 'file-loader',
        loader: 'url-loader',
        options: {
          // 占位符
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 204800
        }
      }
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}