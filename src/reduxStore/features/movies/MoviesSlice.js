import { createSlice } from "@reduxjs/toolkit";
import {
  upcomingMovies,
  trendingMovies,
  topRatedMovies,
  popularMovies,
} from "apis/movies";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    movies: [],
    movie: {},
    trending: [],
    topRated: [],
    popular: [],
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
        state.movies = [];
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
        state.movies = [];
        state.success = false;
        state.message = "Error retrieving the upcoming movies list from TMDB";
      })
      // GET TRENDING MOVIES
      .addCase(trendingMovies.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.trending = [];
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
        state.trending = [];
        state.success = false;
        state.message = "Error retrieving the trending movies list from TMDB";
      })
      // GET TRENDING MOVIES
      .addCase(topRatedMovies.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.topRated = [];
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
        state.topRated = [];
        state.success = false;
        state.message = "Error retrieving the trending movies list from TMDB";
      })
      // GET POPULAR MOVIES
      .addCase(popularMovies.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.popular = [];
      })
      .addCase(popularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload.results;
        state.success = true;
        state.message = "Popular movies retrieved successfully";
      })
      .addCase(popularMovies.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.popular = [];
        state.success = false;
        state.message = "Error retrieving the popular movies list from TMDB";
      });
  },
});

export default MoviesSlice.reducer;
