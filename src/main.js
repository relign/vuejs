import Vue from 'vue'
// import app from './components/app/app.vue'
import VueRouter from 'vue-router'
import routerMap from './routers';

import './components/app/style.css';


Vue.config.debug = true
Vue.use(VueRouter);
//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});
let app = Vue.extend({});
routerMap(router);

router.start(app, "#app");
