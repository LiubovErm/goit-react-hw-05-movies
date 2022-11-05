import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GoBack = styled(Link)`
  text-decoration: none;
  display: block;
  width: 150px;
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  font-size:  ${props => props.theme.fontSizes.l};
  font-weight:${props => props.theme.fontWeights.bold};
  color:${props => props.theme.colors.text};
  margin-top:${props => props.theme.space[5]}px;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size:  ${props => props.theme.fontSizes.l};
`;

export const MovieImage = styled.img`
  display: block;
  width: 300px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight:${props => props.theme.fontWeights.bold};
`;

export const Wrapper = styled.div`
  padding: ${props => props.theme.space[3]}px;
`;

export const Description = styled.p`
  margin: ${props => props.theme.space[3]}px;
  font-size:  ${props => props.theme.fontSizes.m};
`;

export const SubTitle = styled.span`
  display: block;
  margin-bottom: ${props => props.theme.space[3]}px;
  font-weight:${props => props.theme.fontWeights.bold};
`;

export const DetailsLinksList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const DetailsLinksItem = styled.li`
  margin: ${props => props.theme.space[3]}px;
`;

export const DetailsLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size:  ${props => props.theme.fontSizes.m};
  font-weight:${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.radii.normal};
  padding:${props => props.theme.space[3]}px;
  &.active {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    color: ${props => props.theme.colors.blue};
  }
`;