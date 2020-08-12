<template>
  <div class="container">
    <div class="description">
      <p class="sub_header__desc">
        simple snap app with
        <span>Nuxt</span>.
      </p>
    </div>
    <SnapForm />
    <JoinedUs />
    <SnapList />
  </div>
</template>

<script>

import SnapForm from '@/components/Home/SnapForm';
import SnapList from '@/components/Home/SnapList';
import JoinedUs from '@/components/Home/JoinedUs';

export default {
  components: {
    SnapForm,
    SnapList,
    JoinedUs,
  }
};
</script>