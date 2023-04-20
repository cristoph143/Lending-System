import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store, // register the store option
  render: (h) => h(App),
}).$mount("#app");
