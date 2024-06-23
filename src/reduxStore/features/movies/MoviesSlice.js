import { createSlice } from "@reduxjs/toolkit";
import { upcomingMovies } from "apis/movies";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    movies: [],
    movie: {},
    success: false,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default MoviesSlice.reducer;
