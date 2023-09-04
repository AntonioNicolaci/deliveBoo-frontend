import { createRouter, createWebHistory } from "vue-router";
import AppCart from "./assets/pages/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/cart",
      name: "cart",
      component: AppCart,
    },
  ],
});
export { router };
