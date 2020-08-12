import Vuex from 'vuex';

const state = () => ({
  activeUser: null
});

const mutations = {
  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  }
};

const actions = {
  singIn({ commit }, token) {
    this.$apolloHelpers.onLogin(token);
    this.$router.push('/');
  },
  setActiveUser({ commit }, activeUser) {
    commit('setActiveUser', activeUser);
  },
  onLogout({ commit }) {
    this.$apolloHelpers.onLogout();
    this.$router.push('/');
  }
};

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions
  });
};
export default createStore;
