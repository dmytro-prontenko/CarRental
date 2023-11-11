import styled from "styled-components";
export const HomePageWrapper = styled.div`
  margin: 0 auto;
`;

export const StyledMainHeader = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`;

export const StyledHeaderSpan = styled.span`
  text-align: center;
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 30%; */
  gap: 15px;
  /* margin: 20px; */
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const StyledBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;
