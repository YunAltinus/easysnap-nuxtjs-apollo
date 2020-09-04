<template>
    <div>
      <Header />
      <div v-if="initActiveUser">
        <div>profile</div>
        <br />
        <p>Kullanıcı adı : {{ this.$store.state.activeUser.username }}</p>
        <p>Kullanıcı kayıt tarihi : {{ $moment( this.$store.state.activeUser.createdAt).format('DD/MM/YYYY') }}</p>
      </div>
    </div>
</template>

<script>
import SnapList from '@/components/Home/SnapList';

export default {
  middleware: 'auth',
  components: {
    SnapList
  },
  computed: {
    initActiveUser() {
      return this.$store.state.activeUser ? true : false;
    }
  }
};
</script>
