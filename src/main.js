import Vue from "vue";
import App from "./App.vue";
import vSelect from 'vue-select'
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./global.scss";
import 'lazysizes';
import 'bootstrap';

import firebase from './auth/firebase'

Vue.config.productionTip = false;

Vue.component('v-select', vSelect)

const getDeviceType = () => {
  const ua = navigator.userAgent;
  
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }else if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile";
  }

  return "desktop";
};

Vue.prototype.$fireBase = firebase

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate: () => {
    // tipo de dispositivo que esta acessando o site
    Vue.prototype.$appDevice = getDeviceType()
  }
}).$mount("#app");