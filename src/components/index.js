/*
 * @FilePath: \ComponentLibrary\src\components\index.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-20 09:53:33
 * @Description:批量注册组件
 */
import '../assets/css/index.scss'
const files = require.context('@/components', true, /\.vue$/)
const components = {}
files.keys().forEach((key) => {
  files(key).default.install = (Vue) => { Vue.component(files(key).default.name, files(key).default) }
  console.log(files(key).default)
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
const install = (Vue) => {
  if (install.installed) return
  for (const i in components) {
    Vue.component(components[i].name, components[i])
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const lfButton = components.Button
const lfTable = components.Table
const lfCollapse = components.Collapse
export { install, lfButton, lfTable, lfCollapse }
export default {
  install,
  components
}
