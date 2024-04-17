import { defineStore } from 'pinia'
import { getMoviesList } from '@/services'

import { type Movie } from '@/types/data'

interface State {
  currentPage: number
  totalPages: number
  isLoading: boolean
  selectedMovie: number
  moviesList: Array<Movie>
}

export const useMoviesStore = defineStore('movies', {
  state: (): State => ({
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
    selectedMovie: 3,
    moviesList: []
  }),

  getters: {
    movie: (state) => {
      return state.moviesList.find((el) => el.id === state.selectedMovie)
    }
  },

  actions: {
    async getMovies() {
      this.isLoading = true

      try {
        const queryParams = '?page=0'
        const { data } = await getMoviesList(queryParams)

        this.moviesList = data.results
        this.totalPages = data.pages
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

    async getMoreMovies() {
      this.isLoading = true

      try {
        const queryParams = `?page=${this.currentPage}`
        const { data } = await getMoviesList(queryParams)

        this.moviesList = [...this.moviesList, ...data.results]
        this.currentPage += 1
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
