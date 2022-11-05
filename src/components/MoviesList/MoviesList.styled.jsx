import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Item = styled.li`
  text-align: center;
  justify-content:center;
  position: relative;
  margin-right:${props => props.theme.space[5]}px;
  margin-bottom:${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.radii.normal};
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: ${props => props.theme.shadows.normal};
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 260px;
  padding-bottom:${props => props.theme.space[4]}px;
  font-size:  ${props => props.theme.fontSizes.s};
  font-weight:${props => props.theme.fontWeights.bold};
  color:${props => props.theme.colors.text};
`;

export const Image = styled.img`
   display: block;
   width: 100%;
   margin-bottom:${props => props.theme.space[4]}px;
`;

export const Rating = styled.span`
   display: block;
   position:absolute;
   left:10px;
   top:10px;
   width:30px;
   margin-bottom:${props => props.theme.space[4]}px;
   padding:${props => props.theme.space[2]}px;
   border-radius: ${props => props.theme.radii.normal};
   color: ${({ rating }) => (rating >= 3 && rating <= 7 ? 'text' : 'white')};

   background-color: ${({ rating }) => {
    if (rating > 7) {
      return 'green';
    }
    if (rating >= 3 && rating <= 7) {
      return 'yellow';
    }
    return 'red';
  }};
`;

export const Title = styled.p`
   display: block;
   margin-bottom:${props => props.theme.space[4]}px;
   font-size:  ${props => props.theme.fontSizes.s};
`;