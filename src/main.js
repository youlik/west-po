import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui'
import Router from 'vue-router'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import '../src/common/css/base.scss'
import "../src/common/css/baseColor.scss"
import axios from 'axios'


Vue.prototype.$axios = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL =  "http://localhost:3000"
Vue.config.productionTip = false
Vue.use(element,Router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
