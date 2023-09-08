import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'service/themoviedbApi';

import { toastInfoMessage } from '../service/toastInfo';

import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const queryString = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMoviesList = async () => {
      try {
        const data = await searchMovies(queryString);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    searchMoviesList();
  }, [queryString]);

  const updateQueryString = inputValue => {
    if (queryString === inputValue) {
      return toastInfoMessage('You made the same request');
    }
    const nextQueryString = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextQueryString);
  };

  return (
    <div>
      <Search inputValue={updateQueryString} />
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;

