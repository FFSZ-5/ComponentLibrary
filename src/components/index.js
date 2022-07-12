/*
 * @FilePath: \ComponentLibrary\src\components\index.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-12 14:45:22
 * @Description:批量注册组件
 */
const files = require.context('@/components', true, /\.vue$/)
const components = {}
files.keys().forEach((key) => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})
const install = (Vue) => {
  for (const i in components) {
    Vue.component(components[i].name, components[i])
  }
}
export default {
  install,
  components
}
