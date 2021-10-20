import React from "react";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";

import Cards from "./Cards";
import Block1 from "./Block1";
import HeaderBar from "./HeaderBar";
import Home from "../Pages/Home";
import { withTranslation } from "react-i18next";

const Layout = ({ children }) => {
  return (
    <>
      {/* App Bar */}

      <Container>
        <HeaderBar />
      </Container>

      {/* Content */}


        <Container>
        {children}
        </Container>    

     
      {/* Grids */}
    </>
  );
};

export default withTranslation()(Layout);
