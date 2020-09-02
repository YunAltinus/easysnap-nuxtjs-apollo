<template>
  <div>
    <Header :activeUser="activeUser"/>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header';
import {GET_ACTIVE_USER} from "~/queries"

export default {
  components: {
    Header
  },
  apollo: {
    activeUser: {
      query: GET_ACTIVE_USER,
      result({ data }) {
        this.$store.dispatch('setActiveUser', data.activeUser);
      }
    }
  }
};
</script>