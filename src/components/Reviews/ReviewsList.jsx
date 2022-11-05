import PropTypes from 'prop-types';
import {
  ReviewList,
  ReviewItem,
  Data,
  Author,
  Review,
} from './Reviews.styled';

export const ReviewsList = ({ reviewsData }) => (
  <ReviewList>
    {reviewsData.map(({ id, created_at, author, content }) => (
    <ReviewItem key={id}>
        <Data>{new Date(created_at).toLocaleDateString('en-US')}</Data>
        <Author>{`Author: ${author}`} </Author>    
        <Review>{content}</Review>
    </ReviewItem>
    ))}
  </ReviewList>
);

ReviewsList.propTypes = {
  reviewsData: PropTypes.array.isRequired,
};