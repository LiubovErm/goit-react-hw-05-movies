import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../utils/api';
import { CastList } from './CastList';
import { Loader } from '../Loader/Loader';
import { Message } from './Cast.styled';


const Cast = () => {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
      
    getCast(movieId)
      .then(result => {
        setCast(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieId]);

  if (status === 'pending') return <Loader />;
  if (status === 'rejected') return <Message>Щось пішло не так</Message>;
  if (status === 'resolved' && cast.length === 0) return <Message>Немає інформаціі</Message>;
  if (status === 'resolved') return <CastList data={cast} />;
};

export default Cast;