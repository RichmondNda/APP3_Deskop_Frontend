import { createStore } from "vuex";

export default createStore({
  state: {
    authenticated: false,
    user: null,
    token: null,
    extrait: null,
    registreNaissance: null,
  },
  mutations: {
    setAuth(state, user) {
      localStorage.setItem("Auth", JSON.stringify(user));

      state.authenticated = true;
      state.user = user;
      state.token = user.token;
    },

    initializeAuth(state) {
      if (localStorage.getItem("Auth")) {
        state.authenticated = true;
        state.user = JSON.parse(localStorage.getItem("Auth"));
        state.token = state.user.token;
      }
      if (localStorage.getItem("Extrait")) {
        state.extrait = JSON.parse(localStorage.getItem("Extrait"));
      }
      if (localStorage.getItem("registreNaissance")) {
        state.registreNaissance = JSON.parse(
          localStorage.getItem("registreNaissance")
        );
      }
    },

    logout(state) {
      state.user = null;
      state.authenticated = false;
    },

    setInfoChild(state, info) {
      localStorage.setItem("Extrait", JSON.stringify(info));
      state.extrait = info;
    },
    setRegistreInfo(state, info) {
      localStorage.setItem("registreNaissance", JSON.stringify(info));
      state.registreNaissance = info;
    },
  },
  actions: {},
  modules: {},
});
