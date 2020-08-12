<template>
  <span>
    <li v-for="(snap, index) in snaps" :key="index" :class="snap.id < 0 ? 'optimistic' : ''">
      <div class="title">
        <span>
          <strong>@{{snap.user.username}}:</strong>
        </span>
        {{snap.text}}
      </div>
      <span class="date">
        <span v-if="snap.id < 0">Gönderiliyor...</span>
        <span v-else>
          <timeago :datetime="snap.createdAt" :auto-update="60">></timeago>
        </span>
      </span>
    </li>
  </span>
</template>
<script>
export default {
  props: ['snaps']
};
</script>