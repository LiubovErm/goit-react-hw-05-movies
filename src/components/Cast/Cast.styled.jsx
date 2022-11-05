import styled from 'styled-components';

export const Message = styled.p`
  text-align: center;
  font-size:  ${props => props.theme.fontSizes.l};
  font-weight:${props => props.theme.fontWeights.bold};
`;

export const ActorsList = styled.ul`
  list-style: none;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap
`;

export const CastItem = styled.li`
  text-align: center;
  margin: ${props => props.theme.space[3]}px;
  width: 210px;
`;

export const CastImage = styled.img`
  display: block;
  width: 100%;
  height: 320px;
`;

export const Name = styled.p`
  margin: ${props => props.theme.space[1]}px;
`;

export const Character = styled.p`
  margin: ${props => props.theme.space[1]}px;
`;
