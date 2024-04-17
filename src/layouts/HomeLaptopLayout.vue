<template>
  <div class="home-laptop-layout">
    <BackgroundImage
      :source="movie.bg_picture"
      transitionName="fade"
    />

    <div class="details-block">
      <div class="movie-information">
        <IMDbRating
          :currentRate="movie.imdb_rating"
          :maxRate="10"
        />

        <MainInformation
          :title="movie.title"
          :releaseYear="movie.release_year"
          class="main-information"
        />

        <DescriptionText
          :text="movie.description"
          class="description"
        />

        <AdditionalInformation
          :genres="movie.genres"
          :mpaRating="movie.mpa_rating"
          :duration="movie.duration"
          class="additional-info"
        />

        <TrailerButton class="trailer-button" />
      </div>

      <PartisipantsList
        :directors="movie.directors"
        :writers="movie.writers"
        :stars="movie.stars"
        class="partisipants-list"
      />
    </div>

    <div class="slider-block">
      <div class="slider-button-prev">
        <img
          src="@/assets/icons/arrow-left-icon.svg"
          alt="Arrow left"
        />
      </div>

      <div class="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(movie, index) in moviesList"
            :key="movie.id"
            :data-movie-id="movie.id"
            :data-slide-index="index"
            class="swiper-slide"
          >
            <FilmCard
              :cardId="movie.id"
              :poster="movie.poster"
              :currentRate="movie.imdb_rating"
              :maxRate="10"
              :title="movie.title"
            />
          </div>

          <div>
            <ViewMore
              v-if="currentPage !== totalPages"
              class="view-more"
              @onClick="viewMoreHandler"
            />
          </div>
        </div>
      </div>

      <div class="slider-button-next">
        <img
          src="@/assets/icons/arrow-right-icon.svg"
          alt="Arrow right"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import { mapState, mapWritableState, mapActions } from 'pinia'
import { useMoviesStore } from '@/stores/movies'

import BackgroundImage from '@/components/BackgroundImage.vue'
import TrailerButton from '@/components/TrailerButton.vue'
import PartisipantsList from '@/components/PartisipantsList.vue'
import IMDbRating from '@/components/IMDbRating.vue'
import DescriptionText from '@/components/DescriptionText.vue'
import AdditionalInformation from '@/components/AdditionalInformation.vue'
import MainInformation from '@/components/MainInformation.vue'
import FilmCard from '@/components/FilmCard.vue'
import ViewMore from '@/components/ViewMore.vue'

export default {
  name: 'HomeLaptopLayout',

  components: {
    BackgroundImage,
    TrailerButton,
    PartisipantsList,
    IMDbRating,
    DescriptionText,
    AdditionalInformation,
    MainInformation,
    FilmCard,
    ViewMore
  },

  data() {
    return {
      swiper: null
    }
  },

  computed: {
    ...mapState(useMoviesStore, ['moviesList', 'currentPage', 'totalPages', 'movie']),

    ...mapWritableState(useMoviesStore, ['selectedMovie'])
  },

  mounted() {
    this.initSwiper()
    this.syncCurrentSlide()
  },

  activated() {
    this.syncCurrentSlide()
  },

  methods: {
    ...mapActions(useMoviesStore, ['getMovies', 'getMoreMovies']),

    viewMoreHandler() {
      this.getMoreMovies().then(() => {
        this.$nextTick(() => {
          this.swiper.update()
        })
      })
    },

    initSwiper() {
      const vm = this

      this.swiper = new Swiper('.swiper', {
        modules: [Navigation],
        slidesPerView: 5,
        spaceBetween: 2,
        slideToClickedSlide: true,
        centeredSlides: true,

        breakpoints: {
          1400: {
            slidesPerView: 7
          }
        },

        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev'
        },

        on: {
          realIndexChange: function () {
            vm.selectedMovie = +this.slides[this.activeIndex].getAttribute('data-movie-id')
          }
        }
      })
    },

    syncCurrentSlide() {
      const slideIndex = document
        .querySelector(`[data-movie-id="${this.selectedMovie}"]`)
        .getAttribute('data-slide-index')

      this.swiper.slideTo(slideIndex)
    }
  }
}
</script>

<style scoped>
.home-laptop-layout {
  min-height: 100vh;
  position: relative;
}

.details-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  margin: 0 64px;
  padding-top: 144px;
}

.slider-block {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  margin: 0 64px;
  padding-bottom: 64px;
}

.movie-information {
  max-width: 560px;
}

.main-information {
  margin-top: 20px;
}

.description {
  margin: 20px 0;
}

.trailer-button {
  margin-top: 20px;
}

.partisipants-list {
  max-width: 320px;
}

.slider-button-prev,
.slider-button-next {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff1a;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.3s;
  user-select: none;
}

.slider-button-prev:hover,
.slider-button-next:hover {
  background-color: #da1617;
}

.slider-button-prev {
  margin-right: 7.5px;
}

.slider-button-next {
  margin-left: 7.5px;
}

.swiper {
  max-width: 90%;
  padding-top: 32px;
}

.swiper-slide {
  width: 140px;
  height: 285px;
}

@media (min-height: 982px) {
  .details-block {
    padding-top: 294px;
  }
}
</style>
