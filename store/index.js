// @ts-nocheck
import Vuex from 'vuex';

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
      nuxtServerInit({ commit }, { app, store }) {
        commit('setToken', store.$apolloHelpers.getToken());
      },
      singIn({ commit, dispatch }, token) {
        this.$apolloHelpers.onLogin(token);
        commit('setToken', token);
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
    getters: {
      getToken(state) {
        return state.token ? true : false;
      }
    }
  });
};
export default createStore;
