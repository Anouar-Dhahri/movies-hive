import { createSlice } from "@reduxjs/toolkit";
import { getGenres, getConfig } from "apis/data";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    url: {
      backdrop: "",
      poster: "",
      profile: "",
    },
    genres: [],
    success: false,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConfig.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(getConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.url = {
          backdrop: action.payload.images.secure_base_url + "original",
          poster: action.payload.images.secure_base_url + "original",
          profile: action.payload.images.secure_base_url + "original",
        };
        state.success = true;
        state.message = "Configuration retrieved successfully";
      })
      .addCase(getConfig.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.success = false;
        state.message = "Error retrieving the Configuration from TMDB";
      })
      //Genres
      .addCase(getGenres.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
        state.success = true;
        state.message = "Movies genres retrieved successfully";
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.success = false;
        state.message = "Error retrieving the upcoming movies genres from TMDB";
      });
  },
});

export default DataSlice.reducer;
