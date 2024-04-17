import { axios } from '../axios'

export const getMoviesList = (queryParams = '') => {
  return axios.get(`/movies/${queryParams}`)
}
