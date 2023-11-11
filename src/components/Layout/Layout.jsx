import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <hr /> */}
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;