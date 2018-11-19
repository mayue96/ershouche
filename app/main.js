import Vue from "vue";
import Vuex from "vuex";
import iview from "iview";
import App from "./App.vue";
import store from "./stores/store.js";

Vue.use(Vuex);
Vue.use(iview);

new Vue({
	el : "#app",
	render(h){
		return h(App);
	},
	store : new Vuex.Store(store)
});