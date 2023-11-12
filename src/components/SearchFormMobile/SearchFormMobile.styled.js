import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledFormMobile = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 15px;
  text-align: center;
`;

export const StyledSpanMobile = styled.span`
  color: #8a8a89;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledInputWrapperMobile = styled.div`
  display: flex;
  position: relative;
`;

export const StyledMileageFromInputMobile = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 9px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  outline: none;

  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background: #f7f7fb;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const StyledMileageToInputMobile = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 9px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  outline: none;

  border-radius: 0px 14px 14px 0px;
  border: none;
  /* border-right: 1px solid rgba(138, 138, 137, 0.2); */

  background: #f7f7fb;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledSearchButtonMobile = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: none;
  background: #3470ff;
  padding: 14px 44px;

  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  transition: all 0.1s ease-in;
  &:hover {
    background: #0b44cd;
  }
`;

export const StyledFromErrorMobile = styled.p`
  font-size: 0.5rem;
  position: absolute;
  top: 50px;
  left: 10px;
  margin: 0;
  color: red;
`;
export const StyledToError = styled.p`
  font-size: 0.5rem;
  position: absolute;
  top: 50px;
  left: 171px;
  margin: 0;
  color: red;
`;
export const StyledBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  border: none;
  background-color: transparent;

  color: #8a8a89;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;
export const StyledBackLink = styled(NavLink)`
  text-decoration: none;
  
`;
