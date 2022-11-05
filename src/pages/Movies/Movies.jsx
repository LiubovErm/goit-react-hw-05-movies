import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../utils/api';
import { Box } from "../../components/Box/Box";
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import { Message } from './Movies.styled';


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState(null);
 

  useEffect(() => {
    const searchMovie = searchParams.get('query');
    if (!searchMovie) {
        return setStatus('idle');
    }
    setStatus('pending');

    getMovies(searchMovie)
      .then(result => {
        setMovies(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [searchParams]);

     const onFormSubmit = value => {
       setSearchParams(value ? { query: value } : {});
     };

  return (
    <Box>
        <SearchForm onSubmit={onFormSubmit}/>
        {status === 'idle' && <Message>{`Введіть назву фільма`}</Message>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (<Message>Щось пішло не так</Message>)}
        {status === 'resolved' && movies.length === 0 && (<Message>{`Не знайдено, спробуй ще`}</Message>)}
        {status === 'resolved' && <MoviesList moviesData={movies} />}
    </Box>
  );
};

export default Movies;