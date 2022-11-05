import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../utils/api';
import { Box } from "../../components/Box/Box";
import { Title, ErrorMessage } from './Home.styled';
import { MoviesList } from '../../components/MoviesList/MoviesList'

const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getPopularMovies()
      .then(result => {
        setPopularMovies(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, []);

  return (
    <Box>
        <Title>Popular Movies</Title>
        {status === 'rejected' && (<ErrorMessage>Щось пішло не так</ErrorMessage>)}
        {status === 'resolved' && <MoviesList moviesData={popularMovies} />}
    </Box>
  );
};

export default Home;