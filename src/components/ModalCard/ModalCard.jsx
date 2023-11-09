import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import notFoundImg from "../../images/noFoundCar.png";
import {
  StyledAccessoriesList,
  StyledAccessoriesTitle,
  StyledAccessoriesWrapprer,
  StyledCarInfoList,
  StyledCardheader,
  StyledConditionItem,
  StyledConditionSpan,
  StyledConditionWrapper,
  StyledConditionsList,
  StyledDescription,
  StyledImage,
  StyledInfoFirstRow,
  StyledInfoSecondRow,
  StyledListItem,
  StyledModalButton,
  StyledModalCard,
  StyledRentConditions,
  StyledRentTitle,
  StyledSpan,
} from "./ModalCard.styled";

const ModalCard = () => {
  const searchId = useSelector((state) => state.cars.modalId);
  const cars = useSelector((state) => state.cars.cars);
  console.log(cars);
  const {
    img,
    make,
    model,
    price,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = cars.find((car) => car.id === searchId);
  return (
    <StyledModalCard>
      <StyledImage
        src={img || notFoundImg}
        alt={`${make} ${model}`}
        onError={(e) => {
          e.currentTarget.src = notFoundImg;
        }}
      />

      <StyledCardheader>
        {make}
        <StyledSpan>{model}, </StyledSpan>
        {year}
      </StyledCardheader>

      <StyledCarInfoList>
        <StyledInfoFirstRow>
          <StyledListItem>{address.split(", ")[1]}</StyledListItem>
          <StyledListItem>{address.split(", ")[2]}</StyledListItem>
          <StyledListItem>Id:{id}</StyledListItem>
          <StyledListItem>Year:{year} </StyledListItem>
          <StyledListItem>Type:{type}</StyledListItem>
        </StyledInfoFirstRow>
        <StyledInfoSecondRow>
          <StyledListItem>Fuel Consumption:{fuelConsumption}</StyledListItem>
          <StyledListItem>Engine Size:{engineSize}</StyledListItem>
        </StyledInfoSecondRow>
      </StyledCarInfoList>
      <StyledDescription>{description}</StyledDescription>
      <StyledAccessoriesWrapprer>
        <StyledAccessoriesTitle>
          Accessories and functionalities:
        </StyledAccessoriesTitle>
        <StyledAccessoriesList>
          {accessories.map((accessory, index) => (
            <StyledListItem key={index}>{accessory}</StyledListItem>
          ))}
        </StyledAccessoriesList>
      </StyledAccessoriesWrapprer>

      <StyledRentConditions>
        <StyledRentTitle>Rental Conditions:</StyledRentTitle>
        <StyledConditionsList>
          {rentalConditions.split("\n").map((condition) => (
            <StyledConditionItem key={nanoid()}>
              <StyledConditionWrapper>{condition}</StyledConditionWrapper>
            </StyledConditionItem>
          ))}

          <StyledConditionItem>
            <StyledConditionWrapper>
              Mileage:
              <StyledConditionSpan>
                {mileage.toLocaleString("en-US")}
              </StyledConditionSpan>
            </StyledConditionWrapper>
          </StyledConditionItem>
          <StyledConditionItem>
            <StyledConditionWrapper>
              Price:<StyledConditionSpan>{rentalPrice}</StyledConditionSpan>
            </StyledConditionWrapper>
          </StyledConditionItem>
        </StyledConditionsList>
      </StyledRentConditions>
      <StyledModalButton href="tel:+380730000000">Rental car</StyledModalButton>
    </StyledModalCard>
  );
};

export default ModalCard;
