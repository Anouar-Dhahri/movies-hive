import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import posterNotFound from "assets/551334.jpg";

function CustomCard({ item, mediaType }) {
  const navigate = useNavigate();

  const themeReducer = useSelector((state) => state.theme);
  const dataReducer = useSelector((state) => state.data);

  const detailsHandler = (mediaType, mediaId) => {
    navigate(`/${mediaType}/${mediaId}`);
  };

  return (
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
        _hover={{ cursor: "pointer" }}
        onClick={() =>
          detailsHandler(item?.item?.media_type || mediaType, item?.id)
        }
      >
        <Image
          src={
            item?.poster_path
              ? `${dataReducer?.url?.poster + item?.poster_path}`
              : !item?.poster_path && item?.backdrop_path
              ? `${dataReducer?.url?.backdrop + item?.backdrop_path}`
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
            color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
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
          {moment(item?.release_date || item?.first_air_date).format(
            "MMM D, YYYY"
          )}
        </Text>
      </Box>
    </Box>
  );
}

export default CustomCard;
