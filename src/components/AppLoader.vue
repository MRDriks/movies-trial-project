<template>
  <div class="app-loader">
    <OrbitSpinner
      :animation-duration="1200"
      :size="55"
      color="#da1617"
    />
  </div>
</template>

<script>
import { OrbitSpinner } from 'epic-spinners'

export default {
  name: 'AppLoader',

  components: {
    OrbitSpinner
  }
}
</script>

<style scoped>
.app-loader {
  display: flex;
  justify-content: center;
}
</style>
