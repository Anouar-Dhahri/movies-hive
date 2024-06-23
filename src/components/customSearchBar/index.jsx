import React from "react";
import { Box, IconButton, Input } from "@chakra-ui/react";
import { Close } from "mdi-material-ui";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function CustomSearchBar({ showSearchBar, toggleSearchBar }) {
  const themeReducer = useSelector((state) => state.theme);
  return (
    // <motion.div animate={{ x: 100 }} transition={{ delay: 1 }}>
    <Box
      sx={{
        width: "80%",
        minHeight: "50px",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem",
        background: themeReducer?.theme === "light" ? "#1a1e2c" : "#ffffff",

        padding: "0.5rem",
      }}
    >
      <Input
        type="text"
        sx={{
          height: "50px",
          border: "none",
          color: themeReducer?.theme === "light" ? "#ffffff" : "#1a1e2c",
          fontSize: "1.5rem",
          fontWeight: 500,
          letterSpacing: "2px",
          fontFamily: "Bebas Neue, sans-serif",
        }}
        placeholder="Search for a movie or tv show"
        _focusVisible={{ outline: "none" }}
      />
      <IconButton
        onClick={toggleSearchBar}
        icon={<Close />}
        sx={{
          background: "transparent",
          height: "50px",
          border: "none",
          color: themeReducer?.theme === "light" ? "#ffffff" : "#1a1e2c",
        }}
        _hover={{ color: "#037ade" }}
      />
    </Box>
    // </motion.div>
  );
}

export default CustomSearchBar;
