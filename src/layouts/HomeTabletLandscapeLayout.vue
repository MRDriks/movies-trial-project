<template>
  <div class="home-tablet-landscape-layout">
    <div class="movies-list">
      <FilmCard
        v-for="movie in moviesList"
        :key="movie.id"
        :cardId="movie.id"
        :poster="movie.poster"
        :currentRate="movie.imdb_rating"
        :maxRate="10"
        :title="movie.title"
        class="movie"
        @onClick="clickHandler(movie.id)"
      />
    </div>

    <div class="movies-details">
      <BackgroundImage
        :source="movie.bg_picture"
        transitionName="fade"
        class="background-img"
      />

      <div class="wrapper">
        <div class="row py-0">
          <MainInformation
            :title="movie.title"
            :releaseYear="movie.release_year"
            class="main-information my-20"
          />

          <TrailerButton class="my-20" />
        </div>

        <div class="row flex-start">
          <div class="left-side">
            <DescriptionText :text="movie.description" />

            <AdditionalInformation
              :genres="movie.genres"
              :mpaRating="movie.mpa_rating"
              :duration="movie.duration"
              class="additional-info"
            />

            <PartisipantsList
              :directors="movie.directors"
              :writers="movie.writers"
              :stars="movie.stars"
              class="partisipants-list"
            />
          </div>

          <div class="right-side">
            <IMDbRating
              :currentRate="movie.imdb_rating"
              :maxRate="10"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

import BackgroundImage from '@/components/BackgroundImage.vue'
import FilmCard from '@/components/FilmCard.vue'
import MainInformation from '@/components/MainInformation.vue'
import TrailerButton from '@/components/TrailerButton.vue'
import IMDbRating from '@/components/IMDbRating.vue'
import DescriptionText from '@/components/DescriptionText.vue'
import AdditionalInformation from '@/components/AdditionalInformation.vue'
import PartisipantsList from '@/components/PartisipantsList.vue'

export default {
  name: 'HomeTabletLandscapeLayout',

  components: {
    FilmCard,
    BackgroundImage,
    MainInformation,
    TrailerButton,
    IMDbRating,
    DescriptionText,
    AdditionalInformation,
    PartisipantsList
  },

  computed: {
    ...mapState(useMoviesStore, ['moviesList', 'movie']),

    ...mapWritableState(useMoviesStore, ['selectedMovie'])
  },

  methods: {
    clickHandler(movieId) {
      this.selectedMovie = movieId
      this.scrollToTop()
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.home-tablet-landscape-layout {
  background-color: #161616;
  min-height: 100vh;
  display: flex;
  padding: 16px 0 0 24px;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  width: 470px;
}

.movies-details {
  width: 100%;
}

.movie {
  margin: 0 12px 24px 0;
}

.background-img {
  position: relative;
  height: 382px;
}

.background-img::before {
  height: 101%;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 24px;
}

.flex-start {
  align-items: flex-start;
}

.left-side {
  max-width: 517px;
  margin-right: 25px;
}

.right-side {
  max-width: 100px;
}

.main-information {
  margin-right: 25px;
}

.additional-info {
  margin: 24px 0;
}

.partisipants-list {
  max-width: 400px;
  margin-bottom: 24px;
}

.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.my-20 {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
