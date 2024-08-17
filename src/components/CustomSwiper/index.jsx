import React from "react";
import {
  Box,
  Button,
  Text,
  Image,
  CircularProgress,
  CircularProgressLabel,
  Skeleton,
} from "@chakra-ui/react";
import FireIcon from "mdi-material-ui/Fire";
import { useSelector } from "react-redux";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import moment from "moment";
import posterNotFound from "assets/8030430_3828535.svg";

function CustomSwiper({
  title,
  swiperActions,
  actionValues,
  handleActionsValues,
  data,
}) {
  const themeReducer = useSelector((state) => state.theme);
  const dataReducer = useSelector((state) => state.data);

  // const handleGenresNames = (genre_ids) => {
  //   const data = genre_ids?.slice(0, 2);
  //   return data.map((gId) => {
  //     const foundId = dataReducer.genres?.find((item) => item.id === gId);
  //     if (foundId) {
  //       return (
  //         <Text
  //           key={gId}
  //           sx={{
  //             backgroundColor: "#FFE53B",
  //             paddingLeft: 1,
  //             paddingRight: 1,
  //             borderRadius: "5px",
  //             fontFamily: "Bebas Neue, sans-serif",
  //             letterSpacing: "1px",
  //             height: "1rem",
  //           }}
  //         >
  //           {foundId?.name}
  //         </Text>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: "80%",
        height: "500px",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", height: "40px" }}>
          <Text
            fontSize={["25x", "25px", "30px", "40px", "40px"]}
            sx={{
              fontWeight: 500,
              marginBottom: "40px",
              fontFamily: "Bebas Neue, sans-serif",
              color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
            }}
          >
            {title}
          </Text>
          <FireIcon sx={{ width: "40px", height: "40px", mt: "5px" }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {swiperActions?.map((action, index) => {
            if (index === 0) {
              return (
                <Button
                  key={index}
                  name={action?.name}
                  value={action?.value}
                  onClick={handleActionsValues}
                  sx={{
                    width: "150px",
                    height: "40px",
                    backgroundColor:
                      actionValues[action?.name] === action?.value
                        ? "#000"
                        : "#FFE53B",
                    color:
                      actionValues[action?.name] === action?.value
                        ? "#FFE53B"
                        : "#000",
                    fontWeight: "bold",
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: "1rem",
                    letterSpacing: "2px",
                    borderLeftRadius: "45px",
                    borderRightRadius: "0px",
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
                    width: "150px",
                    height: "40px",
                    backgroundColor:
                      actionValues[action?.name] === action?.value
                        ? "#000"
                        : "#FFE53B",
                    color:
                      actionValues[action?.name] === action?.value
                        ? "#FFE53B"
                        : "#000",
                    fontWeight: "bold",
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: "1rem",
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
                    width: "150px",
                    height: "40px",
                    backgroundColor:
                      actionValues[action?.name] === action?.value
                        ? "#000"
                        : "#FFE53B",
                    color:
                      actionValues[action?.name] === action?.value
                        ? "#FFE53B"
                        : "#000",
                    fontWeight: "bold",
                    fontFamily: "Bebas Neue, sans-serif",
                    fontSize: "1rem",
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
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                    }}
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
                        fontFamily: "Bebas Neue, sans-serif",
                        letterSpacing: "2px",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                      }}
                    >
                      {item?.title || item?.name}
                    </Text>
                    <Text
                      sx={{
                        color: "gray",
                        fontFamily: "Bebas Neue, sans-serif",
                        letterSpacing: "2px",
                        fontSize: "1.2rem",
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
                        height: "1.5rem",
                      }}
                    />
                    <Skeleton
                      sx={{
                        width: "80%",
                        height: "1.2rem",
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
