import React from "react";
import { Box, Image, Text, Skeleton } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import FireIcon from "mdi-material-ui/Fire";
import avatarIcon from "assets/avatar.png";
function CastSwiper({ title, data, url }) {
  const themeReducer = useSelector((state) => state.theme);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: 6,
        margin: "auto",
        minHeight: "400px",
        height: "auto",
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
          gap: 2,
          overflowX: "auto",
          overflowY: "hidden",
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
                minHeight: "300px",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              <Image
                src={
                  url && obj?.profile_path
                    ? `${url + obj?.profile_path}`
                    : avatarIcon
                }
                alt={castId}
                sx={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
              <Text
                sx={{
                  color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
                  fontFamily: "Rubik, sans-serif",
                  letterSpacing: "2px",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                {obj?.name}
              </Text>
              <Text
                sx={{
                  color: "gray",
                  fontFamily: "Rubik, sans-serif",
                  letterSpacing: "2px",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  textWrap: "wrap",
                  textAlign: "center",
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
