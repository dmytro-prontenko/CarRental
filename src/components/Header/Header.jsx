import { NavLink } from "react-router-dom";
import { StyledNavigationLinks } from "./Header.styled";

const Header = () => {
  return (
    <nav>
      <nav>
        <NavLink to="/">Here must be a logo</NavLink>
        <StyledNavigationLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </StyledNavigationLinks>
      </nav>
    </nav>
  );
};

export default Header;
