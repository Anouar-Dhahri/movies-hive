import React from "react";
import {
  Box,
  Button,
  IconButton,
  Text,
  Image,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  CircularProgress,
  CircularProgressLabel,
  Skeleton,
} from "@chakra-ui/react";
import FireIcon from "mdi-material-ui/Fire";
import { useSelector } from "react-redux";
import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import moment from "moment";
import posterNotFound from "assets/551334.jpg";
import { useNavigate } from "react-router-dom";
import DotsVerticalIcon from "mdi-material-ui/DotsVertical";

function CustomSwiper({
  title,
  swiperActions,
  actionValues,
  handleActionsValues,
  data,
  mediaType,
}) {
  const themeReducer = useSelector((state) => state.theme);
  const dataReducer = useSelector((state) => state.data);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "80%",
        height: "500px",
        maxHeight: "550px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "2rem",
          mb: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "2rem",
          }}
        >
          <Text
            fontSize="2rem"
            sx={{
              fontWeight: 500,
              fontFamily: "Rubik, sans-serif",
              color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
            }}
          >
            {title}
          </Text>
          <FireIcon sx={{ width: "40px", height: "40px", mt: "5px" }} />
        </Box>
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
      </Box>
      <Box>
        <Swiper
          slidesPerView={5}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[FreeMode, Navigation]}
          className="home-swiper"
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          {data?.length > 0 &&
            data?.map((item, idx) => (
              <SwiperSlide
                key={idx}
                onClick={() => console.log("Swiper")}
                className="home-swiper-slide"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                    }}
                    _hover={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/${item?.media_type || mediaType}/${item?.id}`)
                    }
                  >
                    <Image
                      src={
                        item?.poster_path
                          ? `${dataReducer?.url?.poster + item?.poster_path}`
                          : !item?.poster_path && item?.backdrop_path
                          ? `${
                              dataReducer?.url?.backdrop + item?.backdrop_path
                            }`
                          : posterNotFound
                      }
                      alt=""
                      loading="lazy"
                      sx={{
                        width: "90%",
                        height: "300px",
                        objectFit: "fill",
                        maxWidth: "90%",
                        margin: "auto",
                        borderRadius: "10px",
                      }}
                    />

                    <CircularProgress
                      value={item?.vote_average * 10}
                      color={
                        item?.vote_average < 5
                          ? "red"
                          : item?.vote_average < 7
                          ? "orange"
                          : "green"
                      }
                      sx={{
                        position: "absolute",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        bottom: -5,
                        left: 10,
                      }}
                    >
                      <CircularProgressLabel>
                        {item?.vote_average.toFixed(1)}
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "30px auto 10px auto",
                      top: 3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      flex: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <Text
                      sx={{
                        color:
                          themeReducer?.theme === "light" ? "#000" : "#FFE53B",
                        fontFamily: "Rubik, sans-serif",
                        letterSpacing: "2px",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                      }}
                    >
                      {item?.title || item?.name}
                    </Text>
                    <Text
                      sx={{
                        color: "gray",
                        fontFamily: "Rubik, sans-serif",
                        letterSpacing: "2px",
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                    >
                      {moment(
                        item?.release_date || item?.first_air_date
                      ).format("MMM D, YYYY")}
                    </Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}

          {data?.length === 0 &&
            Array.from({ length: 5 }).map((_, idx) => (
              <SwiperSlide key={idx} className="home-swiper-slide">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Skeleton
                      sx={{
                        width: "90%",
                        height: "300px",
                        maxWidth: "90%",
                        margin: "auto",
                        borderRadius: "10px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      margin: "30px auto 10px auto",
                      top: 3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Skeleton
                      sx={{
                        width: "100%",
                        height: "1.2rem",
                      }}
                    />
                    <Skeleton
                      sx={{
                        width: "80%",
                        height: "1rem",
                      }}
                    />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default CustomSwiper;
