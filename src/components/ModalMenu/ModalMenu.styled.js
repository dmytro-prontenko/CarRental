import styled from "styled-components";

export const Wrapper = styled.div`
  backdrop-filter: blur(1px);
  background-color: #3470ff;
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
  justify-content:center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #3470ff, #0b44cd);

  padding: 40px 35px;
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
