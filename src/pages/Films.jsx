import { useState, useEffect } from 'react';
import { getSearch } from 'service/themoviedbApi';
import Notiflix from 'notiflix';
import { useSearchParams } from 'react-router-dom';
import FilmGallery from '../components/FilmGallery/FilmGallery';
import { Loader } from '../components/Loader/Loader';

import { GlowingBtn } from '../components/Layout/Layout.styled';
import { Text } from '../components/Cast/Cast.styled';

const Films = () => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const searchTitle = SearchParams.get('query');
  const [noFilms, setNoFilms] = useState(false);

  useEffect(() => {
    const filmTrading = async () => {
      if (!searchTitle) {
        return;
      }
      setLoading(true);
      try {
        const film = await getSearch(searchTitle);
        setFilms(film);
        if (film.length === 0) {
          setNoFilms(true);
        } else {
          setNoFilms(false);
        }
      } catch (error) {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };
    filmTrading();
  }, [searchTitle]);

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      Notiflix.Notify.failure(`Please enter a name`);
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const onSubmit = name => {
    if (searchTitle === name) {
      Notiflix.Notify.info(`You request "${name}" has alredy been!`);
      return;
    }
    setQuery(name);
    setSearchParams({ query: query });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <GlowingBtn type="submit">
          <span>Search</span>
        </GlowingBtn>

        <input
          type="text"
          placeholder="Looking for foto and images"
          value={query}
          onChange={handleNameChange}
        />
      </form>
      {loading && <Loader />}
      {noFilms && <Text>Film is not found</Text>}
      {films.length > 0 && (
        <ul>
          {films.map(film => (
            <FilmGallery key={film.id} film={film} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Films;
