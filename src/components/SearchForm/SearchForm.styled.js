import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 40px;
  @media screen and (min-width: 1280px) {
    flex-direction:row;
    align-items:flex-end;
  }
`;

export const FormBrandPriceWrapper = styled.div`
  display: flex;
 
`;

export const StyledSpan = styled.span`
  color: #8a8a89;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const StyledMileageFromInput = styled.input`
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
export const StyledMileageToInput = styled.input`
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

export const FormButtonsWrapper = styled.div`
  display: flex;
  gap:20px;
`;

export const StyledSearchButton = styled.button`
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

export const StyledFromError = styled.p`
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
