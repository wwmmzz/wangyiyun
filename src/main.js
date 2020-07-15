// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/js/remScale'

Vue.config.productionTip = false

import axios from 'axios'
import jquery from 'jquery'

Vue.prototype.axios = axios
Vue.prototype.jquery = jquery

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
