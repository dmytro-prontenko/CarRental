import styled from "styled-components";

export const ContainerStyles = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 25px;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    min-width: 1280px;
    padding-left: 91px;
    padding-right: 91px;
  }
`;
