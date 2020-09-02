<script>
import Logout from './Logout';
import { GET_ACTIVE_USER } from '~/queries';

export default {
  components: {
    Logout
  }
};
</script>

<template>
  <div class="header">
    <div class="logo">
      <h2 class="logo__title">easysnap</h2>
    </div>
    <div class="header_menu">
      <nuxt-link to="/" tag="a" exact>snaps</nuxt-link>
      <span v-if="$store.state.activeUser">
        <nuxt-link to="/profile" tag="a">@{{$store.state.activeUser.username}}</nuxt-link>
        <Logout />
      </span>
      <span v-else>
        <nuxt-link to="/login" tag="a">login</nuxt-link>
        <nuxt-link to="/join" tag="a">join</nuxt-link>
      </span>
    </div>
  </div>
</template>
