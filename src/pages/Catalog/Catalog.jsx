import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { ContainerStyles } from "../../General.styled";
import GalleryItems from "../../components/GalleryItems/GalleryItems";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import ModalCard from "../../components/ModalCard/ModalCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import SearchFormMobile from "../../components/SearchFormMobile/SearchFormMobile";
import { setFilteredCars, setLocation, setModalId } from "../../redux/carsReducer";
import { getCarsThunk } from "../../redux/thunks";
import {
  GalleryWrapper,
  LoadMoreBtn,
  StyledGalleryList,
} from "./Catalog.styled";

const Catalog = () => {
  const page = useSelector((state) => state.cars.page);
  const limit = useSelector((state) => state.cars.limit);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const isLoadingSearch = useSelector(
    (state) => state.cars.isLoadingSearchForm
  );
  const reachOut = useSelector((state) => state.cars.reachOut);
  const triggerForModal = useSelector((state) => state.cars.modalId);
  // const favoritesList = useSelector((state) => state.cars.favoriteCars);
  const isTabletAndDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const dispatch = useDispatch();
  const location = useLocation();
  const currentLocation = useSelector((state) => state.cars.location);

  useEffect(() => {
    dispatch(setLocation(location.pathname));
    dispatch(setFilteredCars([]))

  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (page === 1) {
      dispatch(getCarsThunk({ page, limit }))
        // .unwrap()
        // .catch((error) => {
        //   toast.info(error.message);
        // });
    }
  }, [dispatch, page, limit]);

  const handleModalClose = () => {
    dispatch(setModalId(null));
    document.body.classList.remove("modal-open");
  };

  const handleLoadMore = () => {
    dispatch(getCarsThunk({ page, limit }))
      // .unwrap()
      // .then(() => {
      //   !reachOut;
      //   toast.success("Received more records");
      // })
      // .catch((error) => {
      //   toast.info(error.message);
      // });
  };

  // useEffect(() => {
  //   if (favoritesList.length && currentLocation === "/favorites") {
  //     dispatch(setReachOut(true));
  //   }

  // }, [dispatch, favoritesList, currentLocation]);

  return (
    <ContainerStyles>
      {isMobile && <SearchFormMobile />}
      {isTabletAndDesktop && <SearchForm />}
      <GalleryWrapper>
        {isLoadingSearch ? (
          <Loader />
        ) : (
          <>
            <StyledGalleryList>
              <GalleryItems />
            </StyledGalleryList>
            {!reachOut && isLoading ? (
              <Loader />
            ) : !reachOut && currentLocation === '/catalog'  ? (
              <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
            ) : null}
          </>
        )}
      </GalleryWrapper>
      {triggerForModal && (
        <Modal onCloseModal={handleModalClose}>
          <ModalCard />
        </Modal>
      )}
    </ContainerStyles>
  );
};

export default Catalog;
