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