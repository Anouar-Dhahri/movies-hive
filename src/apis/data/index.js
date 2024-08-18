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
  async (options, { rejectWithValue }) => {
    try {
      let data = [];

      if (Array.isArray(options)) {
        const promises = options.map((option) =>
          axios.get(
            `${process.env.REACT_APP_TMDB_BASE_URL}/genre/${option}/list`,
            { headers: apiHeaders }
          )
        );

        const responses = await Promise.all(promises);

        // Extract genres from each response and flatten them into a single array
        const allGenres = responses.flatMap((response) => response.data.genres);

        // Eliminate duplicates by using a Map
        const uniqueGenresMap = new Map();
        allGenres.forEach((genre) => uniqueGenresMap.set(genre.id, genre));

        data = Array.from(uniqueGenresMap.values());
      } else if (typeof options === "string") {
        const response = await axios.get(
          `${process.env.REACT_APP_TMDB_BASE_URL}/genre/${options}/list`,
          { headers: apiHeaders }
        );
        data = response.data;
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchData = createAsyncThunk(
  "data/fetch",
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/search/multi?query=${query}&page=${page}`,
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

export const discoverData = createAsyncThunk(
  "data/discover",
  async ({ mediaType, page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/discover/${mediaType}?page=&page=${page}`,
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

export const similarData = createAsyncThunk(
  "data/similar",
  async ({ mediaType, mediaId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/${mediaType}/${mediaId}/similar`,
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

export const recommendationsData = createAsyncThunk(
  "data/recommendations",
  async ({ mediaType, mediaId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/${mediaType}/${mediaId}/recommendations`,
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

export const videosData = createAsyncThunk(
  "data/videos",
  async ({ mediaType, mediaId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/${mediaType}/${mediaId}/videos`,
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

export const creditsData = createAsyncThunk(
  "data/credits",
  async ({ mediaType, mediaId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/${mediaType}/${mediaId}/credits`,
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
