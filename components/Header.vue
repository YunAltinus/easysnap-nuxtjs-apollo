  <template>
  <div class="header">
    <div class="logo">
      <h2 class="logo__title">easysnap</h2>
    </div>
    <div class="header_menu">
      <nuxt-link to="/" tag="a" exact>snaps</nuxt-link>
      <span v-if="$store.state.activeUser">
        <nuxt-link to="/profile" tag="a">
          {{ $store.state.activeUser.username }}
        </nuxt-link>
        <Logout />
      </span>
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

