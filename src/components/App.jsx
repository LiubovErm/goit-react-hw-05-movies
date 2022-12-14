import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from "react";
import { SharedLayout } from '../components/SharedLayout/SharedLayout'

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('../components/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() =>import('../components/Reviews/Reviews'));
const Trailers = lazy(() =>import('../components/Trailer/Trailer'));
const Library = lazy(() => import('../pages/Library/Library'));

export const App = () => {
  return (
  <>
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MoviesDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="trailers" element={<Trailers />} />
      </Route>
      <Route path="library" element={<Library />} /> 
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
  </> 
  )
};