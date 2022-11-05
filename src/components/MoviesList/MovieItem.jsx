import { useLocation } from 'react-router-dom';
import { Item, MovieLink, Image, Title, Rating } from './MoviesList.styled';
import noImage from '../../images/noImage.PNG';
import PropTypes from 'prop-types';

export const MovieItem = ({ movie: { id, poster_path, original_title, vote_average, release_date} }) => {
  const location = useLocation();

  return (
    <Item>
      <MovieLink to={`/movies/${id}`} state={location}>
        <Image src={poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}`: noImage} alt={original_title}/>
        <Title>{`${original_title} (${release_date.substring(0, 4)})`}</Title>
        <Rating rating={vote_average.toFixed(2)}> {vote_average.toFixed(2)}</Rating>
      </MovieLink>
    </Item>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
  }).isRequired,
};