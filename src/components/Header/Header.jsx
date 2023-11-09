import { NavLink } from "react-router-dom";
import { StyledLogo, StyledNavBar, StyledNavLink, StyledNavigationLinks } from "./Header.styled";
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <StyledNavBar>
        <StyledLogo to="/"><img src={logo} alt="logo" width={'100px'}/></StyledLogo>
        <StyledNavigationLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </StyledNavigationLinks>
    </StyledNavBar>
  );
};

export default Header;
