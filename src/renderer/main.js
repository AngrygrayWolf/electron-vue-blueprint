import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import jQuery from 'jquery'
import * as maptalks from 'maptalks'
import echarts from 'echarts'

import './js/test'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
window.$ = window.jQuery = jQuery
window.maptalks = maptalks
window.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
