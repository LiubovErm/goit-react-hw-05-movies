import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../utils/api';
import { Box } from '../Box/Box';
import { Loader } from '../Loader/Loader'
import { MovieDescription } from './MovieDescription';
import { GoBack, Message } from './MoviesDetails.styled';


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const { state: prevLocation } = useLocation();
  const linkGoBack = useRef(prevLocation ?? '/');

  useEffect(() => {
    setStatus('pending');

    getMovieDetails(movieId)
      .then(result => {
        setMovieDetails(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieId]);

  return (
    <Box>
        <GoBack to={linkGoBack.current}>{'Go back'}</GoBack>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (<Message>Щось пішло не так</Message>)}
        {status === 'resolved' && movieDetails && (<MovieDescription movieDetails={movieDetails} />)}
    </Box>
  );
};

export default MovieDetails;