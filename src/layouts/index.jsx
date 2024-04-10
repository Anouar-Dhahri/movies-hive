import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        minHeight: "100vh",
        position:"relative"
      }}>
      <Header />
      <Box sx={{width:"100%", minHeight:"100vh"}} >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default MainLayout;
