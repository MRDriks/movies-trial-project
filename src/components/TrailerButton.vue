<template>
  <button class="trailer-button">
    <img
      src="@/assets/icons/play-icon.svg"
      class="play-icon"
      alt="Play"
    />

    <span>Watch trailer</span>
  </button>
</template>

<script>
export default {
  name: 'TrailerButton'
}
</script>

<style scoped>
.trailer-button {
  width: 160px;
  height: 42px;
  background-color: #da1617;
  border-radius: 2px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  /* margin-top: 20px; */
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
}

.trailer-button:hover {
  background-color: red;
}

.play-icon {
  margin-right: 14px;
}

@media (max-width: 1152px) {
  .trailer-button {
    width: 180px;
    height: 48px;
  }
}
</style>
