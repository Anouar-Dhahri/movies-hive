import React from "react";
import { Box, Divider, Button, Text } from "@chakra-ui/react";
import { HexagonMultiple } from "mdi-material-ui";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

const btnStyle = {
  fontWeight: 400,
  fontFamily: "Rubik, sans-serif",
  fontSize: "1rem",
  letterSpacing: "2px",
  color: "gray",
};

function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        bottom: 0,
        flex: 1,
        gap: "2rem",
        p: "2rem",
      }}
    >
      <Divider />

      <Box
        sx={{
          display: "flex",
          gap: 6,
          justifyContent: "center",
          flexDirection: ["column", "column", "column", "row", "row"],
        }}
      >
        <Button variant="link" sx={btnStyle}>
          Terms Of Use
        </Button>
        <Button variant="link" sx={btnStyle}>
          Privacy-Policy
        </Button>
        <Button variant="link" sx={btnStyle}>
          About
        </Button>
        <Button variant="link" sx={btnStyle}>
          Blog
        </Button>
        <Button variant="link" sx={btnStyle}>
          FAQ
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          lineHeight: "70px",
          width: "auto",
          alignItems: "center",
        }}
        _hover={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <HexagonMultiple
          sx={{
            width: "50px",
            height: "50px",
            mt: "10px",
            color: "#FFE53B",
          }}
        />
      </Box>
      <Text
        sx={{
          color: "gray",
          fontFamily: "Rubik, sans-serif",
          letterSpacing: "2px",
          fontSize: "1rem",
          fontWeight: 500,
          textWrap: "wrap",
          textAlign: "center",
        }}
      >
        Moviehive - Copyright © {moment().format("YYYY")}
      </Text>
    </Box>
  );
}

export default Footer;
