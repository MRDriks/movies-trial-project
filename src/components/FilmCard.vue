<template>
  <div class="film-card">
    <div
      class="poster-wrapper"
      @click="onClick"
    >
      <img
        :src="poster"
        class="poster"
        alt="Poster"
      />
    </div>

    <div class="poster-rating">
      <div class="imdb-rate">
        <img
          src="@/assets/images/rate.svg"
          class="star"
          alt="Star"
        />

        <p>
          <span class="current-rate">{{ currentRate }}</span>
          <span class="max-rate"> /{{ maxRate }}</span>
        </p>
      </div>
    </div>

    <p class="poster-title">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',

  props: {
    cardId: {
      type: Number,
      required: true
    },

    poster: {
      type: String,
      required: true
    },

    currentRate: {
      type: Number,
      required: true
    },

    maxRate: {
      type: Number,
      required: false,
      default: 10
    },

    title: {
      type: String,
      required: true
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick', this.cardId)
    }
  }
}
</script>

<style scoped>
.film-card {
  width: 140px;
  height: 285px;
  transition: transform 0.5s ease;
  cursor: pointer;
}

.poster-wrapper {
  position: relative;
  width: 140px;
  height: 212px;
}

.poster-wrapper::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: #16161633;
  transition: all 0.3s ease;
}

.poster-wrapper:hover::after {
  background: transparent;
}

.poster {
  width: 100%;
  height: 100%;
}

.imdb-rate {
  display: flex;
  align-items: center;
}

.poster-rating {
  margin: 4px 0 4px;
}

.poster-rating .star {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.poster-rating .current-rate {
  font-size: 14px;
}

.poster-rating .max-rate {
  font-size: 12px;
}

.poster-title {
  font-weight: 500;
  font-size: 16px;
}
</style>
