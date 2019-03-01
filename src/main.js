import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'
import Star from './components/Star.vue'
import CartControl from './components/CartControl.vue'
import store from './store/index'
import {Button} from 'mint-ui'
import './mock/index.js'

Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component(Button.name, Button)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
