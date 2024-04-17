<template>
  <div class="imdb-rating">
    <span class="imdb">IMDb rating</span>

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
</template>

<script>
export default {
  name: 'IMDbRating',

  props: {
    currentRate: {
      type: Number,
      required: true
    },

    maxRate: {
      type: Number,
      required: false,
      default: 10
    }
  }
}
</script>

<style scoped>
.imdb {
  color: #e2e2e2;
  font-weight: 500;
  line-height: 22px;
}

.imdb-rate {
  display: flex;
  align-items: center;
}

.star {
  margin-right: 6.5px;
}

.current-rate {
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
}

.max-rate {
  color: #e2e2e2;
}
</style>
