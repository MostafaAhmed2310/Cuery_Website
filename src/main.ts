import Vue from 'vue';
import App from './App.vue';
import router from './router/mainRouter';
import './registerServiceWorker';

import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
