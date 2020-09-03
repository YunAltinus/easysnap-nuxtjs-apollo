<template>
  <div>
    <Header />
    <div>
      <div>profile</div>
      <br />
      <p>Kullanıcı adı : {{ username }}</p>
      <p>Kullanıcı kayıt tarihi : {{ $moment(createdAt).format('DD/MM/YYYY') }}</p>
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
  data() {
    return {
      username: '',
      createdAt: null
    };
  },
  async created() {
    if (this.$store.state.activeUser) {
      this.username = await this.$store.state.activeUser.username;
      this.createdAt = await this.$store.state.activeUser.createdAt;
    }
  }
};
</script>
