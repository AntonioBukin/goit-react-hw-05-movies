import { useState, useEffect } from 'react';
import { getTrending } from 'service/themoviedbApi';
import MoviesList from '../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMoviesList = async () => {
      try {
        const data = await getTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    trendingMoviesList();
  }, []);

  return (
    <main>
      <h1>Trending film to you:</h1>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
