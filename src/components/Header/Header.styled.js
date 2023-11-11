import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigationLinks = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

export const StyledNavigationLinksModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: #fff;
`;

export const StyledNavWrapper = styled.div`
  display: flex;
`;

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;
export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;

  &.active {
    color: #fff;
    text-decoration: underline;
  }

  &:hover:not(.active) {
    color: #023047;
  }

  @media screen and (min-width: 768px) {
    text-decoration: none;
    border-radius: 12px;

    padding: 14px;

    &.active {
      background-color: #3470ff;
      text-decoration:none;
      color: #fff;
    }

    &:hover:not(.active) {
      background-color: lightblue;
      color: #023047;
    }
  }
`;

export const StyledBurgerBtn = styled.button`
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
