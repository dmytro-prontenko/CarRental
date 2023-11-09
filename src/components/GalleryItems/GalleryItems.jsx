import { useDispatch, useSelector } from "react-redux";
import notFoundImg from "../../images/noFoundCar.png";
import { setModalId } from "../../redux/carsReducer";
import {
  StyledCarInfo,
  StyledCarModel,
  StyledCarSubtitle,
  StyledCarTitle,
  StyledCard,
  StyledImg,
  StyledLearnMoreBtn
} from "./GalleyItems.styled";

const GalleryItems = () => {
  const carsList = useSelector((state) => state.cars.cars);
  // const triggerToModal = useSelector((state) => state.cars.modalId);
  // const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSetModalId = (id) => {
    // if (!isOpen) {
      dispatch(setModalId(id));
    // }
    // setIsOpen(!isOpen);
  };

  const carsItems = carsList.map((car) => {
    return (
      <>
        <StyledCard key={car.id}>
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
          <StyledLearnMoreBtn onClick={() => handleSetModalId(car.id)}>
            Learn more
          </StyledLearnMoreBtn>
        </StyledCard>
        {/* {isOpen && (
          <Modal onCloseModal={handleModalOpen}>
            <ModalCard />
          </Modal>
        )} */}
      </>
    );
  });
  return carsItems;
};

export default GalleryItems;
