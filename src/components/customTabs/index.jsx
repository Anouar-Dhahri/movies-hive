import {
  Box,
  Button,
  IconButton,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import DotsVerticalIcon from "mdi-material-ui/DotsVertical";

function CustomTabs({ swiperActions, handleActionsValues, actionValues }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: "0.7rem",
        zIndex: 1000,
      }}
    >
      <Show above={"md"}>
        {swiperActions?.map((action, index) => {
          if (index === 0) {
            return (
              <Button
                key={index}
                name={action?.name}
                value={action?.value}
                onClick={handleActionsValues}
                sx={{
                  minWidth: "100px",
                  height: "2rem",
                  backgroundColor:
                    actionValues[action?.name] === action?.value
                      ? "#000"
                      : "#FFE53B",
                  color:
                    actionValues[action?.name] === action?.value
                      ? "#FFE53B"
                      : "#000",
                  fontWeight: "bold",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  borderLeftRadius: "45px",
                  borderRightRadius: "0px",
                  textTransform: "capitalize",
                }}
                _hover={{
                  backgroundColor: "#000",
                  color: "#FFE53B",
                }}
              >
                {action?.title}
              </Button>
            );
          } else if (index + 1 === swiperActions?.length) {
            return (
              <Button
                key={index}
                name={action?.name}
                value={action?.value}
                onClick={handleActionsValues}
                sx={{
                  minWidth: "100px",
                  height: "2rem",
                  backgroundColor:
                    actionValues[action?.name] === action?.value
                      ? "#000"
                      : "#FFE53B",
                  color:
                    actionValues[action?.name] === action?.value
                      ? "#FFE53B"
                      : "#000",
                  fontWeight: "bold",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  borderRightRadius: "45px",
                  borderLeftRadius: "0px",
                }}
                _hover={{
                  backgroundColor: "#000",
                  color: "#FFE53B",
                }}
              >
                {action?.title}
              </Button>
            );
          } else {
            return (
              <Button
                key={index}
                name={action?.name}
                value={action?.value}
                onClick={handleActionsValues}
                sx={{
                  minWidth: "100px",
                  height: "2rem",
                  backgroundColor:
                    actionValues[action?.name] === action?.value
                      ? "#000"
                      : "#FFE53B",
                  color:
                    actionValues[action?.name] === action?.value
                      ? "#FFE53B"
                      : "#000",
                  fontWeight: "bold",
                  fontFamily: "Rubik, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  borderRadius: "0px",
                }}
                _hover={{
                  backgroundColor: "#000",
                  color: "#FFE53B",
                }}
              >
                {action?.title}
              </Button>
            );
          }
        })}
      </Show>

      <Show below={"md"}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<DotsVerticalIcon />}
            _hover={{ backgroundColor: "#000", color: "#FFE53B" }}
            _active={{ backgroundColor: "#000", color: "#FFE53B" }}
            sx={{
              backgroundColor: "#FFE53B",
              color: "#000",
            }}
          />
          <MenuList>
            {swiperActions?.map((action, index) => (
              <MenuItem
                key={index}
                name={action?.name}
                value={action?.value}
                onClick={handleActionsValues}
                sx={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontFamily: "Bebas Neue, sans-serif",
                  letterSpacing: "2px",
                  backgroundColor:
                    actionValues[action?.name] === action?.value
                      ? "#000"
                      : "transparent",
                  color:
                    actionValues[action?.name] === action?.value
                      ? "#FFE53B"
                      : "#000",
                }}
              >
                {action?.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Show>
    </Box>
  );
}

export default CustomTabs;
