import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Catalog from "./pages/Catalog/Catalog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/Homepage/Homepage";
import Favorites from "./pages/Favorites/Favorites";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        position="top-left"
        theme="colored"
      />
    </>
  );
};

export default App;
