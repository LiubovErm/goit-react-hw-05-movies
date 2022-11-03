import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from "react";
import { SharedLayout } from '../components/SharedLayout/SharedLayout'

const createAsyncComponent = (path) => lazy(() => import(path));

const Home = createAsyncComponent("../pages/Home/Home");
const Movies = createAsyncComponent("../pages/Movies/Movies");
const MoviesDetails = createAsyncComponent("../components/MoviesDetails/MoviesDetails");
const Cast = createAsyncComponent("../components/Cast/Cast");
const Reviews = createAsyncComponent("../components/Reviews/Reviews");


export const App = () => {
  return (
  <>
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:id" element={<MoviesDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  </Routes>
  </> 
  )
};