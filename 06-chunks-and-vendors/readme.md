### webpack 单独打包一个 hello world

```javascript
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	alert('hello world');

/***/ }
/******/ ]);
```

上面是一个自执行函数参数按照 moduleId 来传递。把多余的注释去掉如下， 会帮你实现 cache 的哟。

```javascript
 (function(modules) { // webpackBootstrap
 	// The module cache
 	var installedModules = {};
 	// The require function
 	function __webpack_require__(moduleId) {
 		// Check if module is in cache
 		if(installedModules[moduleId])
 			return installedModules[moduleId].exports;
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			exports: {},
 			id: moduleId,
 			loaded: false
 		};
 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 		// Flag the module as loaded
 		module.loaded = true;
 		// Return the exports of the module
 		return module.exports;
 	}
 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// __webpack_public_path__
 	__webpack_require__.p = "";

 	// Load entry module and return exports
 	return __webpack_require__(0);
 })([/* 0 */ function(module, exports) {
		alert('hello world');
	 }
 ]);
```



 

## webpack CommonsChunkPlugin 的使用

我们在 main.js, moduleA.js moudleB.js moduleC.js 中都引入了 lodash. 在 webpack.config.js 的配置如下：
```javascript
const path = require('path')

module.exports = {
    entry: {
        main: './src/main.js',
        moduleA: './src/moduleA.js',
        moduleB: './src/moduleB.js',
        moduleC: './src/moduleC.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    }
}
```
打包结果, 可以 webpack 为每一个 chunk 都打包了一份 lodash 的源代码,  每个文件的大小都是  **544 KB**。
```shell
~/learning/git_repos/webpack-tutorial/06-chunks-and-vendors on  master! ⌚ 16:08:38
$ webpack
Hash: ddc01065a87076981ae7
Version: webpack 3.0.0
Time: 418ms
     Asset    Size  Chunks                    Chunk Names
moduleC.js  544 kB       0  [emitted]  [big]  moduleC
moduleB.js  544 kB       1  [emitted]  [big]  moduleB
moduleA.js  544 kB       2  [emitted]  [big]  moduleA
   main.js  544 kB       3  [emitted]  [big]  main
   [1] (webpack)/buildin/global.js 509 bytes {0} {1} {2} {3} [built]
   [2] (webpack)/buildin/module.js 517 bytes {0} {1} {2} {3} [built]
   [3] ./src/main.js 75 bytes {3} [built]
   [4] ./src/moduleA.js 72 bytes {2} [built]
   [5] ./src/moduleB.js 72 bytes {1} [built]
   [6] ./src/moduleC.js 72 bytes {0} [built]
    + 1 hidden module
```

我们可以使用 CommonsChunkPlugin 优化 , 新的 webpack.config.js 为:

```javascript
const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: {
		vendor: ['lodash'],
		main: './src/main.js',
		moduleA: './src/moduleA.js',
		moduleB: './src/moduleB.js',
		moduleC: './src/moduleC.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
}
```

打包后的结果, 可以看出除了 vendor.js 大小为 **547 kB**, 其它都是 **522 bytes**。

```shell
$ webpack
Hash: 17a42b3f5fff7cad0fa8
Version: webpack 3.0.0
Time: 439ms
     Asset       Size  Chunks                    Chunk Names
moduleC.js  522 bytes       0  [emitted]         moduleC
moduleB.js  522 bytes       1  [emitted]         moduleB
moduleA.js  522 bytes       2  [emitted]         moduleA
   main.js  525 bytes       3  [emitted]         main
 vendor.js     547 kB       4  [emitted]  [big]  vendor
   [1] multi lodash 28 bytes {4} [built]
   [2] (webpack)/buildin/global.js 509 bytes {4} [built]
   [3] (webpack)/buildin/module.js 517 bytes {4} [built]
   [4] ./src/main.js 75 bytes {3} [built]
   [5] ./src/moduleA.js 72 bytes {2} [built]
   [6] ./src/moduleB.js 72 bytes {1} [built]
   [7] ./src/moduleC.js 72 bytes {0} [built]
    + 1 hidden module
```

因为其它入口的文件都依赖于 `vendor.js` ，在 html 文件中引入时也需要注意顺序，下面的顺序才是正确的：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Test Sequence</title>
</head>
<body>
	<script src="./vendor.js"></script>
	<script src="./main.js"></script>
	<script src="./moduleA.js"></script>
	<script src="./moduleB.js"></script>
	<script src="./moduleC.js"></script>
</body>
</html>
```

利用 `html-webpack-plugin ` 插件生成的 `html`的引用方式也是按打包时的依赖来引入的，自己编写 html 文件要注意。

CommonsChunkPlugin 打包公共 Library 文件。

一般，Library 的文件不会经常改变，而程序的代码经常变化，每次打包时都把第三方的包打进来都是那么低效，因为打包在一起时第三方的库文件不会被浏览器缓存。通过指定多个 entry , 我们可以用 CommonsChunkPlugin 把第三方的库与应用程序的文件内容分开打包。

但是即全我们把第三包的文件单独打包，在重新打包的时，应用程序代码的改变还改变第三方包的 hash 还是没有直到浏览器缓存的目的，

But, if we change application code and run `webpack` again, we see that the hash for the vendor file changes. Even though we achieved separate bundles for `vendor` and `main` bundles, **we see that the `vendor` bundle changes when the application code changes.**

这是因为 webpack 在打包时，会把 webpack 运行时的代码打包到 vendor 里面， 为了解决这个问题我们可以把 webpack 运行时的代码打包到一个 [manifest.js](https://webpack.js.org/guides/code-splitting-libraries/#manifest-file) 文件中。

添加 manifest 配置项：

```diff
diff --git a/06-chunks-and-vendors/webpack.config.js b/06-chunks-and-vendors/webpack.config.js
index e2dbd7d..4852c58 100644
--- a/06-chunks-and-vendors/webpack.config.js
+++ b/06-chunks-and-vendors/webpack.config.js
@@ -11,7 +11,7 @@ module.exports = {
        },
        output: {
                path: path.resolve(__dirname, './dist'),
-               filename: '[name].js'
+               filename: '[name].[chunkhash].js'
        },
        plugins: [
                new htmlWebpackPlugin({
@@ -21,8 +21,8 @@ module.exports = {
                        name: 'self.lodash.vendor',
                        chunks: ['main', 'moduleA', 'moduleB', 'moduleC'] // 如果不指定 chunks 则 entry 的所有 chunk 都会被选中。
                }),
-               // new webpack.optimize.CommonsChunkPlugin({
-               //      name: 'manifest'
-               // })
+               new webpack.optimize.CommonsChunkPlugin({
+                       name: 'manifest'
+               })
        ]
 }
\ No newline at end of file
```

打包后的结果，self.lodash.vendor.98460827861d271addb9.js 以后就很难改变了，除非库的内容变了。

```shell
~/learning/git_repos/webpack-tutorial/06-chunks-and-vendors on  master! ⌚ 17:36:27
$ webpack
Hash: 58b511e9e2203484f120
Version: webpack 3.0.0
Time: 457ms
                                     Asset       Size  Chunks             Chunk Names
           moduleC.0d3a98c407a9822b319c.js  406 bytes       0  [emitted]  moduleC
           moduleB.973089bbafadb2890c34.js  406 bytes       1  [emitted]  moduleB
           moduleA.ae31493036db132a5eff.js  407 bytes       2  [emitted]  moduleA
              main.8d8990accd309b355bcd.js  416 bytes       3  [emitted]  main
self.lodash.vendor.98460827861d271addb9.js  246 bytes       4  [emitted]  self.lodash.vendor
          manifest.6942eb640321cc5b72a0.js    5.93 kB       5  [emitted]  manifest
                                index.html  618 bytes          [emitted]
   [0] ./src/lodash.js 78 bytes {4} [built]
   [1] ./src/main.js 81 bytes {3} [built]
   [2] ./src/moduleA.js 78 bytes {2} [built]
   [3] ./src/moduleB.js 77 bytes {1} [built]
   [4] ./src/moduleC.js 77 bytes {0} [built]
Child html-webpack-plugin for "index.html":
       [2] (webpack)/buildin/global.js 509 bytes {0} [built]
       [3] (webpack)/buildin/module.js 517 bytes {0} [built]
        + 2 hidden modules
```





