import styled from 'styled-components';

export const Message = styled.p`
  text-align: center;
  font-size:  ${props => props.theme.fontSizes.l};
  font-weight:${props => props.theme.fontWeights.bold};
`;

export const ReviewList = styled.ul`
  list-style: none;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ReviewItem = styled.li`
  padding: ${props => props.theme.space[3]}px;
  font-size:  ${props => props.theme.fontSizes.m};
  border: 1px solid black;
  margin-bottom:${props => props.theme.space[3]}px;
`;

export const Author = styled.p`
  margin-bottom: ${props => props.theme.space[4]}px;
  font-weight:${props => props.theme.fontWeights.bold};
`;

export const Review = styled.p`
  font-size:  ${props => props.theme.fontSizes.s};
`;

export const Data = styled.p`
  font-weight:${props => props.theme.fontWeights.bold};
`;