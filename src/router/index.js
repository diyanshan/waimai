/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite.vue'
import Search from '../pages/Search.vue'
import Order from '../pages/Order.vue'
import Profile from '../pages/Profile.vue'
import Login from '../pages/Login.vue'
import Info from '../pages/Info.vue'
import Goods from '../pages/Goods.vue'
import Ratings from '../pages/Ratings.vue'
import Shop from '../pages/Shop.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta:{
        footerShow:true
      }
    },
    {
      path: '/msite',
      component: Msite,
      meta:{
        footerShow:true
      },
    },
    {
      path: '/search',
      component: Search,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        footerShow:true
      }
    },
    {
      path: '/login',
      component: Login,
      meta:{
        footerShow:false
      }
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path: '/shop/info',
          component: Info,
        },
        {
          path: '/shop/goods',
          component: Goods,
        },
        {
          path: '/shop/ratings',
          component: Ratings,
        },
      ]
    }
  ]
})
