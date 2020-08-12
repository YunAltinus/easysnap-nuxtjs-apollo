<template>
  <div class="joinedUs" v-if="username">
    <strong>@{{username}}</strong> aramiza katildi
  </div>
</template>

<script>
import { USER_CREATED } from '@/queries';

export default {
  data() {
    return {
      username: null
    };
  },
  apollo: {
    $subscribe: {
      user: {
        query: USER_CREATED,
        result({ data }) {
          this.username = data.user.username;
          setTimeout(() => {
            this.username = null;
          }, 5000);
        }
      }
    }
  }
};
</script>