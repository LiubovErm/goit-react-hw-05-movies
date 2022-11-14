import PropTypes from 'prop-types';
import { TrailersList, TrailersItem } from './Trailer.styled';
import Iframe from 'react-iframe';

export const TrailerList = ({ trailersData }) => (
  <TrailersList>
        {trailersData.map(({id, key}) => (
          <TrailersItem key={id}>
            <Iframe
              url={`https://www.youtube.com/embed/${key}`}
              width="350px"
              height="250px"
            />
          </TrailersItem>
        ))}
  </TrailersList>
);

TrailerList.propTypes = {
   trailersData: PropTypes.array.isRequired,
};


