import Vue from "vue";
import Router from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import { createRouter } from "./router";
import { createStore } from './store';
import "./registerServiceWorker";

Vue.config.productionTip = false;

export function createApp(): AppObjects {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router, store, };
}

export interface AppObjects {
  app: Vue;
  router: Router;
  store: Vuex.Store;
}
