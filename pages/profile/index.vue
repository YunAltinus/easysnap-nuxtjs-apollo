<template>
  <div>
    <div>profile</div>
    <br />
    <p>Kullanıcı adı : {{ this.$store.state.activeUser.username }}</p>
    <p>Kullanıcı kayıt tarihi : {{ $moment(this.$store.state.activeUser.createdAt).format('DD/MM/YYYY') }}</p>
    <SnapList :user="activeUser" />
  </div>
</template>

<script>
import SnapList from '@/components/Home/SnapList';

export default {
  middleware: 'auth',
  components: {
    SnapList
  },
  data() {
    return {
      activeUser: this.$store.state.activeUser
    };
  }
};
</script>
