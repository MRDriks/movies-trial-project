<template>
  <div class="partisipants-list">
    <p class="point">
      <span class="category">Director: </span>
      <span class="person-list">
        {{ formatPersons(directors) }}
      </span>
    </p>

    <p class="point">
      <span class="category">Writers: </span>
      <span class="person-list">
        {{ formatPersons(writers) }}
      </span>
    </p>

    <p class="point">
      <span class="category">Stars: </span>
      <span class="person-list">
        {{ formatPersons(stars) }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PartisipantsList',

  props: {
    directors: {
      type: Array,
      required: true
    },

    writers: {
      type: Array,
      required: true
    },

    stars: {
      type: Array,
      required: true
    }
  },

  methods: {
    formatPersons(persons) {
      const result = persons
        .reduce((template, person) => {
          return template + `${person.first_name} ${person.last_name}, `
        }, '')
        .slice(0, -2)

      return result
    }
  }
}
</script>

<style scoped>
.point {
  margin-bottom: 8px;
}

.category {
  color: rgb(214, 214, 214);
}

.person-list {
  font-weight: 500;
}
</style>
