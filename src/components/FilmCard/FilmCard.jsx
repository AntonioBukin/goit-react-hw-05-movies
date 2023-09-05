import { useLocation, Link, Outlet, NavLink } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { GlowingBtn } from 'components/Layout/Layout.styled';
import { StyledSection } from './FilmCard.styled';
import { StyledBtn } from './FilmCard.styled';

const FilmCard = ({ film }) => {
  const { poster_path, title, vote_average, overview, genres } = film;
  const ImageUrl = '//image.tmdb.org/t/p/w500';
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/film');

  return (
    <div>
      <Link to={backLinkLocationRef.current}>
        <GlowingBtn>Go back</GlowingBtn>
      </Link>
      <StyledSection>
        <img src={ImageUrl + poster_path} alt={title} width={300} />
        <div>
          <h2>{title}</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(',')}</p>
        </div>
      </StyledSection>
      <section>
        <h3>Additional information about film:</h3>
        <ul>
          <li>
            <NavLink to="cast">
              <StyledBtn>Cast</StyledBtn>
            </NavLink>
          </li>
          <li>
            <NavLink to="review">
              <StyledBtn>Review</StyledBtn>
            </NavLink>
          </li>
        </ul>
      </section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default FilmCard;
