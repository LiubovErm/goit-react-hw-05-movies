import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../utils/api';
import { ReviewsList } from './ReviewsList';
import { Loader } from '../Loader/Loader';
import { Message } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(null); 
  const { movieId } = useParams();

  useEffect(() => {
    setStatus('pending');
      
    getReviews(movieId)
      .then(result => {
        setReviews(result);
        setStatus('resolved');
      })
      .catch(() => setStatus('rejected'));
  }, [movieId]);

  if (status === 'pending') return <Loader />;
  if (status === 'rejected') return <Message>Щось пішло не так</Message>;
  if (status === 'resolved' && reviews.length === 0) return <Message>We don`t have any reviews for this movie</Message>;
  if (status === 'resolved') return <ReviewsList reviewsData={reviews} />;
};

export default Reviews;