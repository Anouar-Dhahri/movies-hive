import React, { useState } from "react";
import { Box, IconButton, Input, Slide, useDisclosure } from "@chakra-ui/react";
import { Close } from "mdi-material-ui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CustomSearchBar({ showSearchBar, toggleSearchBar }) {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const themeReducer = useSelector((state) => state.theme);
  const [query, setQuery] = useState("");

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        toggleSearchBar();
      }, 1000);
    }
  };
  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
          onKeyUp={searchQueryHandler}
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
    </Slide>
  );
}

export default CustomSearchBar;
