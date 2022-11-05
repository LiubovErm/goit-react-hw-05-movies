import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size:  ${props => props.theme.fontSizes.l};
`;

export const ErrorMessage = styled.p`
  text-align: center;
  font-size:  ${props => props.theme.fontSizes.l};
  font-weight:${props => props.theme.fontWeights.bold};
`;
