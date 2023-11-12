import styled from "styled-components";

export const StyledGalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  list-style: none;
  width: 100%;
  row-gap: 50px;
  margin-top: 50px;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 29px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 29px;

    width: 1184px;
    margin: 50px auto;
    padding: 0;
  }
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const LoadMoreBtn = styled.button`
  color: #3470ff;
  border: none;
  background: transparent;
  cursor: pointer;
  /* margin-top: 50px; */
  margin-bottom: 50px;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
  transition: color 0.3s;

  &:hover {
    color: #0b44cd;
  }
`;

export const StyledToTopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  /* & svg {
    width: 100%;
    height: 100%;
  } */
`;
