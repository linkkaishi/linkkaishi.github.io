import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import '../src/assets/iconfont/iconfont.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'
// Vue.prototype.$http = axios
Vue.use(VueAxios,Axios)

// axios.defaults.withCredentials = true 
import routers from './routers'

Vue.use(VueRouter)
const  router = new VueRouter({
  // mode: 'history',
  routes: routers
})
Vue.use(ElementUI);

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
