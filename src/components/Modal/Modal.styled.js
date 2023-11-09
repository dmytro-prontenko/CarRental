import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
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
  place-items:center;
  background-color: white;
  width: 538px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
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
  top: 15px;
  right: 15px;
  padding: 12px 20px;
  background-color: transparent;
  /* color: white; */
  border: none;
  border-radius: 8px;
  
  transition: all 0.1s ease-in;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 3px 1px gray;
    /* background-color: darkblue; */
  }
`;