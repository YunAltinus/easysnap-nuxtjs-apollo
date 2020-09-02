  <template>
  <div class="header">
    <div class="logo">
      <h2 class="logo__title">easysnap</h2>
    </div>
    <div class="header_menu">
      <nuxt-link to="/" tag="a" exact>snaps</nuxt-link>
      <div v-if="isAuth">
        <nuxt-link to="/profile" tag="a">@{{activeUser.username}}</nuxt-link>
        <Logout />
      </div>
      <div v-else>
        <nuxt-link to="/login" tag="a">login</nuxt-link>
        <nuxt-link to="/join" tag="a">join</nuxt-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import Logout from './Logout';
import { GET_ACTIVE_USER } from '~/queries';

export default {
  computed:{
    isAuth(){
      return this.$store.state.activeUser ? true : false
    }
  },
  apollo: {
    activeUser: {
      query: GET_ACTIVE_USER
    }
  },
  components: {
    Logout
  }
};
</script>

