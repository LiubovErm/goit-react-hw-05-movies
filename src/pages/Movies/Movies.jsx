import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../utils/api';
import { Box } from "../../components/Box/Box";
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import { Message } from './Movies.styled';
import PaginatedItems from '../../components/Pagination/Pagination';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState(null);
  const searchMovie = searchParams.get('query')?? '';
  const pageParams = Number(searchParams.get('page') ?? 1);
  
  useEffect(() => {
  
    if (!searchMovie) {
        return setStatus('idle');
    }
    setStatus('pending');

    getMovies(searchMovie,pageParams)
      .then(result => {
        if (result.results.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [searchMovie,pageParams]);

 
     const onFormSubmit = value => {
      setSearchParams(value ? { query: value } : {});
    };

  return (
    <Box>
        <SearchForm onSubmit={onFormSubmit} value={searchMovie} />
        {status === 'idle' && <Message>{`Введіть назву фільма`}</Message>}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (<Message>Щось пішло не так</Message>)}
        {status === 'resolved' && movies.length === 0 && (<Message>{`Не знайдено, спробуй ще`}</Message>)}
        {status === 'resolved' && <MoviesList moviesData={movies.results} />}
        {status === 'resolved' && (<PaginatedItems setPage={page => setSearchParams({ query: searchMovie, ...page })} totalPages={movies.total_pages} currentPage={pageParams - 1}/>)}
    </Box>
  );
};

export default Movies;