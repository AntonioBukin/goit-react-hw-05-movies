import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Films = lazy(() => import('pages/Films'));
const FilmDetails = lazy(() => import('./FilmDetails/FilmDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Rewiews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="films" element={<Films />} />
        <Route path="films/:id" element={<FilmDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<div>ErrorNotFound</div>}></Route>
    </Routes>
  );
};
