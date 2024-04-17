<template>
  <div class="additional-information">
    <span class="genres">
      {{ formatGenres(genres) }}
    </span>

    <span class="mpa-rating">
      {{ mpaRating }}
    </span>

    <span class="duration">
      {{ formatTime(duration) }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AdditionalInformation',

  props: {
    genres: {
      type: Array,
      required: true
    },

    mpaRating: {
      type: String,
      required: true
    },

    duration: {
      type: Number,
      required: true
    }
  },

  methods: {
    formatGenres(genres) {
      const result = genres
        .reduce((template, genre) => {
          return template + genre.title + ', '
        }, '')
        .slice(0, -2)

      return result
    },

    formatTime(minutes) {
      const hours = Math.floor(minutes / 60)
      const remainingMinutes = minutes % 60

      let formattedTime = ''

      if (hours > 0) {
        formattedTime += hours + 'h '
      }

      if (remainingMinutes > 0) {
        formattedTime += remainingMinutes + 'm'
      }

      return formattedTime.trim()
    }
  }
}
</script>

<style scoped>
.additional-information {
  display: flex;
  font-weight: 500;
  line-height: 22px;
}

.genres {
  padding-right: 20px;
}

.mpa-rating {
  padding: 0 20px;
  border-left: 1px solid #a6a6a6;
  border-right: 1px solid #a6a6a6;
}

.duration {
  padding-left: 20px;
}
</style>
