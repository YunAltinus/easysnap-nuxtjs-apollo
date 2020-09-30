// @ts-nocheck
import Vuex from 'vuex';
import jwt_decode from 'jwt-decode'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      activeUser: null,
      token: ''
    }),
    mutations: {
      setActiveUser(state, activeUser) {
        state.activeUser = activeUser;
      },
      setToken(state, token) {
        state.token = token;
      }
    },
    actions: {
      async nuxtServerInit({ commit }, { req, store }) {
        if (process.server && process.static) return;
        if (!req.headers.cookie) return;

        const token = await req.headers.cookie.split("=")[1];
        if (!token) return;

        console.log("token");

        const user = await jwt_decode(token);
        console.log(user);

        if (user) commit('setActiveUser', user);

      },
      async singIn({ commit, dispatch }, token) {
        await this.$apolloHelpers.onLogin(token);
        await commit('setToken', token);
        this.$router.push('/');
      },
      setActiveUser({ commit }, activeUser) {
        commit('setActiveUser', activeUser);
      },
      onLogout({ commit }) {
        this.$apolloHelpers.onLogout();
        localStorage.removeItem('apollo-token');
        commit('setToken', '');
        this.$router.push('/');
      }
    },
  });
};
export default createStore;
