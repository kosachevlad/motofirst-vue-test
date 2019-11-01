import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/style.scss';
import { store } from './store.js'
import VueRouter from 'vue-router';
import Comment from './components/Comment';

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
  { path: '/comment/:comment', name: 'comment', props: true, component: Comment },
];

const router = new VueRouter ({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
