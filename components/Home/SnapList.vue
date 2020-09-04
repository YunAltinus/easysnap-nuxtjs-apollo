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
import { GET_SNAPS, SNAP_CREATED, GET_ACTIVE_USER } from '@/queries';

export default {
  data() {
    return {
      snapsLength: 0
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
        updateQuery: (previousResult, { subscriptionData }) => {
          if (!subscriptionData) return previousResult;

          const newSnap = subscriptionData.data.snap;

          // if (window.$nuxt.$store.state.activeUser) {
          if (window.$nuxt.$store.state.activeUser.id != newSnap.user.id) {
            if (!previousResult.snaps.find(snap => snap.id === newSnap.id)) {
              return {
                snaps: [newSnap, ...previousResult.snaps]
              };
            } else {
              return previousResult;
            }
          }
          // }
        }
      },
      result({ data }) {
        this.snapsLength = data.snaps.length;
      }
    }
  }
};
</script>