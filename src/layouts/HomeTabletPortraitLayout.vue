<template>
  <div class="home-tablet-portrait-layout">
    <AppBar />

    <AppLoader v-if="isLoading" />

    <div
      v-else
      class="movies-list"
    >
      <FilmCard
        v-for="movie in moviesList"
        :key="movie.id"
        :cardId="movie.id"
        :poster="movie.poster"
        :currentRate="movie.imdb_rating"
        :maxRate="10"
        :title="movie.title"
        class="movie"
        @onClick="clickHandler"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

import AppBar from '@/components/AppBar.vue'
import FilmCard from '@/components/FilmCard.vue'
import AppLoader from '@/components/AppLoader.vue'

export default {
  name: 'HomeTabletPortraitLayout',

  components: {
    AppBar,
    FilmCard,
    AppLoader
  },

  computed: {
    ...mapState(useMoviesStore, ['moviesList', 'isLoading'])
  },

  methods: {
    clickHandler(movieId) {
      this.$router.push({ name: 'details', params: { movieId } })
    }
  }
}
</script>

<style scoped>
.home-tablet-portrait-layout {
  background-color: #161616;
  min-height: 100vh;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  padding: 16px 0 0 24px;
}

.movie {
  margin: 0 16px 24px 0;
}
</style>
