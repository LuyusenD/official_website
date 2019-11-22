import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index/index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/email',
      name: 'email',
      component: function () { 
        return import( './views/About.vue')
      }
    },
    {
      path: '/emailList',
      name: 'emailList',
      component: function () { 
        return import( './views/List.vue')
      }
    }
  ]
})
