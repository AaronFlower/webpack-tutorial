/**
 * 创建一个 Vue 实例，返回由 vue-server-render 渲染。
 */
import { createApp } from './app'

export default (context) => {
  let { app } = createApp(context)
  return app
}
