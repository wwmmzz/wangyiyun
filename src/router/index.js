import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import index from '@/components/index'
import personalized from '@/components/personalized/personalized'
import play from '@/components/play/play'

// 二级路由
import recommend from '@/components/index/view/recommend'
import rank from '@/components/index/view/rank'
import search from '@/components/index/view/search'

Vue.use(Router)

export default new Router({
  routes: [
   {
     path: '/index',
     component: index,
     children:[
       {
         path: 'recommend',
         component: recommend
       },
       {
         path: 'rank',
         component: rank
       },
       {
         path: 'search',
         component: search
       },
       {
         path: '',
         redirect: 'recommend'
       },
     ]
   },
   {
     path: '/personalized',
     component: personalized
   },
   {
     path: '/play',
     component: play
   },
   {
     path: '*',
     redirect: '/index'
   }
  ]
})
