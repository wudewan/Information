import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import axios from "axios"
import moment from "moment"
import 'vant/lib/index.css';

Vue.config.productionTip = false
Vue.use(Vant);
axios.defaults.baseURL="http://localhost:3000"
Vue.prototype.axios=axios;
Vue.prototype.moment=moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
