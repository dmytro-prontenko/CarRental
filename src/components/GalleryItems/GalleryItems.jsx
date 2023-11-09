import { useSelector } from "react-redux";
import notFoundImg from '../../images/noFoundCar.png';
import { StyledCarInfo, StyledCarModel, StyledCarSubtitle, StyledCarTitle, StyledCard, StyledImg, StyledInfoFirstLine, StyledInfoSecondLine, StyledLearenMoreBtn } from "./GalleyItems.styled";

const GalleryItems = () => {
  const carsList = useSelector((state) => state.cars.cars);




  const carsItems = carsList.map((car) => {
    return (
      <StyledCard key={car.id}>
        <StyledImg src={car.img || notFoundImg} alt={`${car.make} ${car.model}`}
          onError={(e) => {
            e.currentTarget.src = notFoundImg;
          }}/>
        <StyledCarTitle>
          <StyledCarSubtitle>
            {car.make}
            <StyledCarModel>{car.model}, </StyledCarModel>
            {car.year}
          </StyledCarSubtitle>
          <p>{car.rentalPrice}</p>
        </StyledCarTitle>
        <StyledCarInfo>

          <StyledInfoFirstLine>
            <p>{car.address.split(", ")[1]}</p>
            <p>{car.address.split(", ")[2]}</p>
            <p>{car.rentalCompany}</p>
          </StyledInfoFirstLine>

          <StyledInfoSecondLine>
            <p>{car.type}</p>
            <p>{car.id}</p>
            <p>{car.functionalities[0]}</p>
          </StyledInfoSecondLine>
        </StyledCarInfo>
        <StyledLearenMoreBtn>Learn more</StyledLearenMoreBtn>

      </StyledCard>
    );
  });
  return carsItems;
};

export default GalleryItems;
