import styled from "styled-components";

export const StyledCard = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
`;
StyledCard;

export const StyledImg = styled.img`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  object-fit: cover;

  border-radius: 14px;
`;

export const StyledCarTitle = styled.div`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  margin-bottom: 8px;
  color: #121417;

  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const StyledCarSubtitle = styled.h4`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 3px;
`;

export const StyledCarModel = styled.span`
  color: #3470ff;
`;
export const StyledCarInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-bottom: 28px;

  gap: 4px;

  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const StyledInfoFirstLine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  grid-gap: 10px;

  & :nth-child(n) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    color: rgba(18, 20, 23, 0.5);

    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  & :last-child {
    border-right: none;
  }
`;
export const StyledInfoSecondLine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  & :nth-child(n) {
    padding: 3px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    color: rgba(18, 20, 23, 0.5);

    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }

  & :last-child {
    border-right: none;
  }
`;

export const StyledLearenMoreBtn = styled.button`
  width: 100%;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border: none;
  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
`;
