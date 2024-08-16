import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiHeaders } from "../../constants";

export const upcomingMovies = createAsyncThunk(
  "movies/upcoming",
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

export const trendingMovies = createAsyncThunk(
  "movies/trending",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/trending/movie/${limit}`,
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

export const topRatedMovies = createAsyncThunk(
  "movies/topRated",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/movie/top_rated`,
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

export const popularMovies = createAsyncThunk(
  "movies/popular",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/movie/popular`,
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
