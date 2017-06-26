## Write Universal Code

所项目写成了 Universal code 后即可以配置 client-side 服务。也可使用 server-silde 渲染的服务。

### 传统的 client-side 服务

即文件已经是打包的文件

```shell
npm run dev
```

### server-side 渲染

```shell
node build/vue-ssr-server.js
```

### 引入 Vue-router

### 引入Vuex prefetching

```javascript
window.__INITIAL_STATE__= {
  "items": {
    ":3": {
      "id": ":3",
      "name": "eason",
      "title": "The love story!"
    }
  },
  "route": {
    "from": {
      "fullPath": "/",
      "hash": "",
      "meta": {},
      "name": null,
      "params": {},
      "path": "/",
      "query": {}
    },
    "fullPath": "/item/:3",
    "hash": "",
    "meta": {},
    "params": {
      "id": ":3"
    },
    "path": "/item/:3",
    "query": {}
  }
}
```





### Todo

server-side 渲染开发时的 Hot-module-replacement

server-side 与 client-side 的结合。

