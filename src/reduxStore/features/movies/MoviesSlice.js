import { createSlice } from "@reduxjs/toolkit";
import { upcomingMovies, trendingMovies, topRatedMovies } from "apis/movies";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    movies: [],
    movie: {},
    trending: [],
    topRated: [],
    success: false,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET UPCOMING MOVIES
      .addCase(upcomingMovies.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(upcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.success = true;
        state.message = "Upcoming movies retrieved successfully";
      })
      .addCase(upcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.success = false;
        state.message = "Error retrieving the upcoming movies list from TMDB";
      })
      // GET TRENDING MOVIES
      .addCase(trendingMovies.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(trendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload.results;
        state.success = true;
        state.message = "Trending movies retrieved successfully";
      })
      .addCase(trendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.success = false;
        state.message = "Error retrieving the trending movies list from TMDB";
      })
      // GET TRENDING MOVIES
      .addCase(topRatedMovies.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(topRatedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.topRated = action.payload.results;
        state.success = true;
        state.message = "Top rated movies retrieved successfully";
      })
      .addCase(topRatedMovies.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.success = false;
        state.message = "Error retrieving the trending movies list from TMDB";
      });
  },
});

export default MoviesSlice.reducer;
