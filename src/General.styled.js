import styled from "styled-components";
import background from "./assets/images/background.webp";

export const ContainerStyles = styled.div`
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
