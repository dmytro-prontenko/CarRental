import styled from "styled-components";

export const StyledModalCard = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const StyledCardheader = styled.div`
  display: flex;
  gap: 3px;
  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;

export const StyledSpan = styled.span`
  color: #3470ff;
`;
export const StyledConditionSpan = styled.span`
  color: #3470ff;
  font-weight: bold;
`;

export const StyledCarInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledInfoFirstRow = styled.div`
  display: flex;
  gap: 6px;
`;
export const StyledInfoSecondRow = styled.div`
  display: flex;
  gap: 6px;
`;

export const StyledDescription = styled.div`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const StyledAccessoriesWrapprer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledAccessoriesTitle = styled.div`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledAccessoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  /* list-style: none; */

  margin-bottom: 24px;
  padding: 0;
  /* width: 424px; */
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledListItem = styled.li`
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);

  &:last-of-type {
    border: none;
  }
`;

export const StyledRentConditions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledRentTitle = styled.div`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const StyledConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 441px;
  margin-bottom: 36px;
`;

export const StyledConditionItem = styled.li``;
export const StyledConditionWrapper = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledModalButton = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  width: 168px;

  border-radius: 12px;
  border: none;
  background: #3470ff;

  color: var(--White, #fff);
  text-decoration: none;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.1s ease-in;
  &:hover {
    background: #0b44cd;
  }
`;
