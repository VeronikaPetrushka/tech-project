import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6699527d2069c438cd71f870.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/all",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/camper/camper");
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
