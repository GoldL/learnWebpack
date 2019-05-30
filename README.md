##### 1. [概念](https://www.webpackjs.com/concepts/#%E5%85%A5%E5%8F%A3-entry-)
##### 2. [模块](https://www.webpackjs.com/concepts/modules/#%E4%BB%80%E4%B9%88%E6%98%AF-webpack-%E6%A8%A1%E5%9D%97)
##### 3. 基本配置
```
// webpack.config.js
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  }
}
```
###### 4. [webpack getting-started](https://www.webpackjs.com/guides/getting-started/)
- global
- webpack index.js
- npx wepback index.js
- npm run bundle -> webpack
##### 5. [`file-loader`](https://www.webpackjs.com/loaders/file-loader/)
##### 6.[`url-loader`](https://www.webpackjs.com/loaders/url-loader/)
```
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
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```