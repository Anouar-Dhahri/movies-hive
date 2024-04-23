import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./features/movies/MoviesSlice";
import TvShowsReducer from "./features/tv-shows/TvShowsSlice";
import ThemeReducer from "./features/theme/ThemeSlice";

const store = configureStore({
  reducer: {
    movies: MoviesReducer,
    tvShows: TvShowsReducer,
    theme: ThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
