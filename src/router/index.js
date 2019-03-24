import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/tabMenu/home'
import Index from '@/components/tabMenu/index'
import Message from '@/components/tabMenu/message'
import Study from '@/components/tabMenu/study'
import User from '@/components/tabMenu/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      redirect: '/index/home',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'study',
          name: 'Study',
          component: Study
        },
        {
          path: 'message',
          name: 'Message',
          component: Message
        },
        {
          path: 'user',
          name: 'User',
          component: User
        },
      ]
    }
  ]
})
