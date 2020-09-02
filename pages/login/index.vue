<template >
  <div>
    <Header/>
    <form class="user-form" @submit.prevent="singIn">
      <label>
        <input v-model="username" type="text" placeholder="username" />
      </label>
      <label>
        <input v-model="password" type="password" placeholder="password" />
      </label>
      <label>
        <button :disabled="inValid" type="submit">Login</button>
      </label>
      <div v-if="error">{{ error }}</div>
    </form>
  </div>
</template>

<script>
import { SING_IN_USER } from '@/queries';

export default {
  data() {
    return {
      username: null,
      password: null,
      error: null
    };
  },
  computed: {
    inValid() {
      return !this.username || !this.password;
    }
  },

  methods: {
    singIn(event) {
      this.$apollo
        .mutate({
          mutation: SING_IN_USER,
          variables: {
            username: this.username,
            password: this.password
          }
        })
        .then(({ data }) => {
          this.$store.dispatch('singIn', data.singIn.token);
          event.target.reset();
        })
        .catch(err => {
          this.error = err.message.split(':')[1];
        });
    }
  }
};
</script>