<template>
  <div
    class="view-more"
    @click="onClick"
  >
    <template v-if="!isLoading">
      <img
        src="@/assets/icons/plus-icon.svg"
        alt="Plus"
      />

      <span class="text">View more</span>
    </template>

    <AppLoader
      v-else
      :animation-duration="1200"
      :size="55"
      color="#da1617"
    />
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

import AppLoader from '@/components/AppLoader.vue'

export default {
  name: 'ViewMore',

  components: {
    AppLoader
  },

  computed: {
    ...mapState(useMoviesStore, ['isLoading'])
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped>
.view-more {
  width: 140px;
  height: 285px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 7.5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.view-more:hover {
  background-color: #ffffff1a;
}

.view-more .text {
  font-size: 14px;
  margin-top: 8px;
}
</style>
