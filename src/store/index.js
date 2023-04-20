import Vue from "vue";
import Vuex from "vuex";
import destination from "./modules/destination";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    destination,
  },
});
