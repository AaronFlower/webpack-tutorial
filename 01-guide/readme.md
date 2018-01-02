## npx

```
npx webpack src/index.js dist/bundle.js
```

## 管理资源

webpack 最出色的功能之一就是，除了 JavaScript，还可以通过 loader 引入任何其他类型的文件。也就是说，以上列出的那些 JavaScript 的优点（例如显式依赖），同样可以用来构建网站或 web 应用程序中的所有非 JavaScript 内容。让我们从 CSS 开始起步，或许你可能已经熟悉了这个设置过程。

## 关于 NPM 代理 
NPM 代理和管理 git 代理一样。

```
npm config ls
npm config list
npm config ls -l
```

- 删除代理 
```
npm config delete proxy
```


## CSS-loader

