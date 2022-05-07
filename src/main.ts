import Vue from 'vue';
import App from './App.vue';
import router from './router/mainRouter';
import './registerServiceWorker';
import VueI18n from 'vue-i18n';
import { messages, defaultLocale } from "@/i18n";


import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueI18n)


const i18n = new VueI18n({
  messages,
  locale: (<any>defaultLocale),
  fallbackLocale: (<any>defaultLocale)
});


Vue.use(VueSimpleAlert);
Vue.use(require('vue-moment'));
Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
