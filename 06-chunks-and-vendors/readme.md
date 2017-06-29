## webpack CommonsChunkPlugin 的使用

我们在 main.js, moduleA.js moudleB.js moduleC.js 中都引入了 lodash. 在 webpack.config.js 的配置如下：
```
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

我们可以使用 CommonsChunkPlugin 优化:

