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
    fontSize: "2.5rem",
    fontWeight: 500,
    textWrap: "wrap",
  };

  const titleStyle = {
    color: themeReducer?.theme === "light" ? "#000" : "#FFE53B",
    fontFamily: "Rubik, sans-serif",
    letterSpacing: "2px",
    fontSize: "1.2rem",
    fontWeight: 500,
    textWrap: "wrap",
  };

  const subTitleStyle = {
    color: "gray",
    fontFamily: "Rubik, sans-serif",
    letterSpacing: "1px",
    fontSize: "1.2rem",
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

  return (
    <Box
      position={"relative"}
      width="100%"
      minHeight="700px"
      marginBottom={"2rem"}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.1,
          overflow: "hidden",
        }}
      >
        <Image
          src={
            url && data?.poster_path
              ? `${url + data?.poster_path}`
              : posterNotFound
          }
          alt="backdrop-img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row", "row", "row"],
          width: "80%",
          height: "auto",
          mt: "100px",
          gap: 6,
          ml: "auto",
          mr: "auto",
          mb: ["2rem", "2rem", "0", "0", "0"],
        }}
      >
        {url && data ? (
          <Image
            src={
              url && data?.poster_path
                ? `${url + data?.poster_path}`
                : posterNotFound
            }
            width={["100%", "100%", "350px", "350px", "350px"]}
            height={"550px"}
            borderRadius={"1rem"}
          />
        ) : (
          <Skeleton width={"350px"} height={"550px"} borderRadius={"1rem"} />
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            {data ? (
              <Text sx={movieTitleStyle}>{data?.title}</Text>
            ) : (
              <Skeleton
                sx={{
                  width: "30%",
                  height: "2.5rem",
                }}
              />
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
            {data &&
              data?.genres?.map((genre) => (
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
            {!data &&
              Array.from({ length: 5 }).map((_, idx) => (
                <Skeleton
                  sx={{
                    width: "5rem",
                    height: "1.5rem",
                  }}
                />
              ))}
          </Box>

          <Box sx={{ display: "flex", gap: 8, flexDirection: "row" }}>
            {data && (
              <>
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
              </>
            )}
            {!data && (
              <>
                <Skeleton
                  width={"100px"}
                  height={"100px"}
                  borderRadius={"50%"}
                />
                <Skeleton width={"300px"} height={"50px"} mt="1.5rem" />
              </>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
            {data && (
              <>
                <Text sx={titleStyle}>Overview</Text>
                <Text sx={subTitleStyle}>{data?.overview}</Text>
              </>
            )}
            {!data && (
              <>
                <Skeleton width={"100px"} height={"1.2rem"} />
                <Skeleton height={"1.2rem"} />
                <Skeleton height={"1.2rem"} />
                <Skeleton height={"1.2rem"} />
              </>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: ["column", "column", "column", "column", "row"],
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "row",
              }}
            >
              {data && (
                <>
                  <Text sx={titleStyle}>Status:</Text>
                  <Text sx={subTitleStyle}>{data?.status}</Text>
                </>
              )}

              {!data && (
                <>
                  <Skeleton width={"150px"} height={"1.2rem"} />
                  <Skeleton width={"150px"} height={"1.2rem"} />
                </>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "row",
              }}
            >
              {data && (
                <>
                  <Text sx={titleStyle}>Release Date:</Text>
                  <Text sx={subTitleStyle}>
                    {moment(data?.release_date).format("MMM D, YYYY")}
                  </Text>
                </>
              )}
              {!data && (
                <>
                  <Skeleton width={"150px"} height={"1.2rem"} />
                  <Skeleton width={"150px"} height={"1.2rem"} />
                </>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "row",
              }}
            >
              {data && (
                <>
                  <Text sx={titleStyle}>Runtime:</Text>
                  <Text sx={subTitleStyle}>
                    {handleRunTime(data?.runtime)}{" "}
                  </Text>
                </>
              )}

              {!data && (
                <>
                  <Skeleton width={"150px"} height={"1.2rem"} />
                  <Skeleton width={"150px"} height={"1.2rem"} />
                </>
              )}
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
            {data && (
              <>
                <Text sx={titleStyle}>Director:</Text>
                <Text sx={subTitleStyle}>
                  {directors?.length > 0 && directors?.join(", ")}
                </Text>
              </>
            )}

            {!data && (
              <>
                <Skeleton width={"150px"} height={"1.2rem"} />
                <Skeleton width={"150px"} height={"1.2rem"} />
              </>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 1, flexDirection: "row" }}>
            {data && (
              <>
                <Text sx={titleStyle}>Writer:</Text>
                <Text sx={subTitleStyle}>
                  {writers?.length > 0 && writers?.join(", ")}
                </Text>
              </>
            )}

            {!data && (
              <>
                <Skeleton width={"150px"} height={"1.2rem"} />
                <Skeleton width={"150px"} height={"1.2rem"} />
              </>
            )}
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
    </Box>
  );
}

export default DetailsBanner;
