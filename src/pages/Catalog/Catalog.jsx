import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import GalleryItems from "../../components/GalleryItems/GalleryItems";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getCarsThunk } from "../../redux/thunks";
import {
  GalleryWrapper,
  LoadMoreBtn,
  StyledGalleryList,
} from "./Catalog.styled";
import Modal from "../../components/Modal/Modal";
import ModalCard from "../../components/ModalCard/ModalCard";
import { setModalId } from "../../redux/carsReducer";

const Catalog = () => {
  const page = useSelector((state) => state.cars.page);
  const limit = useSelector((state) => state.cars.limit);
  const reachOut = useSelector((state) => state.cars.reachOut);
  const triggerForModal = useSelector((state) => state.cars.modalId);
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    dispatch(setModalId(null));
  };

  const handleLoadMore = () => {
    dispatch(getCarsThunk({ page, limit }))
      .unwrap()
      .then(() => {
        !reachOut;
        toast.success("Received more records");
      })
      .catch((error) => {
        toast.info(error.message);
      });
  };

  useEffect(() => {
    if (page === 1) {
      dispatch(getCarsThunk({ page, limit }))
        .unwrap()
        .then(() => {
          toast.success("Received first 12 records");
        })
        .catch((error) => {
          toast.info(error.message);
        });
    }
  }, [dispatch, page, limit]);

  return (
    <>
      <SearchForm />
      <GalleryWrapper>
        <StyledGalleryList>
          <GalleryItems />
        </StyledGalleryList>
        {!reachOut ? (
          <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
        ) : null}
      </GalleryWrapper>
      {triggerForModal && (
        <Modal onCloseModal={handleModalOpen}>
          <ModalCard />
        </Modal>
      )}
    </>
  );
};

export default Catalog;
