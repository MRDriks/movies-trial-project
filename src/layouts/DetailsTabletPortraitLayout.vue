<template>
  <div class="details-tablet-portrait-layout">
    <BackgroundImage
      :source="movie.bg_picture"
      class="background-img"
    />

    <router-link
      :to="{ name: 'home' }"
      class="back-link"
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
</template>

<script>
import { mapState } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

import BackgroundImage from '@/components/BackgroundImage.vue'
import MainInformation from '@/components/MainInformation.vue'
import TrailerButton from '@/components/TrailerButton.vue'
import IMDbRating from '@/components/IMDbRating.vue'
import DescriptionText from '@/components/DescriptionText.vue'
import AdditionalInformation from '@/components/AdditionalInformation.vue'
import PartisipantsList from '@/components/PartisipantsList.vue'

export default {
  name: 'DetailsTabletPortraitLayout',

  components: {
    BackgroundImage,
    MainInformation,
    TrailerButton,
    IMDbRating,
    DescriptionText,
    AdditionalInformation,
    PartisipantsList
  },

  computed: {
    ...mapState(useMoviesStore, ['moviesList']),

    movie() {
      return this.moviesList.find((el) => el.id === +this.$route.params['movieId'])
    }
  }
}
</script>

<style scoped>
.details-tablet-portrait-layout {
  background-color: #161616;
  min-height: 100vh;
}

.background-img {
  position: relative;
  height: 875px;
}

.background-img::before {
  height: 101%;
}

.back-link {
  position: fixed;
  top: 40px;
  left: 24px;
  width: 32px;
  height: 32px;
  background-image: url('@/assets/icons/arrow-back-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
}

.wrapper {
  transform: translateY(-88px);
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
