import { createSlice } from "@reduxjs/toolkit";
import {
  getGenres,
  getConfig,
  fetchData,
  discoverData,
  similarData,
  recommendationsData,
  videosData,
  creditsData,
  detailsData,
} from "apis/data";

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
    fetchedData: [],
    discoveredData: [],
    similar: [],
    recommendations: [],
    videos: [],
    credits: {},
    details: {},
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
        state.success = false;
        state.message = "Error retrieving the upcoming movies genres from TMDB";
      })
      // FETCH DATA
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.fetchedData = [...state.fetchedData, ...action.payload.results];
        state.success = true;
        state.message = "Fetched data retrieved successfully";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = "Error retrieving the fetched data from TMDB";
      })
      // DESCOVER DATA
      .addCase(discoverData.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(discoverData.fulfilled, (state, action) => {
        state.loading = false;
        state.discoveredData = [
          ...state.discoveredData,
          ...action.payload.results,
        ];
        state.success = true;
        state.message = "Discovered data retrieved successfully";
      })
      .addCase(discoverData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = "Error retrieving the data genres from TMDB";
      })

      // SIMILAR DATA
      .addCase(similarData.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(similarData.fulfilled, (state, action) => {
        state.loading = false;
        state.similar = action.payload.results;
        state.success = true;
        state.message = "Similar data retrieved successfully";
      })
      .addCase(similarData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = "Error retrieving the similar media from TMDB";
      })

      // RECOMMENDATION DATA
      .addCase(recommendationsData.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(recommendationsData.fulfilled, (state, action) => {
        state.loading = false;
        state.recommendations = action.payload.results;
        state.success = true;
        state.message = "Recommendations data retrieved successfully";
      })
      .addCase(recommendationsData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = "Error retrieving the recommendations data from TMDB";
      })

      // VIDEOS DATA
      .addCase(videosData.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(videosData.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload.results;
        state.success = true;
        state.message = "Videos data retrieved successfully";
      })
      .addCase(videosData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = "Error retrieving Videos data from TMDB";
      })

      // CREDETS DATA
      .addCase(creditsData.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(creditsData.fulfilled, (state, action) => {
        state.loading = false;
        state.credits = action.payload;
        state.success = true;
        state.message = "Credits data retrieved successfully";
      })
      .addCase(creditsData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = "Error retrieving credits data from TMDB";
      })

      // DETAILS DATA
      .addCase(detailsData.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(detailsData.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
        state.success = true;
        state.message = "Media details data retrieved successfully";
      })
      .addCase(detailsData.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.message = "Error retrieving details data from TMDB";
      });
  },
});

export default DataSlice.reducer;
