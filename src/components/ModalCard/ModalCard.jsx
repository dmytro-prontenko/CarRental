import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import notFoundImg from "../../assets/images/noFoundCar.png";
import {
  StyledAccessoriesList,
  StyledAccessoriesTitle,
  StyledAccessoriesWrapper,
  StyledCarInfoList,
  StyledCardHeader,
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
import { selectCarsList, selectFilteredList, selectSearchedId } from "../../redux/selectors";

const ModalCard = () => {
  const searchId = useSelector(selectSearchedId);
  const carsList = useSelector(selectCarsList);
  const filteredList = useSelector(selectFilteredList);
  const cars = filteredList.length ? filteredList : carsList
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
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

      <StyledCardHeader>
        {make}
        <StyledSpan>{model}, </StyledSpan>
        {year}
      </StyledCardHeader>

      <StyledCarInfoList>
        <StyledInfoFirstRow>
          <StyledListItem key={nanoid()}>{address.split(", ")[1]}</StyledListItem>
          <StyledListItem key={nanoid()}>{address.split(", ")[2]}</StyledListItem>
          <StyledListItem key={nanoid()}>Id:{id}</StyledListItem>
          <StyledListItem key={nanoid()}>Year:{year} </StyledListItem>
          <StyledListItem key={nanoid()}>Type:{type}</StyledListItem>
        </StyledInfoFirstRow>
        <StyledInfoSecondRow>
          <StyledListItem key={nanoid()}>Fuel Consumption:{fuelConsumption}</StyledListItem>
          <StyledListItem key={nanoid()}>Engine Size:{engineSize}</StyledListItem>
        </StyledInfoSecondRow>
      </StyledCarInfoList>
      <StyledDescription>{description}</StyledDescription>
      <StyledAccessoriesWrapper>
        <StyledAccessoriesTitle>
          Accessories and functionalities:
        </StyledAccessoriesTitle>
        <StyledAccessoriesList>
          {accessories.map((accessory, index) => (
            <StyledListItem key={index}>{accessory}</StyledListItem>
          ))}
          {functionalities.map((accessory, index) => (
            <StyledListItem key={index}>{accessory}</StyledListItem>
          ))}
        </StyledAccessoriesList>
      </StyledAccessoriesWrapper>

      <StyledRentConditions>
        <StyledRentTitle>Rental Conditions:</StyledRentTitle>
        <StyledConditionsList>
          {rentalConditions.split("\n").map((condition) => (
            <StyledConditionItem key={nanoid()}>
              <StyledConditionWrapper>{
                condition.includes(":")
                ? (
                  <span>
                    {condition.split(":")[0]}: <StyledConditionSpan>{condition.split(":")[1]}</StyledConditionSpan>
                  </span>
                )
                : condition}
              </StyledConditionWrapper>
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
      <StyledModalButton id="contact-button" title="Rental car" href="tel:+380730000000">Rental car</StyledModalButton>
    </StyledModalCard>
  );
};

export default ModalCard;
