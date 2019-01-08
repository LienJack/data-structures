const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports =  {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      include: path.join(__dirname, './src'),
      // loader: 'babel-loader?cacheDirectory=true'
      loader: 'happypack/loader?id=happyBabel',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
    id: 'happyBabel',
    //如何处理  用法和loader 的配置一样
    loaders: [{
      loader: 'babel-loader?cacheDirectory=true',
    }],
    //共享进程池
    threadPool: happyThreadPool,
    //允许 HappyPack 输出日志
    verbose: true,
  })
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'), // 更目录
    open: true,
    port: 9000
  }
}