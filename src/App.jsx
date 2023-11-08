import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Catalog from "./pages/Catalog/Catalog";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={<Suspense fallback={<Loader />}>{<p>HOME</p>}</Suspense>}
          />
          <Route
            path="/catalog"
            element={<Suspense fallback={<Loader />}>{<Catalog />}</Suspense>}
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<Loader />}>{<p>FAVORITES</p>}</Suspense>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer autoClose={1500} />
    </>
  );
};

export default App;
