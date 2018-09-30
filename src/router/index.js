import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import Index from '@/components/index'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      redirect: '/main'
    },
    {
      // 登陆页面
      path: '/login',
      component: resolve => require(['@/components/login'], resolve)
    },
    {
      // 登陆后
      path: '/main',
      component: resolve => require(['@/components/index'], resolve),
      children: [{
        path: 'hello',
        component: (resolve) => require(['@/components/hello'], resolve)
      }]
    }
  ]
})
