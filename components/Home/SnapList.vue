<template>
  <div>
    <div class="text-center" v-if="$apollo.queries.snaps.loading">Yükleniyor...</div>
    <ul class="snaps">
      <SnapItem :snaps="snaps" />
    </ul>
    <div class="counter">{{snapsLength}} snap(s)</div>
  </div>
</template>

<script>
import SnapItem from './SnapItem';
import { GET_SNAPS, SNAP_CREATED } from '@/queries';

export default {
  props: ['user'],
  data() {
    return {
      snapsLength: 0,
      activeUser: this.user
    };
  },
  components: {
    SnapItem
  },
  apollo: {
    snaps: {
      query: GET_SNAPS,
      subscribeToMore: {
        document: SNAP_CREATED,
        // Variables passed to the subscription. Since we're using a function,
        // they are reactive
        variables() {
          if (this.activeUser) {
            return { user_id: this.activeUser.id };
          } else {
            return { user_id: null };
          }
        },
        update(data) {
          console.log('update', data);
          // The returned value will update
          // the vue property 'pingMessage'
          return data.ping;
        },
        // Mutate the previous result
        updateQuery(previousResult, { subscriptionData }) {
          // Here, return the new result from the previous with the new data

          if (!subscriptionData) return previousResult;

          const newSnap = subscriptionData.data.snap;

          // OPTIMICTIK UI
          if (this.$store.state.activeUser.id !== newSnap.user.id) {
            if (previousResult.snaps.find(snap => snap.id === newSnap.id)) {
              return previousResult;
            }

            return {
              snaps: [newSnap, ...previousResult.snaps]
            };
          }
        }
      },
      result({ data }) {
        this.snapsLength = data.snaps.length;
      }
    }
  }
};
</script>