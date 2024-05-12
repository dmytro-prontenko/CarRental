import { NavLink } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/images/background.webp";

export const Header = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 15px 25px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    width: 100%;
    /* width: 768px; */
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    /* background:url(${background});
    background-position:center; */
    width: 100%;
    min-width: 1280px;
  }
`;

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
      text-decoration: none;
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
