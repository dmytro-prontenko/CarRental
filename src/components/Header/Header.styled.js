import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigationLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0;
`;
export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 12px;

  padding: 14px;

  &.active {
    background-color: #3470ff;
    color: #FFF;
  }

  &:hover:not(.active) {
    background-color: lightblue;
    color: #023047;
  }
`;
