import { createRouter, createWebHistory } from "vue-router";
import home from "./assets/pages/AppMain.vue";
import AppCart from "./assets/pages/Cart.vue";
import Restaurantshow from "./assets/pages/Restaurantshow.vue";

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

    {
      path: "/restaurants/:restaurant",
      name: "restaurants.show",
      component: Restaurantshow,
    },
  ],
});
export { router };
