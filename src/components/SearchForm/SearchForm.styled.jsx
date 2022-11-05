import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content:center;
  margin: ${props => props.theme.space[5]}px;
`;

export const Input = styled.input`
  max-width: 300px;
  height: 35px;
  width: 100%;
  border-radius: ${props => props.theme.radii.normal};
  font-size:  ${props => props.theme.fontSizes.m};
`;

export const Button = styled.button`
  cursor: pointer;
  margin-left: ${props => props.theme.space[3]}px;
  width: 120px;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.blue};
  color:${props => props.theme.colors.white};
  border: none;
  font-size:  ${props => props.theme.fontSizes.m};
`;