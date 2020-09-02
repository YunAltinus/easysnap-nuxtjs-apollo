<template>
  <div class="header">
    <div class="logo">
      <h2 class="logo__title">easysnap</h2>
    </div>
    <div class="header_menu">
      <nuxt-link to="/" tag="a" exact>snaps</nuxt-link>
      <nuxt-link to="/profile" tag="a" v-if="$apolloHelpers.getToken()">@{{$store.state.activeUser.username}}</nuxt-link>
      <Logout v-if="$apolloHelpers.getToken()" />
      <div v-else>
        <nuxt-link to="/login" tag="a">login</nuxt-link>
        <nuxt-link to="/join" tag="a">join</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logout from './Logout';

export default {
  components: {
    Logout
  },
};
</script>