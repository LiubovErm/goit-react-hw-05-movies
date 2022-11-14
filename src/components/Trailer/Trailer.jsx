import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrailer } from '../../utils/api';
import { TrailerList } from './TrailerList';
import { Loader } from '../Loader/Loader';
import { Message } from './Trailer.styled';

const Trailers = () => {
  const [trailers, setTrailers] = useState(null);
  const [status, setStatus] = useState(null); 
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
      
    getTrailer(movieId)
      .then(result => {
        setTrailers(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieId]);

  if (status === 'pending') return <Loader />;
  if (status === 'rejected') return <Message>Щось пішло не так</Message>;
  if (status === 'resolved' && trailers.length === 0) return <Message>We don`t have any trailers for this movie</Message>;
  if (status === 'resolved') return <TrailerList trailersData={trailers} />;
};

export default Trailers;