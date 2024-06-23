import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiHeaders } from "../../constants";

export const getConfig = createAsyncThunk(
  "data/url",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/configuration`,
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

export const getGenres = createAsyncThunk(
  "data/genres",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/movie/upcoming`,
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
