<template>
  <div>
    <Header/>
    <form class="user-form" @submit.prevent="createUser">
      <label>
        <input v-model="username" type="text" placeholder="username" />
      </label>
      <label>
        <input v-model="password" type="password" placeholder="password" />
      </label>
      <label>
        <input v-model="passwordConfirm" type="password" placeholder="confirm password" />
      </label>

      <button :disabled="inValid" type="submit">Join</button>

      <div v-if="$apollo.loading">Loading...</div>
    </form>
  </div>
</template>

<script>
import { CREATE_USER } from '~/queries/index';

export default {
  data() {
    return {
      username: null,
      password: null,
      passwordConfirm: null,
      loading: null
    };
  },
  computed: {
    inValid() {
      return (
        !this.username ||
        !this.password ||
        !this.passwordConfirm ||
        this.passwordConfirm !== this.password
      );
    }
  },
  methods: {
    createUser(event) {
      this.$apollo
        .mutate({
          mutation: CREATE_USER,
          result({ data, loading }) {
            this.loading = loading;
          },
          variables: {
            username: this.username,
            password: this.password,
            passwordConfirm: this.passwordConfirm
          }
        })
        .then(({ data }) => {
          this.$store.dispatch('singIn', data.createUser.token);
          event.target.reset();
        });
    }
  }
};
</script>