import { useSelector } from "react-redux";
import Catalog from "../Catalog/Catalog";
import { selectFavoriteCars } from "../../redux/selectors";
import NoDataPage from "../../components/NoDataPage / NoDataPage";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 1,
    },
  },
  exit: {
    // x: "-100vw",
    transition: { ease: "linear" },
  },
};

const Favorites = () => {
  const favoritesList = useSelector(selectFavoriteCars);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {favoritesList.length ? <Catalog /> : <NoDataPage />}
    </motion.div>
  );
};

export default Favorites;
