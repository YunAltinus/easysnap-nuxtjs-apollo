// @ts-nocheck
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      activeUser: null
    }),
    mutations: {
      setActiveUser(state, activeUser) {
        state.activeUser = activeUser;
      }
    },
    actions: {
      singIn({ commit, dispatch }, token) {
        this.$apolloHelpers.onLogin(token);
        localStorage.setItem('apollo-token', token);
        this.$router.push('/');
      },
      setActiveUser({ commit }, activeUser) {
        commit('setActiveUser', activeUser);
      },
      onLogout({ commit }) {
        this.$apolloHelpers.onLogout();
        localStorage.removeItem('apollo-token');
        this.$router.push('/');
      }
    }
  });
};
export default createStore;
