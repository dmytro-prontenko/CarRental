import { useSelector } from "react-redux";
import notFoundImg from "../../images/noFoundCar.png";
import {
  StyledCarInfo,
  StyledCarModel,
  StyledCarSubtitle,
  StyledCarTitle,
  StyledCard,
  StyledImg,
  StyledLearenMoreBtn,
} from "./GalleyItems.styled";

const GalleryItems = () => {
  const carsList = useSelector((state) => state.cars.cars);

  const handleLearnMore = (id) => {
    console.log(id)
  }

  const carsItems = carsList.map((car) => {
    return (
      <StyledCard key={car.id} id={car.id}>
        <div>
          <StyledImg
            src={car.img || notFoundImg}
            alt={`${car.make} ${car.model}`}
            onError={(e) => {
              e.currentTarget.src = notFoundImg;
            }}
          />
          <StyledCarTitle>
            <StyledCarSubtitle>
              {car.make}
              <StyledCarModel>{car.model}, </StyledCarModel>
              {car.year}
            </StyledCarSubtitle>
            <p>{car.rentalPrice}</p>
          </StyledCarTitle>
          <StyledCarInfo>
            {`${car.address.split(", ")[1]} | ${
              car.address.split(", ")[2]
            } | ${car.rentalCompany} |
            Premium | ${car.type} | ${car.model} | ${car.id} | ${
              car.functionalities[0]
            }`}
          </StyledCarInfo>
        </div>
        <StyledLearenMoreBtn onClick={()=>handleLearnMore(car.id)}>Learn more</StyledLearenMoreBtn>
      </StyledCard>
    );
  });
  return carsItems;
};

export default GalleryItems;
