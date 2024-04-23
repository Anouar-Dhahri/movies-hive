import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  IconButton,
  Button,
  Show,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import {
  HexagonMultiple,
  Magnify,
  WeatherSunny,
  MoonWaningCrescent,
} from "mdi-material-ui";
import MenuIcon from "mdi-material-ui/Menu";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/features/theme/ThemeSlice";
import CustomSearchBar from "../customSearchBar";

function Header() {
  const dispatch = useDispatch();
  const themeReducer = useSelector((state) => state.theme);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);
  return (
    <Box
      sx={{
        width: "100%",
        height: "70px",
        position: "fixed",
        transform: "translateY(0)",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "row",
            lineHeight: "70px",
            width: "auto",
          }}
        >
          <HexagonMultiple
            sx={{
              width: "50px",
              height: "50px",
              mt: "10px",
            }}
          />
          <Text
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "5px",
              // backgroundColor: "#03e5b7",
              // backgroundImage:
              //   "linear-gradient(315deg, #03e5b7 0%, #037ade 74%)",
              // backgroundSize: "100%",
              // backgroundRepeat: "repeat",
              // webkitBackgroundClip: "text",
              // webkitTextFillColor: "transparent",
              // mozBackgroundClip: "text",
              // mozTextFillColor: "transparent",
            }}
          >
            MoviesHive
          </Text>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Tooltip label="Search">
            <IconButton
              onClick={toggleSearchBar}
              icon={<Magnify />}
              sx={{ background: "transparent", mt: "15px" }}
              _hover={{ color: "#037ade" }}
            />
          </Tooltip>

          <Tooltip
            label={
              themeReducer?.theme === "dark"
                ? "Turn On The Light"
                : "Turn Off The Light"
            }
          >
            <IconButton
              onClick={() => dispatch(toggleTheme())}
              icon={
                themeReducer?.theme === "dark" ? (
                  <WeatherSunny />
                ) : (
                  <MoonWaningCrescent />
                )
              }
              sx={{ background: "transparent", mt: "15px" }}
              _hover={{ color: "#037ade" }}
            />
          </Tooltip>

          <Show above={"md"}>
            <Button
              variant="ghost"
              sx={{
                fontWeight: 400,
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "2px",
                color: "#303740",
                mt: "15px",
              }}
            >
              Movies
            </Button>
            <Button
              variant="ghost"
              sx={{
                fontWeight: 400,
                fontFamily: "Bebas Neue, sans-serif",
                fontSize: "1.5rem",
                letterSpacing: "2px",
                color: "#303740",
                mt: "15px",
              }}
            >
              TV Shows
            </Button>
          </Show>
          <Show below={"md"}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<MenuIcon />}
                _hover={{ color: "#037ade" }}
                sx={{
                  background: "transparent",
                  mt: "15px",
                }}
              />
              <MenuList>
                <MenuItem
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Bebas Neue, sans-serif",
                  }}
                >
                  Movies
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Bebas Neue, sans-serif",
                  }}
                >
                  TV Shows
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </Box>
      </Box>
      {showSearchBar && (
        <CustomSearchBar
          showSearchBar={showSearchBar}
          toggleSearchBar={toggleSearchBar}
        />
      )}
    </Box>
  );
}

export default Header;
