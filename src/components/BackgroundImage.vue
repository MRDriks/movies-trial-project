<template>
  <Transition :name="transitionName">
    <div
      class="bg-image"
      :style="{ 'background-image': `url(${source})` }"
      :key="source"
    />
  </Transition>
</template>

<script>
export default {
  name: 'BackgroundImage',

  props: {
    source: {
      type: String,
      required: true
    },

    transitionName: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style scoped>
.bg-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-image::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(22, 22, 22, 0) 0%,
    rgba(22, 22, 22, 0.89) 67.19%,
    #161616 100%
  );
}
</style>
