import Vue from 'vue'
import VueRouter from "vue-router";
import Index from '../components/index'
import Home from '../components/home'
import moodEssay from "../components/moodEssay";
import messageBoard from "../components/messageBoard";
import demo from "../components/demo"
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
      meta:{title:'可视化',icon:'el-icon-scissors'}
    },
    {
      path:'/technology',
      name:'technology',
      component: demo,
      meta:{title:'组件Demo',icon:'el-icon-collection'}
    },
    {
      path:'/message',
      name:'message',
      component: messageBoard,
      meta:{title:'留言板',icon:'el-icon-notebook-1'}
    },
  ]
})