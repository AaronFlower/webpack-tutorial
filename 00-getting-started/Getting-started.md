### Getting-started 

首先初始化项目目录，安装 webpack

```bash
$ npm init -y
$ npm i --save-dev webpack
$ mkdir src && touch src/index.js
$ tree -I node_modules
.
├── package.json
└── src
    └── index.js

1 directory, 2 files

$ cat package.json
{
  "name": "00-getting-started",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.0.0"
  }
}
```

编辑 src/index.js 文件。项目的源文件依赖 lodash 库，所以先安装下 lodash。 注意下用 `--save`选项而不 `—save-dev`选项。因为`--save`是项目发布后还依赖的包，而`--save-dev`只是在开发时项目打包时所依赖的包。

```
$ npm i --save lodash
```

**src/index.js**

```javascript
import _ from 'lodash'

function component() {
	var element = document.createElement('div')
	element.innerHTML = _.join(['Hello', 'webpack'], ' ')
	return element()
}

document.body.appendChild(component())
```

编写打包文件 `webpack.config.js`

```javascript
const path = require('path')
const distPath = path.resolve(__dirname, 'dist')

let config = {
	'entry': './src/index.js',
	'output': {
		'path': distPath,
		'filename': 'bundle.js',
	}
}

module.exports = config
```

执行命令进行打包：

```shell
$ webpack
Hash: acb4b7edf09cc8c31257
Version: webpack 3.0.0
Time: 580ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  544 kB       0  [emitted]  [big]  main
   [0] ./src/index.js 207 bytes {0} [built]
   [2] (webpack)/buildin/global.js 509 bytes {0} [built]
   [3] (webpack)/buildin/module.js 517 bytes {0} [built]
    + 1 hidden module
```

可以看到已经为我们打包的好文件 dist/bundle.js 啦。

```shell
$ tree -I node_modules
.
├── dist
│   └── bundle.js
├── package.json
├── src
│   └── index.js
└── webpack.config.js
```

自己写一个 html 文件引入 `dist/bundle.js` 文件就可以了。

#### 引入 html-webpack-plugin 插件

但是可能我们在调试时，每次编译都会生成一个不同 hash 的文件，并不想每次都改我们 html 文件，我们可以使用 html-webpack-plugin 插件来自动为我们生成一个  html 文件。

1. 安装 html-webpack-plugin 

```
$ npm i --save-dev html-webpack-plugin
```

2. 更改配置文件 webpack.config.js 添加 plugin

```diff
 const path = require('path')
 const distPath = path.resolve(__dirname, 'dist')
+const htmlPlugin = require('html-webpack-plugin')

 let config = {
        'entry': './src/index.js',
        'output': {
                'path': distPath,
                'filename': 'bundle.js',
-       }
+       },
+
+       'plugins': [
+               new htmlPlugin({
+                       title: 'Webpack getting started'
+               })
+       ]
 }

 module.exports = config
```

3. 执行 `webpack` 就可以看到 html-webpack-plugin 插件为我们生成 html 文件了。

```shell
$ tree -I node_modules
.
├── dist
│   ├── bundle.js
│   └── index.html
├── package.json
├── src
│   └── index.js
└── webpack.config.js
```

