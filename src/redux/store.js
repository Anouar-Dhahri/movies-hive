import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./features/movies/MoviesSlice";
import TvShowsReducer from "./features/tv-shows/TvShowsSlice";

const store = configureStore({
  reducer: {
    movies: MoviesReducer,
    tvShows: TvShowsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
