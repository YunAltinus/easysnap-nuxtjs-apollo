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
      nuxtServerInit({ commit }, { req }) {
        if (req) {
          const token = req.headers;
          if (token && token !== null) {
            try {
              const checkToken = token.cookie.split('=')[1];
              commit('setToken', checkToken);
            } catch (error) {
              console.log(error);
            }
          }
        }
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
