<template>
  <div>
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

import SnapForm from './Home/SnapForm';
import SnapList from './Home/SnapList';
import JoinedUs from './Home/JoinedUs';

export default {
  components: {
    SnapForm,
    SnapList,
    JoinedUs,
  }
};
</script>