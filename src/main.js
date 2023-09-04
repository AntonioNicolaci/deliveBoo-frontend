import { createApp } from "vue";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { router } from "./router";
// import store from './store.js';

createApp(App).use(router).mount("#app");
