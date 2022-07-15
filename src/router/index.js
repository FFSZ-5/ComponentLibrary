/*
 * @FilePath: \ComponentLibrary\src\router\index.js
 * @Version: 2.0
 * @LastEditors: lhl
 * @LastEditTime: 2022-07-15 09:53:58
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
