<template>
  <p class="description-text">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'DescriptionText',

  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.description-text {
  line-height: 22px;
}
</style>
