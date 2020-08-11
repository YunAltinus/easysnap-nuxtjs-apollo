// @ts-nocheck
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      activeUser: {}
    }),
    mutations: {
      setActiveUser(state, activeUser) {
        state.activeUser = activeUser;
      }
    },
    actions: {
      async singIn({ commit }, token) {
        await this.$apolloHelpers.onLogin(token);

        this.$router.push('/');
      },
      setActiveUser({ commit }, activeUser) {
        commit('setActiveUser', activeUser);
      },
      onLogout({ commit }) {
        this.$apolloHelpers.onLogout();
        this.$router.push('/');
      }
    }
  });
};

export default createStore;
