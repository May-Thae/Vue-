import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Test from "../components/Test.vue";
import List from "../components/List.vue";
import User from "../components/User.vue";
import Add from "../components/Add.vue";
import Edit from "../components/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { 
    path: "/Test", 
    component: Test 
  },
  { 
    path: "/", 
    component: List, 
    name:"List"
  },
  { 
    path: "/product/:product_id", 
    component: User, 
    name: "User" 
  },
  { 
    path: "/add", 
    component: Add 
  },
  { 
    path: "/product/:product_id/edit", 
    component: Edit, 
    name: "Edit" 
  },
  // { path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
