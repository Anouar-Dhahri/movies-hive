import React, { useState, useEffect } from "react";
import { HeroBanner, CustomSwiper } from "../../components";
import { Box } from "@chakra-ui/react";
import { trendingMovies, topRatedMovies } from "apis/movies";
import { topRatedTvShows } from "apis/tvShows";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const moviesReducer = useSelector((state) => state.movies);
  const tvShowsReducer = useSelector((state) => state.tvShows);

  const [actionValues, setActionValues] = useState({
    trendingAction: "day",
    popularAction: "movie",
    topRatedAction: "movie",
  });

  console.log("actionValues==>", actionValues);
  useEffect(() => {
    if (actionValues.trendingAction) {
      dispatch(trendingMovies(actionValues.trendingAction));
    }
  }, [actionValues.trendingAction]);

  useEffect(() => {
    if (actionValues.topRatedAction === "movie") {
      dispatch(topRatedMovies());
    } else {
      dispatch(topRatedTvShows());
    }
  }, [actionValues.topRatedAction]);

  const handleActionsValues = (event) => {
    const { name, value } = event.target;
    setActionValues((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <HeroBanner />
      <CustomSwiper
        loading={moviesReducer?.loading}
        title={"Trending"}
        swiperActions={[
          { name: "trendingAction", title: "today", value: "day" },
          { name: "trendingAction", title: "this week", value: "week" },
        ]}
        actionValues={actionValues}
        handleActionsValues={handleActionsValues}
        data={moviesReducer?.trending}
      />

      <CustomSwiper
        loading={
          actionValues.topRatedAction === "movie"
            ? moviesReducer?.loading
            : tvShowsReducer.topRatedAction === "tv"
            ? tvShowsReducer?.loading
            : false
        }
        title={"What's Popular"}
        swiperActions={[
          { name: "popularAction", title: "movies", value: "movie" },
          { name: "popularAction", title: "tv shows", value: "tv" },
        ]}
        actionValues={actionValues}
        handleActionsValues={handleActionsValues}
        data={[]}
      />

      <CustomSwiper
        loading={
          actionValues.topRatedAction === "movie"
            ? moviesReducer?.loading
            : tvShowsReducer.topRatedAction === "tv"
            ? tvShowsReducer?.loading
            : false
        }
        title={"Top Rated"}
        swiperActions={[
          { name: "topRatedAction", title: "movies", value: "movie" },
          { name: "topRatedAction", title: "tv shows", value: "tv" },
        ]}
        actionValues={actionValues}
        handleActionsValues={handleActionsValues}
        data={
          actionValues.topRatedAction === "movie"
            ? moviesReducer?.topRated
            : tvShowsReducer?.topRated
        }
      />
    </Box>
  );
}

export default Home;
