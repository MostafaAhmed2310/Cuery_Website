import Vue from 'vue';
import Router from 'vue-router';
import clientRoutes from '@/router/clientRoutes'


var allRoutes: any[] = []

const routes = allRoutes.concat(clientRoutes)

Vue.use(Router);

export default new Router({
  routes: routes
});
