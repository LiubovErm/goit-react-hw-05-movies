import axios from 'axios';

const KEY = '324a07cbf11f3aed45ef70fac807eb23';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: KEY,
  page: 1,
  per_page: 10,
};

export async function getPopularMovies() {
  const { data } = await axios.get('/trending/movie/week');
  return data.results;
}

export async function getMovies(query) {
  const { data } = await axios.get(`/search/movie?&query=${query}`);
  return data.results;
}