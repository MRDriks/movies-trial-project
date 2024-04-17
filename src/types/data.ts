export interface Movie {
  id: number
  title: string
  description: string
  release_year: number
  mpa_rating: string
  imdb_rating: number
  duration: number
  poster: string
  bg_picture: string
  genres: Array<Genre>
  directors: Array<Person>
  writers: Array<Person>
  stars: Array<Person>
}

interface Genre {
  id: number
  title: string
}

interface Person {
  id: number
  first_name: string
  last_name: string
}
