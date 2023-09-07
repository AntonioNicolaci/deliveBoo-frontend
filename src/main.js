import { createApp } from "vue";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { router } from "./router";
import vueBraintree from 'vue-braintree'

createApp(App)
    .use(router)
    .use(vueBraintree)
    .mount("#app");
