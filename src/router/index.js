import Vue from 'vue'
import VueRouter from "vue-router";
import Index from '../components/index'
import Home from '../components/home'
import moodEssay from "../components/moodEssay";
import messageBoard from "../components/messageBoard";
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      name:'home',
      component:Home,
      meta:{title:'首页',icon:'el-icon-house'}
    },
    {
      path:'/moodEssay',
      name:'moodEssay',
      component: moodEssay,
      meta:{title:'心情随笔',icon:'el-icon-scissors'}
    },
    {
      path:'/technology',
      name:'technology',
      meta:{title:'技术分享',icon:'el-icon-collection'}
    },
    {
      path:'/message',
      name:'message',
      component: messageBoard,
      meta:{title:'留言板',icon:'el-icon-notebook-1'}
    },
  ]
})