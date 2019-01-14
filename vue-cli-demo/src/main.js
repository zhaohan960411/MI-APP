// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery' //全局引入jquery
import Vuex from "vuex" //全局引入vuex
import store from './vuex/store'//引入store
import '../static/js/swiper/dist/css/swiper.min.css'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Mint);
Vue.prototype.$http = axios
//mui样式库引入
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/iconfont.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
