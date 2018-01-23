import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Welcome from '@/components/Welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // home 下的子路由
      redirect: '/welcome', // 默认重定向到子路由
      children: [
        {path: '/welcome', component: Welcome}
      ]
    }
  ]
})
