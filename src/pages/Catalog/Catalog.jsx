import { useEffect, useState } from "react";
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
import {
  setFilteredCars,
  setLocation,
  setModalId,
} from "../../redux/carsReducer";
import { getCarsThunk } from "../../redux/thunks";
import {
  GalleryWrapper,
  LoadMoreBtn,
  StyledGalleryList,
  StyledToTopBtn,
} from "./Catalog.styled";

import sprite from "../../assets/images/sprite.svg";
import {
  selectIsLoading,
  selectIsLoadingForm,
  selectLimit,
  selectLocation,
  selectPage,
  selectReachOut,
  selectSearchedId,
} from "../../redux/selectors";

const Catalog = () => {
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const isLoading = useSelector(selectIsLoading);
  const isLoadingSearch = useSelector(selectIsLoadingForm);
  const reachOut = useSelector(selectReachOut);
  const triggerForModal = useSelector(selectSearchedId);
  const currentLocation = useSelector(selectLocation);
  const isTabletAndDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const dispatch = useDispatch();
  const location = useLocation();
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    dispatch(setLocation(location.pathname));
    dispatch(setFilteredCars([]));
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (page === 1) {
      dispatch(getCarsThunk({ page, limit }));
      // .unwrap()
      // .catch((error) => {
      //   toast.info(error.message);
      // });
    }
  }, [dispatch, page, limit]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setShowToTopButton(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleModalClose = () => {
    dispatch(setModalId(null));
    document.body.classList.remove("modal-open");
  };

  const handleLoadMore = () => {
    dispatch(getCarsThunk({ page, limit }));
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
            ) : !reachOut && currentLocation === "/catalog" ? (
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
      {showToTopButton && (
        <StyledToTopBtn onClick={scrollToTop}>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-up-arrow`} />
          </svg>
        </StyledToTopBtn>
      )}
    </ContainerStyles>
  );
};

export default Catalog;
