import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalState: false,
    noteModalState: false,
    filterColumns: false,
    user: {},
    signedIn: false,
    contacts: [],
    activeContact: "",
  },
  getters: {
    contactsLength: (state) => {
      return state.contacts.length;
    },
  },
  mutations: {
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
    SIGNOUT: (state) => {
      state.signedIn = false;
      state.user = {};
    },
    SETCONTACTS: (state, contacts) => {
      state.contacts = contacts;
    },
    SETACTIVECONTACT: (state, activeId) => {
      state.activeContact = activeId;
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
      if (context.state.signedIn == false) {
        context.commit("CHANGESIGNEDIN");
      }
    },
    changeSignedIn: (context) => {
      context.commit("CHANGESIGNEDIN");
    },
    signOut: (context) => {
      context.commit("SIGNOUT");
    },
    setContacts: (context) => {
      axios
        .get("https://ukjma0hb0c.execute-api.us-east-1.amazonaws.com/dev/leads")
        .then((res) => {
          context.commit("SETCONTACTS", res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setActiveContact: (context, activeId) => {
      context.commit("SETACTIVECONTACT", activeId);
    },
  },
  modules: {},
});
