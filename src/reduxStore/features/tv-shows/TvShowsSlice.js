import { createSlice } from "@reduxjs/toolkit";
import { topRatedTvShows, popularTvShows } from "apis/tvShows";

const TvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    loading: false,
    tvShows: [],
    tvShow: {},
    trending: [],
    topRated: [],
    popular: [],
    success: false,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET TRENDING TV SHOWS
      .addCase(topRatedTvShows.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(topRatedTvShows.fulfilled, (state, action) => {
        state.loading = false;
        state.topRated = action.payload.results;
        state.success = true;
        state.message = "Top rated tv shows retrieved successfully";
      })
      .addCase(topRatedTvShows.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.success = false;
        state.message = "Error retrieving the trending tv shows list from TMDB";
      })
      // GET POPULAR TV SHOWS
      .addCase(popularTvShows.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(popularTvShows.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload.results;
        state.success = true;
        state.message = "Popular tv shows retrieved successfully";
      })
      .addCase(popularTvShows.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.success = false;
        state.message = "Error retrieving the popular tv shows list from TMDB";
      });
  },
});

export default TvShowsSlice.reducer;
