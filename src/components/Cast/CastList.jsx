import PropTypes from 'prop-types';
import {
  ActorsList,
  CastItem,
  CastImage,
  Name,
  Character,
} from './Cast.styled';
import noImage from '../../images/noImage.PNG';

export const CastList = ({ data }) => (
  <ActorsList>
    {data.map(({ cast_id, profile_path, original_name, character }) => (
      <CastItem key={cast_id}>
        <CastImage src={profile_path? `https://image.tmdb.org/t/p/w342${profile_path}`: noImage} alt={original_name}/>
        <Name>{original_name}</Name>
        <Character>{`Character: ${character}`}</Character>
      </CastItem>
    ))}
  </ActorsList>
);

CastList.propTypes = {
  data: PropTypes.array.isRequired,
};