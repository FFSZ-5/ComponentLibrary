/*
 * @FilePath: \ComponentLibrary\src\main.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-12 15:05:35
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.scss'
import lfC from '@/../dist/lfComponents.umd'// 引入组件库
import '@/../dist/lfComponents.css'
Vue.use(lfC)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
