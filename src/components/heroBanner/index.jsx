import React, { useState, useEffect } from "react";
import { Box, Image, Spinner, Text, Input, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovies } from "../../apis/movies";
import { useNavigate } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";
// import useProgress from "hooks/useProgress";

function HeroBanner() {
  /**redux */
  const dispatch = useDispatch();
  const dataReducer = useSelector((state) => state.data);
  const moviesReducer = useSelector((state) => state.movies);
  const themeReducer = useSelector((state) => state.theme);

  const navigate = useNavigate();

  const [randomBackdrop, setRandomBackdrop] = React.useState(null);
  const [query, setQuery] = useState("");
  // const progressBarValue = useProgress(randomBackdrop ? 10000 : 0); // Use the hook

  useEffect(() => {
    dispatch(upcomingMovies());
  }, []);

  // const memorizedMovies = React.useMemo(moviesReducer?.movies);
  useEffect(() => {
    // Function to select a random backdrop
    const selectRandomBackdrop = () => {
      if (moviesReducer?.movies.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * moviesReducer?.movies.length
        );
        setRandomBackdrop(moviesReducer.movies[randomIndex].backdrop_path);
      }
    };

    // Select an initial random backdrop
    selectRandomBackdrop();

    // Set up the interval to select a new random backdrop every 5 seconds
    const intervalId = setInterval(selectRandomBackdrop, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [moviesReducer?.movies]);

  const searchQueryHandler = (event) => {
    if (
      (event.key === "Enter" || event._reactName === "onClick") &&
      query.length > 0
    ) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <Box
      width="100%"
      height="700px"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {moviesReducer?.loading && moviesReducer?.movies?.length === 0 ? (
        <Spinner size="xl" sx={{ position: "absolute", zIndex: 999 }} />
      ) : (
        <>
          <Image
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              overflow: "hidden",
              background: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(3.5px)",
              "-webkit-backdrop-filter": "blur(3.5px)",
            }}
            loading="lazy"
            src={dataReducer?.url?.backdrop + randomBackdrop}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#FFF",
              textAlign: "center",
              position: "relative",
              maxWidth: "800px",
              margin: " 0 auto",
            }}
          >
            <Text
              fontSize={["60x", "60px", "60px", "70px", "70px"]}
              sx={{
                fontWeight: 700,
                marginBottom: "10px",
                fontFamily: "Bebas Neue, sans-serif",
              }}
            >
              Welcome.
            </Text>
            <Text
              fontSize={["25x", "25px", "30px", "40px", "40px"]}
              sx={{
                fontWeight: 500,
                marginBottom: "40px",
                fontFamily: "Bebas Neue, sans-serif",
              }}
            >
              Millions of movies, TV shows and people to discover. Explore now.
            </Text>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Input
                type="search"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                sx={{
                  width: [
                    "calc(100% - 100px)",
                    "calc(100% - 100px)",
                    "calc(100% - 100px)",
                    "calc(100% - 150px)",
                    "calc(100% - 150px)",
                  ],
                  height: "60px",
                  backgroundColor: "#FFF",
                  border: "none",
                  borderRadius: "30px 0 0 30px",
                  padding: "0 15px",
                  fontSize: "20px",
                  color: "#000",
                  fontFamily: "Bebas Neue, sans-serif",
                  letterSpacing: "2px",
                }}
                _focusVisible={{ outline: "none" }}
              />
              <Button
                sx={{
                  width: "100px",
                  height: "60px",
                  backgroundColor: "#222",
                  color: "#FFF",
                  outline: 0,
                  border: 0,
                  borderRadius: "0 30px 30px 0",
                  fontSize: "20px",
                  lineHeight: "60px",
                  cursor: "pointer",
                  letterSpacing: "2px",
                  fontFamily: "Bebas Neue, sans-serif",
                  padding: "0 1rem 0 1rem",
                }}
                _hover={{ color: "#FFE53B" }}
                _active={{ background: "transparent" }}
                onClick={searchQueryHandler}
              >
                Search
              </Button>
            </Box>
          </Box>
        </>
      )}

      <Box
        sx={{
          width: "100%",
          height: "50px",
          background: `linear-gradient(180deg,rgba(4, 21, 45, 0) 0%,${
            themeReducer?.theme === "dark" ? "#1a1e2c" : "#fff"
          } 79.17%)`,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      ></Box>
    </Box>
  );
}

export default HeroBanner;
