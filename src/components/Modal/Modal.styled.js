import styled from "styled-components";

export const Wrapper = styled.div`
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  z-index: 1111120;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  background-color: white;
  /* width: 541px;
  height: 752px; */
  border-radius: 24px;
  background: #fff;
  padding: 20px 35px;

  @media screen and (min-width: 768px) {
    width: 541px;
    height: 752px;
  }
`;
export const Childrens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80vw;
  height: 80vh;
  padding: 10px 30px;
  overflow: hidden;
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  /* color: white; */
  border: none;
  border-radius: 8px;

  transition: all 0.1s ease-in;
  &:hover {
    cursor: pointer;
    /* box-shadow: 2px 2px 3px 1px gray; */
  }
`;
