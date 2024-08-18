import React from "react";
import { Box, Image, Text, Skeleton } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import FireIcon from "mdi-material-ui/Fire";
import posterNotFound from "assets/8030430_3828535.svg";
function CastSwiper({ data, url }) {
  const themeReducer = useSelector((state) => state.theme);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: 6,
        margin: "auto",
        height: "400px",
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
          {"Top Cast"}
        </Text>
        <FireIcon sx={{ width: "40px", height: "40px", mt: "5px" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {data &&
          data?.cast &&
          data?.cast?.length > 0 &&
          data?.cast?.map((obj, castId) => (
            <Box
              key={castId}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: "250px",
                height: "300px",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              <Image
                src={
                  url && obj?.profile_path
                    ? `${url + obj?.profile_path}`
                    : posterNotFound
                }
                alt={castId}
                sx={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <Text
                sx={{
                  color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
                  fontFamily: "Bebas Neue, sans-serif",
                  letterSpacing: "2px",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                {obj?.name}
              </Text>
              <Text
                sx={{
                  color: "gray",
                  fontFamily: "Bebas Neue, sans-serif",
                  letterSpacing: "2px",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  textWrap: "wrap",
                }}
              >
                {obj?.character}
              </Text>
            </Box>
          ))}

        {(!data || !data?.cast || data?.cast?.length === 0) &&
          Array.from({ length: 6 }).map((_, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: "250px",
                height: "300px",
              }}
            >
              <Skeleton
                sx={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
              />
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
          ))}
      </Box>
    </Box>
  );
}

export default CastSwiper;
