import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "predashboard" },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/leads",
    name: "Leads",
    component: () =>
      import(/* webpackChunkName: "leads" */ "../views/Leads.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    meta: { layout: "predashboard" },
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUp.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  hash: false,
  base: process.env.BASE_URL,
  routes,
});

export default router;
