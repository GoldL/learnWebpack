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
##### 7. 样式文件打包
- [`style-loader`](https://www.webpackjs.com/loaders/style-loader/)
- [`css-loader`](https://www.webpackjs.com/loaders/css-loader/)
- [`less-loader`](https://www.webpackjs.com/loaders/less-loader/)
- [`sass-loader`](https://www.webpackjs.com/loaders/sass-loader/)
- [`postcss-loader`](https://www.webpackjs.com/loaders/postcss-loader/)
- [`autoprefixer`](https://www.npmjs.com/package/autoprefixer)
```
// wepack.config.js  ---引用postcss-loader
{
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
}
// postcss.config.js   ---postcss-loader引用插件autoprefixer
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
// wepack.config.js ---scss文件用又引用了其他scss文件,importLoader: 2按顺序执行
test: /\.scss   $/,
use: ['style-loader', 
{
loader: 'css-loader',
options: {
  importLoaders: 2 // 关键代码
},
'sass-loader',
'postcss-loader']
// wepack.config.js  ---css模块化
test: /\.scss   $/,
use: ['style-loader', 
{
loader: 'css-loader',
options: {
  importLoaders: 2,
  modules: true // 关键代码
},
'sass-loader',
'postcss-loader']
```