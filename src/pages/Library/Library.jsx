import { useState, useEffect } from 'react';
import { Box } from "../../components/Box/Box";
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Message } from './Library.styled';

const Library = () => {
  const [movies, setMovies] = useState(null);
    
  useEffect(() => {
    const savedMovie = localStorage.getItem('myfilms') ?? '[]';
    const parseMovie = JSON.parse(savedMovie);
    setMovies(parseMovie);
  }, []);

  return (
    <Box p={20}>
      {movies && movies.length !== 0 ? (<MoviesList moviesData={movies} />
      ) : (
      <Message>Ще немає фільмів у бібліотеці</Message>)}
    </Box>
  );
};

export default Library;