import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar, Dialog, Notify, Dark } from "quasar";

// Styles
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "quasar/src/css/index.sass";
import '@/css/main.scss';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {
    Dialog,
    Notify,
    Dark,
  }, // import Quasar plugins and add here
  config: {},
});

app.mount("#app");
