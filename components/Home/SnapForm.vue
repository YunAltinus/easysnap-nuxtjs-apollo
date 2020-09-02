<template>
  <div>
    <form @submit.prevent="addSnap">
      <input
        v-model="text"
        :disabled="!this.$apolloHelpers.getToken()"
        class="add-snap__input"
        type="text"
        placeholder="add snap"
      />
    </form>
  </div>
</template>

<script>
import { ADD_SNAP, GET_SNAPS, GET_ACTIVE_USER } from '@/queries';

export default {
  data() {
    return {
      text: ''
    }
  },
  apollo: {
    activeUser: {
      query: GET_ACTIVE_USER,
      result({ data }) {
        this.$store.dispatch('setActiveUser', data.activeUser);
      }
    }
  },
  methods: {
    addSnap(event) {
      this.$apollo
        .mutate({
          mutation: ADD_SNAP,
          variables: {
            user_id: this.activeUser.id,
            text: this.text
          },
          update: (store, { data: { createSnap } }) => {
            // Read the data from our cache for this query.
            const { snaps } = store.readQuery({ query: GET_SNAPS });

            // Add our tag from the mutation to the end
            snaps.unshift(createSnap);

            // Write our data back to the cache.
            store.writeQuery({ query: GET_SNAPS, data: { snaps } });
          },
          // Optimistic UI
          // Will be treated as a 'fake' result as soon as the request is made
          // so that the UI can react quickly and the user be happy
          optimisticResponse: {
            __typename: 'Mutation',
            createSnap: {
              __typename: 'Snap',
              id: -1,
              text: this.text,
              createdAt: new Date(),
              user: {
                __typename: 'User',
                id: this.activeUser.id,
                username: this.activeUser.username
              }
            }
          }
        })
        .then(({ data }) => {
          this.text = null;
        })
        .catch(() => console.error('Ekleme islemi gerçekleşemedi'));
    }
  }
};
</script>