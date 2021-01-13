import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../components/home'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      name:'home',
      component:Home,
      meta:{title:'首页'}
    },
    {
      path:'/moodEssay',
      name:'moodEssay',
      meta:{title:'心情随笔'}
    },
    {
      path:'/technology',
      name:'technology ',
      meta:{title:'技术分享'}
    },
    {
      path:'/message',
      name:'message',
      meta:{title:'留言板'}
    },
  ]
})