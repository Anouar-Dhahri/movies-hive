import React from "react";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import { Home } from "mdi-material-ui";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Image
        src={assets.notFound}
        alt="404 image not found"
        sx={{ width: "300px", height: "auto" }}
      />
      <Text
        sx={{
          fontSize: "3rem",
          fontWeight: 500,
          fontFamily: "Rubik, sans-serif",
        }}
      >
        404 | Page Not Found
      </Text>
      <Button
        colorScheme="teal"
        variant="outline"
        leftIcon={<Home />}
        onClick={() => navigate("/")}
        sx={{
          fontFamily: "Rubik, sans-serif",
          letterSpacing: "5px",
          fontSize: "1rem",
          fontWeight: 400,
        }}
      >
        Return Home
      </Button>
    </Box>
  );
}

export default PageNotFound;
