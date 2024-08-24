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
import { toggleTheme } from "reduxStore/features/theme/ThemeSlice";
import CustomSearchBar from "components/customSearchBar";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const themeReducer = useSelector((state) => state.theme);

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      // Scrolling up
      setScrollingUp(true);
    } else {
      // Scrolling down
      setScrollingUp(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (lastScrollY > 200 && showSearchBar) {
      toggleSearchBar();
    }
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line
  }, [lastScrollY]);

  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);

  return (
    <Box
      sx={{
        display: scrollingUp || lastScrollY === 0 ? "block" : "none",
        width: "100%",
        height: "70px",
        position: "fixed",
        transform: "translateY(0)",
        zIndex: 1,
        background: "rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(3.5px)",
        transition: "all ease 0.5s",
        // eslint-disable-next-line
        zIndex: 2,
        //
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
          <Text
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "5px",
              backgroundColor: "#FFE53B",
              backgroundImage:
                "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%",
              backgroundClip: "text",
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
          <Tooltip
            label="Search"
            sx={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "2px",
            }}
          >
            <IconButton
              onClick={toggleSearchBar}
              icon={<Magnify />}
              sx={{ background: "transparent", mt: "15px", color: "#FFF" }}
              _hover={{ color: "#FFE53B" }}
              _active={{ background: "transparent" }}
            />
          </Tooltip>

          <Tooltip
            label={
              themeReducer?.theme === "dark"
                ? "Turn On The Light"
                : "Turn Off The Light"
            }
            sx={{
              fontFamily: "Bebas Neue, sans-serif",
              letterSpacing: "2px",
            }}
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
              sx={{ background: "transparent", mt: "15px", color: "#FFF" }}
              _hover={{ color: "#FFE53B" }}
              _active={{ background: "transparent" }}
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
                color: "#FFF",
                mt: "15px",
              }}
              _hover={{ backgroundColor: "transparent", color: "#FFE53B" }}
              onClick={() => navigate(`/explore/${"movie"}`)}
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
                color: "#FFF",
                mt: "15px",
              }}
              _hover={{ backgroundColor: "transparent", color: "#FFE53B" }}
              onClick={() => navigate(`/explore/${"tv"}`)}
            >
              TV Shows
            </Button>
          </Show>
          <Show below={"md"}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<MenuIcon />}
                _hover={{ color: "#FFE53B" }}
                _active={{ background: "transparent" }}
                sx={{
                  background: "transparent",
                  mt: "15px",
                  color: "#FFF",
                }}
              />
              <MenuList>
                <MenuItem
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Bebas Neue, sans-serif",
                    letterSpacing: "2px",
                  }}
                  onClick={() => navigate(`/explore/${"movie"}`)}
                >
                  Movies
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Bebas Neue, sans-serif",
                    letterSpacing: "2px",
                  }}
                  onClick={() => navigate(`/explore/${"tv"}`)}
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
