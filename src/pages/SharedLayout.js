import React from "react";
import { Outlet } from "react-router-dom";
import Navibar from "../layouts/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navibar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
