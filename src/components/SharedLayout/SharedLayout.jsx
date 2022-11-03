import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "../Box/Box";
import { Header, Logo, Navigation, NavigationLink } from "./SharedLayout.styled";


export const SharedLayout = () => {
  return (
    <Box>
    <Header>         
       <Logo to="/">Якесь лого</Logo>
       <Navigation>
          <NavigationLink to="/" end>Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
       </Navigation>
    </Header>
          
    <Suspense fallback={<div>Зробити лоудер</div>}>
      <Outlet />
    </Suspense>
    </Box>
  );
};