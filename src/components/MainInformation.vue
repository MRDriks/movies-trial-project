<template>
  <div class="main-information">
    <span class="title">{{ title }}</span>
    <span class="release-year">({{ releaseYear }})</span>
  </div>
</template>

<script>
export default {
  name: 'MainInformation',

  props: {
    title: {
      type: String,
      required: true
    },

    releaseYear: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.title {
  font-family: 'KronaOne';
  font-size: 40px;
}

.release-year {
  font-weight: 700;
  font-size: 18px;
  margin-left: 8px;
}

@media (max-width: 1152px) {
  .title {
    font-size: 32px;
  }
}
</style>
