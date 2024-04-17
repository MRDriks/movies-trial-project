<template>
  <div class="app-bar">
    <h1 class="title">Popular <span class="mark">serials</span></h1>
  </div>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<style scoped>
.app-bar {
  padding: 13px 0 12px 24px;
}

.title {
  margin: 0;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
}

.mark {
  color: #da1617;
}
</style>
