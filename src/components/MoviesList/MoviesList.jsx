import { MovieItem } from './MovieItem';
import { MoviesListStyle } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ moviesData }) => {
    return (
        <MoviesListStyle>
            {moviesData.map(movie => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </MoviesListStyle>
    );
};

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};