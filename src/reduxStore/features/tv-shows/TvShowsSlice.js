import { createSlice } from "@reduxjs/toolkit";

const TvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    theme: "light",
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase();
  },
});

export default TvShowsSlice.reducer;
