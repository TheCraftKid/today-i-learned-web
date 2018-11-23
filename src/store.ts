import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      fact: {},
    },
    mutations: {
      setLatestFact(state, { id, item }) {
        Vue.set(state.fact, id, item);
      },
    },
    actions: {
      fetchLatestFact({ commit }, id) {
        // TODO: Fetch fact from server and commit it with setLatestFact
        const fact = null;
      },
    },
  });
}
