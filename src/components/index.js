/*
 * @FilePath: \ComponentLibrary\src\components\index.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-12 16:57:10
 * @Description:批量注册组件
 */
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
export { install, lfButton, lfTable }
export default {
  install,
  components
}
