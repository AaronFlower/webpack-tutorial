## 02 webpack development config

参考 [webapck development](https://webpack.js.org/guides/development/)

在完成了 getting-started 上面的简配置后， 我们可能需要配置下当我们项目在开发阶段的配置。首先我们的开发项目的静态文件需要一个服务器来获取，再才我们也不想我们编辑的静态文件能够同步刷新。简单的我们可以使用 webpack 的 webpack-dev-server 工具，它会帮助我们启动一个服务器并且支持 hot reloading。复杂的可以使用 webpack-dev-middleware 中间件来完成。

### 1. webpack-dev-server

我们先使用一个简单的 webpack-dev-serever 来完成我们的配置。首先安装 webpack-dev-server

```shell
$ npm i --save-dev webpack-dev-server
```

配置 devServer, 我们只需在配置文件中添加一个 devServer 项就行了， webpack compiler 会帮我们自动启服务器和 hot reloading.

```diff
diff webpack.config.js
index 3375388..487134f 100644
--- a/02-development-config/webpack.config.js
+++ b/02-development-config/webpack.config.js
@@ -11,7 +11,10 @@ let config = {

        'plugins': [
                new htmlPlugin()
-       ]
+       ],
+       'devServer': {
+               'port': 8083
+       }
 }
```

在启动时就不用 webpack 命令来启动了，而是用 `webpack-dev-server`来完成，当然也可以把这个命令写到 npm 的 scripts 中。即：

```diff
diff --git a/02-development-config/package.json b/02-development-config/package.json
index 3dde763..7265368 100644
--- a/02-development-config/package.json
+++ b/02-development-config/package.json
@@ -4,13 +4,15 @@
   "description": "",
   "main": "src/index.js",
   "scripts": {
-    "test": "echo \"Error: no test specified\" && exit 1"
+    "test": "echo \"Error: no test specified\" && exit 1",
+               "start": "webpack-dev-server"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "html-webpack-plugin": "^2.28.0",
-    "webpack": "^3.0.0"
+    "webpack": "^3.0.0",
+    "webpack-dev-server": "^2.5.0"
   }
 }
```

现在就启动我们服务器吧。

```shell
$ npm run start # 和 webpack-dev-server 一样喽。

> webpack-dev-server

Project is running at http://localhost:8083/
webpack output is served from /
Hash: b6fed2ca29f1dcdd240f
Version: webpack 3.0.0
Time: 1752ms
     Asset       Size  Chunks                    Chunk Names
 bundle.js     854 kB       0  [emitted]  [big]  main
index.html  182 bytes          [emitted]
  [15] (webpack)/buildin/module.js 517 bytes {0} [built]
  [35] multi (webpack)-dev-server/client?http://localhost:8083 ./src/index.js 40 bytes {0} [built]
  [36] (webpack)-dev-server/client?http://localhost:8083 5.78 kB {0} [built]
  [37] ./node_modules/url/url.js 23.3 kB {0} [built]
  [38] ./node_modules/punycode/punycode.js 14.7 kB {0} [built]
  [39] ./node_modules/url/util.js 314 bytes {0} [built]
  [43] ./node_modules/strip-ansi/index.js 161 bytes {0} [built]
  [45] (webpack)-dev-server/client/socket.js 897 bytes {0} [built]
  [77] (webpack)-dev-server/client/overlay.js 3.73 kB {0} [built]
  [78] ./node_modules/ansi-html/index.js 4.26 kB {0} [built]
  [79] ./node_modules/html-entities/index.js 231 bytes {0} [built]
  [82] (webpack)/hot/emitter.js 77 bytes {0} [built]
  [83] ./node_modules/events/events.js 8.33 kB {0} [built]
  [84] ./src/index.js 207 bytes {0} [built]
  [85] ./node_modules/lodash/lodash.js 540 kB {0} [built]
    + 71 hidden modules
Child html-webpack-plugin for "index.html":
       [0] ./node_modules/html-webpack-plugin/lib/loader.js!./node_modules/html-webpack-plugin/default_index.ejs 538 bytes {0} [built]
       [1] ./node_modules/lodash/lodash.js 540 kB {0} [built]
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
webpack: Compiled successfully.
```

这样在我们源文件发生变化时，webpack 会自动编译并且浏览器会自动刷新的哟。