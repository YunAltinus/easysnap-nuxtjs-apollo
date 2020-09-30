// @ts-nocheck
import jwt_decode from 'jwt-decode'

export const state = () => ({
  activeUser: null,
  token: ''
})

export const mutations = {
  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  },
  setToken(state, token) {
    state.token = token;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    const token = await req.headers.cookie.split("=")[1];
    if (!token) return;


    const user = await jwt_decode(token);

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
}