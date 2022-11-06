import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from '../Box/Box';
import { Header, Logo, Navigation, NavigationLink } from './SharedLayout.styled';
import { Loader } from '../Loader/Loader'
import logo from '../../images/logo.PNG'


export const SharedLayout = () => {
  return (
    <Box maxWidth={1400} mx='auto'>
    <Header>         
        <Logo to="/">
          <img src={logo} alt = 'logo' width={80}/>
        </Logo>
       <Navigation>
          <NavigationLink to="/" end>Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
          <NavigationLink to="/library">Library</NavigationLink>
       </Navigation>
    </Header>
          
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
    </Box>
  );
};