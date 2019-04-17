import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import 'assets/scss/index.scss';
import 'swiper/dist/css/swiper.css';
fastclick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
