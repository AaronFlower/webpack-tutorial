## Vue simple project

```shell
$ npm init -y
$ npm i --save webapck webpack-dev-server cross-env		
```

我们对于 webpack-dev-server 的配置需要注意下其默认的配置， 所我们在项目中添加一个 index.html,其实我们的 index.html 可使用 webpack-html-plugin 来注册。

```javascript
  /**
   * devServer 的 contentBase 默认是 __dirname 当前目录。
   * 并且 NodeJS server 的主文件是 index.html
   */
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
```

