<template>
  <button @click="onLogout">Logout</button>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch('onLogout');
    }
  }
};
</script>