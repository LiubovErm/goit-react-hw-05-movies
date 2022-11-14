import axios from 'axios';

const KEY = '324a07cbf11f3aed45ef70fac807eb23';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: KEY,
};

export async function getPopularMovies(page) {
  const response = await axios.get('/trending/movie/week', {
    params: { ...axios.defaults.params, page },
  })
  return response.data;
}

export async function getMovies(query,page) {
  const response = await axios.get(`/search/movie?&query=${query}`,{
    params: { ...axios.defaults.params, query: query, page},
  });
  return response.data;
}

export async function getMovieDetails(movieId) {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
}

export async function getCast(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
}

export async function getReviews(movieId) {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
}

export async function getTrailer(movieId) {
    const { data }  = await axios.get(`/movie/${movieId}/videos`);
    return data.results;
}