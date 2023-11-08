import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getCarsThunk } from "../../redux/thunks";
import { toast } from "react-toastify";

const Catalog = () => {
  const page = useSelector((state) => state.cars.page);
  const limit = useSelector((state) => state.cars.limit);
  const reachOut = useSelector((state) => state.cars.reachOut);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(getCarsThunk({ page, limit }))
      .unwrap()
      .then(() => {
        toast.success("Got more cars");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    if (page === 1) {
      dispatch(getCarsThunk({ page, limit }));
    }
  }, [dispatch, page, limit]);

  return (
    <>
      <SearchForm />
      <ul>
        <GalleryItem />
      </ul>
      {!reachOut ? <button onClick={handleLoadMore}>Load more</button> : null}
    </>
  );
};

export default Catalog;
