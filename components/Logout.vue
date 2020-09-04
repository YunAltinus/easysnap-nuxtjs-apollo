<template>
  <button @click="onClick">Logout</button>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$store.dispatch('onLogout');
    }
  }
};
</script>
