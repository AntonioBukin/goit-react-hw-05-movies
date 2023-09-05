import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilm } from 'service/themoviedbApi';
import FilmCard from 'components/FilmCard/FilmCard';
import { Loader } from 'components/Loader/Loader';

const FilmDetails = () => {
  const { id } = useParams();
  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const filmInfo = async () => {
      try {
        const filmInfo = await getFilm(id);
        setFilm(filmInfo);
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    filmInfo();
  }, [id, setFilm]);

  return (
    <>
      {loading && <Loader />}
      {film && <FilmCard film={film} />}
    </>
  );
};

export default FilmDetails;
