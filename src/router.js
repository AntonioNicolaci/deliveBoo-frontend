import { createRouter, createWebHistory } from "vue-router";
import home from "./assets/components/AppMain.vue";
import AppCart from "./assets/pages/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/cart",
      name: "cart",
      component: AppCart,
    },
  ],
});
export { router };
