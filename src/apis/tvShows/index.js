import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiHeaders } from "../../constants";

export const topRatedTvShows = createAsyncThunk(
  "tv/topRated",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/tv/top_rated`,
        {
          headers: apiHeaders,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
