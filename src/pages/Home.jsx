import { useState, useEffect } from 'react';
import { getTrending } from 'service/themoviedbApi';
import FilmGallery from '../components/FilmGallery/FilmGallery';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const filmTrading = async () => {
      try {
        const film = await getTrending();
        setFilms(film);
      } catch (error) {
        console.log('eror');
      } finally {
      }
    };

    filmTrading();
  }, []);

  return (
    <ul>
      {films.map(film => (
        <FilmGallery key={film.id} film={film} />
      ))}
    </ul>
  );
};

export default Home;
