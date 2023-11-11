import { useDispatch, useSelector } from "react-redux";
import notFoundImg from "../../assets/images/noFoundCar.png";
import {
  addFavorites,
  setFavorites,
  setModalId,
} from "../../redux/carsReducer";
import {
  StyledAddToFavBtn,
  StyledCarInfo,
  StyledCarModel,
  StyledCarSubtitle,
  StyledCarTitle,
  StyledCard,
  StyledImg,
  StyledLearnMoreBtn,
} from "./GalleyItems.styled";
import sprite from "../../assets/images/sprite.svg";

const GalleryItems = () => {
  const carsList = useSelector((state) => state.cars.cars);
  const filteredList = useSelector((state) => state.cars.filteredCars);
  const favoritesList = useSelector((state) => state.cars.favoriteCars);
  const carsToRender = filteredList.length ? filteredList : carsList;
  const dispatch = useDispatch();

  const handleSetModalId = (id) => {
    dispatch(setModalId(id));
  };
  const handleAddToFavorites = (item) => {
    const existInFav = favoritesList?.some((car) => car.id === item.id);
    existInFav
      ? dispatch(setFavorites(favoritesList.filter((car) => car.id !== item.id)))
      : dispatch(addFavorites(item));
  };

  const carsItems = carsToRender.map((car) => {
    return (
      <StyledCard key={car.id}>
        <>
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
            {`${car.address.split(", ")[1]} | ${car.address.split(", ")[2]} | ${
              car.rentalCompany
            } |
            Premium | ${car.type} | ${car.model} | ${car.id} | ${
              car.functionalities[0]
            }`}
          </StyledCarInfo>
        </>
        <StyledLearnMoreBtn onClick={() => handleSetModalId(car.id)}>
          Learn more
        </StyledLearnMoreBtn>
        <StyledAddToFavBtn
          onClick={() => {
            handleAddToFavorites(car);
          }}
        >
          <svg width="18" height="18">
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </StyledAddToFavBtn>
      </StyledCard>
    );
  });
  return carsItems;
};

export default GalleryItems;
