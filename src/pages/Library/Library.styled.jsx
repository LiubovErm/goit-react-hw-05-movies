import styled from 'styled-components';

export const Message = styled.p`
  text-align: center;
  font-size:  ${props => props.theme.fontSizes.l};
  font-weight:${props => props.theme.fontWeights.bold};
`;