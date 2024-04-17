<template>
  <div class="app">
    <Transition mode="out-in">
      <AppLoader
        v-if="isLoading"
        class="preloader"
      />

      <div v-else>
        <router-view />
      </div>
    </Transition>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

import AppLoader from '@/components/AppLoader.vue'

export default {
  name: 'App',

  components: {
    AppLoader
  },

  data() {
    return {
      isLoading: false
    }
  },

  async created() {
    this.isLoading = true
    await this.getMovies()
    this.isLoading = false
  },

  methods: {
    ...mapActions(useMoviesStore, ['getMovies'])
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background-color: #161616;
}

.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
