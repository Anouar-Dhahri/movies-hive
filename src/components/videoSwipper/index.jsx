import React, { useState } from "react";
import { Box, Image, Text, Skeleton } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { VideoPlayer } from "components";
import FireIcon from "mdi-material-ui/Fire";
import YouTubeIcon from "mdi-material-ui/Youtube";
import "./style.css";
function VideoSwiper({ title, data }) {
  const themeReducer = useSelector((state) => state.theme);
  const [openPopup, setOpenPopup] = useState(false);
  const [videoId, setVideoId] = useState(null);

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: 6,
        margin: "auto",
        minHeight: "400px",
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
          data?.length > 0 &&
          data?.map((video) => (
            <Box
              key={video?.id}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: "300px",
                width: "300px",
                height: "300px",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              <Box
                className="image-container"
                onClick={() => handleVideoPopup(video?.key)}
              >
                <Image
                  src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  alt={video?.id}
                  sx={{ width: "300", height: "150px", borderRadius: "5px" }}
                />
                <Box className="overlay">
                  <YouTubeIcon className="youtubeIcon" />
                </Box>
              </Box>
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
                {video?.name}
              </Text>
            </Box>
          ))}

        {(!data || data?.length === 0) &&
          Array.from({ length: 6 }).map((_, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: "300",
                height: "300px",
              }}
            >
              <Skeleton
                sx={{
                  width: "300px",
                  height: "150px",
                  borderRadius: "5px",
                }}
              />
              <Skeleton
                sx={{
                  width: "100%",
                  height: "1.5rem",
                }}
              />
            </Box>
          ))}
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

export default VideoSwiper;
