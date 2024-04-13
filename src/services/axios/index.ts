import Axios from 'axios'

const instance = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  responseType: 'json'
})

export { instance as axios }
