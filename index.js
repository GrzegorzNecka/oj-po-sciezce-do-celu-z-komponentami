import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Member from './Member.vue'









const router = new VueRouter({
  routes: [{ path: "/members/:id", component: Member }]
});

const app = new Vue({ router }).$mount("#app");


