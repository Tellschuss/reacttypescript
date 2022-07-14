import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAirport } from "../../components/models/models";

interface AirportState {
  loading: boolean;
  error: string;
  airports: IAirport[];
}

const initialState: AirportState = {
  loading: false,
  error: "",
  airports: [],
};

export const airportSlice = createSlice({
  name: "airport",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSucccess(state, action: PayloadAction<IAirport[]>) {
      state.loading = false;
      state.airports = action.payload;
    },
    fetchError(state, action: PayloadAction) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default airportSlice.reducer