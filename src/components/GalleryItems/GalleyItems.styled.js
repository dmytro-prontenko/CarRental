import styled from "styled-components";

export const StyledCard = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const StyledLearnMoreBtn = styled.button`
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
  cursor: pointer;

  color: #fff;
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

export const StyledAddToFavBtn = styled.button`
  position: absolute;
  padding: 0;
  width: 18px;
  height: 18px;
  top: 14px;
  right: 14px;
  fill: ${(props) => (props.$isFavorite ? "#3470FF" : "none")};
  stroke: ${(props) => (props.$isFavorite ? "#3470FF" : "white")};
  border: none;
  background: transparent;
  transition: all 0.1s ease-in;

  &:hover {
    cursor: pointer;
    fill: ${(props) => (props.$isFavorite ? "#0b44cd" : "#3470FF")};
    stroke: ${(props) => (props.$isFavorite ? "#0b44cd" : "#3470FF")};
  }
`;
