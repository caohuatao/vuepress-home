/**
 * User: CHT
 * Date: 2020/6/2
 * Time: 17:18
 */
// 使用异步函数也是可以的
import VueSuperFlow from 'vue-super-flow'

import 'vue-super-flow/lib/index.css'

export default (props) => {
  const {
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData, // 站点元数据
    isServer // 当前应用配置是处于 服务端渲染 或 客户端
  } = props
  // ...做一些其他的应用级别的优化
  
  Vue.use(VueSuperFlow)
}
