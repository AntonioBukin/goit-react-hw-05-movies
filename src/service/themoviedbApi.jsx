import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '391a97ba083a1d8591f2f4cbb9f29b09',
  },
});

async function fetchMovies(url = '', config = {}) {
  const response = await instance.get(url, config);
  return response.data;
}

export async function getTrending() {
  return fetchMovies(`trending/movie/day`);
}

export async function searchMovies(query) {
  return fetchMovies(`search/movie?query=${query}`);
}

export async function getMovieDetails(movieId) {
  return fetchMovies(`movie/${movieId}`);
}

export async function getMovieCredits(movieId) {
    return fetchMovies(`movie/${movieId}/credits`);
  }

  export async function getMovieReviews(movieId) {
    return fetchMovies(`movie/${movieId}/reviews`);
  }
