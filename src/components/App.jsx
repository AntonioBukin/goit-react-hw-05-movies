import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Films = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Rewiews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Films />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />}/>
        {/* <Route path="*">
          <Redirect to="/" />
        </Route> */}
        {/* <Route path="*" element={<Home />}/> */}
      </Route>
    </Routes>
  );
};

export default App;
