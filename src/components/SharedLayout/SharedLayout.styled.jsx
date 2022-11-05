import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size:  ${props => props.theme.fontSizes.m};
  border-radius: ${props => props.theme.radii.normal};
  padding:${props => props.theme.space[3]}px;
  color:${props => props.theme.colors.text};

  &.active {
    background-color: ${props => props.theme.colors.green};
    color:${props => props.theme.colors.white};
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${props => props.theme.colors.green};
  }
`;