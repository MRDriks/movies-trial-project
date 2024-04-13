import { axios } from '../axios'

export const getMoviesList = () => {
  return axios.get('/movies')
}
