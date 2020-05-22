import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: "predashboard",
    modalState: false,
    noteModalState: false,
    filterColumns: false,
    user: {},
    signedIn: false,
  },
  getters: {
    layout(state) {
      return state.layout;
    },
  },
  mutations: {
    SETLAYOUT: (state, layout) => {
      state.layout = layout;
    },
    CHANGEMODALSTATE: (state, modalState) => {
      state.modalState = modalState;
    },
    CHANGENOTEMODALSTATE: (state, noteModalState) => {
      state.noteModalState = noteModalState;
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
    changeNoteModalState: (context, noteModalState) => {
      context.commit("CHANGENOTEMODALSTATE", noteModalState);
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
