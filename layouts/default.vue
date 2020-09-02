<template>
  <nuxt />
</template>

<script>
import { GET_ACTIVE_USER } from '@/queries';

export default {
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