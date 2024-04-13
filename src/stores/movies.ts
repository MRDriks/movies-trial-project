import { defineStore } from 'pinia'
import { getMoviesList } from '@/services'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    moviesList: []
  }),

  getters: {},

  actions: {
    async getMoviesList() {
      try {
        const data = await getMoviesList()

        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
