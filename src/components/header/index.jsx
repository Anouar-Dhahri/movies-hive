import React from "react";
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
} from "@chakra-ui/react";
import {
  HexagonMultiple,
  Magnify,
  WeatherSunny,
  MoonWaningCrescent,
} from "mdi-material-ui";
import MenuIcon from "mdi-material-ui/Menu";
function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70px",
      }}>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: "row",
            lineHeight: "70px",
            width: "auto",
          }}>
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
            }}>
            MoviesHive
          </Text>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}>
          <IconButton
            icon={<Magnify />}
            sx={{ background: "transparent", mt: "15px" }}
            _hover={{ color: "#037ade" }}
          />
          <IconButton
            icon={<WeatherSunny />}
            sx={{ background: "transparent", mt: "15px" }}
            _hover={{ color: "#037ade" }}
          />
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
              }}>
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
              }}>
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
                  }}>
                  Movies
                </MenuItem>
                <MenuItem
                  sx={{
                    fontWeight: 400,
                    fontFamily: "Bebas Neue, sans-serif",
                  }}>
                  TV Shows
                </MenuItem>
              </MenuList>
            </Menu>
          </Show>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
