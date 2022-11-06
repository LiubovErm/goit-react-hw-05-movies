import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPopularMovies } from '../../utils/api';
import { Box } from "../../components/Box/Box";
import { Title, ErrorMessage } from './Home.styled';
import { MoviesList } from '../../components/MoviesList/MoviesList'
import PaginatedItems from '../../components/Pagination/Pagination';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [status, setStatus] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParams = Number(searchParams.get('page') ?? 1);

  useEffect(() => {
    getPopularMovies(pageParams)
      .then(result => {
        setPopularMovies(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [pageParams]);

  return (
    <Box>
        <Title>Popular Movies</Title>
        {status === 'rejected' && (<ErrorMessage>Щось пішло не так</ErrorMessage>)}
        {status === 'resolved' && <MoviesList moviesData={popularMovies.results} />}
        {status === 'resolved' && (<PaginatedItems setPage={setSearchParams} totalPages={popularMovies.total_pages} currentPage={pageParams - 1}/>)}
    </Box>
  );
};

export default Home;