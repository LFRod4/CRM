import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalState: false,
    filterColumns: false,
    user: {},
    signedIn: false,
  },
  mutations: {
    CHANGEMODALSTATE: (state, modalState) => {
      state.modalState = modalState;
    },
    CHANGEFILTERCOLUMNSTATE: (state) => {
      state.filterColumns = !state.filterColumns;
    },
    SETUSER: (state, user) => {
      state.user = user;
    },
    CHANGESIGNEDIN: (state) => {
      state.signedIn = !state.signedIn;
    },
  },
  actions: {
    changeModalState: (context, modalState) => {
      context.commit("CHANGEMODALSTATE", modalState);
    },
    changeFilterColumnState: (context) => {
      context.commit("CHANGEFILTERCOLUMNSTATE");
    },
    setUser: (context, user) => {
      context.commit("SETUSER", user);
    },
    changeSignedIn: (context) => {
      context.commit("CHANGESIGNEDIN");
    },
  },
  modules: {},
});
