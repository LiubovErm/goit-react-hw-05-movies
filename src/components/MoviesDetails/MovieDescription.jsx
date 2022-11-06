import { Box } from '../Box/Box';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DetailsLinks } from './DetailsLinks';
import { Loader } from 'components/Loader/Loader';
import noImage from '../../images/noImage.PNG';
import PropTypes from 'prop-types';
import { getLocalStorage, setLocalStorage } from '../../utils/localstorage';
import {
    MovieImage,
    Wrapper,
    Title,
    SubTitle,
    Description,
    AddBtn,
} from './MoviesDetails.styled';


export const MovieDescription = ({ movieDetails }) => {
    const { poster_path, original_title, release_date, vote_average, overview, genres } = movieDetails;
    const [isAddToLibrary, setIsAddToLibrary] = useState(false);
    
    useEffect(() => {
    const savedMovies = getLocalStorage('myfilms');
    if (savedMovies && savedMovies.some(data => data.id === movieDetails.id)) {
      setIsAddToLibrary(true);}
    }, [movieDetails.id]);

    function addToLibrary() {
    const isAdded = setLocalStorage('myfilms', movieDetails);
    setIsAddToLibrary(isAdded);
    }

    return (
    <>
        <Box display='flex' maxWidth={900} mx='auto'>
            <MovieImage src={poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}`: noImage} alt={original_title}/>
            <Wrapper>
                <Title>{`${original_title} (${release_date.substring(0, 4)})`}</Title>
                <Description>{`User score: ${Math.round(vote_average * 10)}%`}</Description>
                <Description><SubTitle>Overview:</SubTitle>{overview ? overview : 'Не має інформаціі'}</Description>
                <Description><SubTitle>Genres:</SubTitle>{genres.length > 0 ? genres.map(genre => genre.name).join(', ') : 'Не має інформаціі'}</Description>
                <AddBtn type="button" onClick={addToLibrary} className={isAddToLibrary && 'active'}>{isAddToLibrary ? 'Remove from Library' : 'Add to Library'}</AddBtn>
            </Wrapper>
        </Box>
        
        <DetailsLinks />
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </>
    )
};

MovieDescription.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
};