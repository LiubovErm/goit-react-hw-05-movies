import styled from 'styled-components';

export const Message = styled.p`
  text-align: center;
  font-size:  ${props => props.theme.fontSizes.l};
  font-weight:${props => props.theme.fontWeights.bold};
`;

export const TrailersList = styled.ul`
  list-style: none;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const TrailersItem = styled.li`
  margin: ${props => props.theme.space[3]}px;
`;

