import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App).use(VueSweetalert2);

createApp(App).mount("#app");
