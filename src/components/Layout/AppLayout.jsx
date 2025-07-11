import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../Ui/Headers";
import Footer from "../Ui/Footer";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
