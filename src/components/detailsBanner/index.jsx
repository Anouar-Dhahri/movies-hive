import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  Skeleton,
  CircularProgress,
  CircularProgressLabel,
  Button,
} from "@chakra-ui/react";
import posterNotFound from "assets/551334.jpg";
import moment from "moment";
import { useSelector } from "react-redux";
import YouTubeIcon from "mdi-material-ui/Youtube";
import { VideoPlayer } from "components";

function DetailsBanner({ data, video, crew, url }) {
  const themeReducer = useSelector((state) => state.theme);

  const [openPopup, setOpenPopup] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const movieTitleStyle = {
    color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
    fontFamily: "Rubik, sans-serif",
    letterSpacing: "2px",
    fontSize: "3rem",
    fontWeight: 500,
    textWrap: "wrap",
  };

  const titleStyle = {
    color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
    fontFamily: "Rubik, sans-serif",
    letterSpacing: "2px",
    fontSize: "1.5rem",
    fontWeight: 500,
    textWrap: "wrap",
  };

  const subTitleStyle = {
    color: "gray",
    fontFamily: "Rubik, sans-serif",
    letterSpacing: "2px",
    fontSize: "1.5rem",
    fontWeight: 300,
    textWrap: "wrap",
  };

  const handleOpenClosePopup = () => {
    if (!openPopup) {
      setOpenPopup(true);
    } else {
      setOpenPopup(false);
      setVideoId(null);
    }
  };
  const handleVideoPopup = (videoId) => {
    if (videoId) {
      setOpenPopup(true);
      setVideoId(videoId);
    }
  };

  const handleRunTime = (runTime) => {
    const hours = Math.floor(runTime / 60);
    const minutes = runTime % 60;

    const formattedTime = `${hours}h ${minutes}m`;
    return formattedTime;
  };
  const directors = crew
    ?.filter((d) => d.job === "Director")
    ?.map((d) => d.name);

  const writers = crew
    ?.filter(
      (w) => w.job === "Screenplay" || w.job === "Story" || w.job === "Writer"
    )
    ?.map((w) => w.name);

  console.log("directors==>", directors);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "column", "row", "row", "row"],
        width: "80%",
        gap: 6,
        margin: "auto",
        height: "600px",
      }}
    >
      <Image
        src={
          url && data?.poster_path
            ? `${url + data?.poster_path}`
            : posterNotFound
        }
        width={"350px"}
        height={"550px"}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          <Text sx={movieTitleStyle}>{data?.title}</Text>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
          {data?.genres?.map((genre) => (
            <Text
              key={genre.id}
              sx={{
                backgroundColor: "#FFE53B",
                paddingLeft: 1,
                paddingRight: 1,
                borderRadius: "5px",
                fontFamily: "Rubik, sans-serif",
                letterSpacing: "1px",
                height: "1.5rem",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
            >
              {genre?.name}
            </Text>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 8, flexDirection: "row" }}>
          <CircularProgress
            value={data?.vote_average * 10}
            color={
              data?.vote_average < 5
                ? "red"
                : data?.vote_average < 7
                ? "orange"
                : "green"
            }
            thickness={"5px"}
            size="100px"
            sx={{
              borderRadius: "50%",
              backgroundColor: "transparent",
            }}
          >
            <CircularProgressLabel
              sx={{
                color: themeReducer.theme === "light" ? "#000" : "#fff",
                fontWeight: "bold",
                fontFamily: "Rubik, sans-serif",
                fontSize: "2rem",
              }}
            >
              {data?.vote_average?.toFixed(1)}
            </CircularProgressLabel>
          </CircularProgress>
          <Button
            leftIcon={<YouTubeIcon sx={{ fontSize: "3rem" }} />}
            variant="text"
            fontFamily="Rubik, sans-serif"
            fontSize="1.5rem"
            mt="1.5rem"
            fontColor="#000"
            backgroundColor={"#FFE53B"}
            height="50px"
            borderRadius={"10px"}
            onClick={() => handleVideoPopup(video?.key)}
          >
            Watch Trailer
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
          <Text sx={titleStyle}>Overview</Text>
          <Text sx={subTitleStyle}>{data?.overview}</Text>
        </Box>

        <Box sx={{ display: "flex", gap: 4, flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: ["column", "column", "row", "row", "row"],
            }}
          >
            <Text sx={titleStyle}>Status:</Text>
            <Text sx={subTitleStyle}>{data?.status}</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: ["column", "column", "row", "row", "row"],
            }}
          >
            <Text sx={titleStyle}>Release Date:</Text>
            <Text sx={subTitleStyle}>
              {moment(data?.release_date).format("MMM D, YYYY")}
            </Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: ["column", "column", "row", "row", "row"],
            }}
          >
            <Text sx={titleStyle}>Runtime:</Text>
            <Text sx={subTitleStyle}>{handleRunTime(data?.runtime)} </Text>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
          <Text sx={titleStyle}>Director:</Text>
          <Text sx={subTitleStyle}>
            {directors?.length > 0 && directors?.join(", ")}
          </Text>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
          <Text sx={titleStyle}>Writer:</Text>
          <Text sx={subTitleStyle}>
            {writers?.length > 0 && writers?.join(", ")}
          </Text>
        </Box>
      </Box>
      {videoId && openPopup && (
        <VideoPlayer
          videoId={videoId}
          openPopup={openPopup}
          handleOpenClosePopup={handleOpenClosePopup}
        />
      )}
    </Box>
  );
}

export default DetailsBanner;
