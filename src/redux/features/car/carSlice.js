import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  carDetails: {},
  carConfig: {
    make: '',
    model: '',
    year: '',
  }

}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setMake: (state, action) => {
      state.carConfig.make = action.payload;
    },
    setModel: (state, action) => {
      state.carConfig.model = action.payload
    },
    setYear: (state, action) => {
      state.carConfig.year = action.payload;
    },
    setAllCar: (state, action) => {
      state.carConfig.make = action.payload.make;
      state.carConfig.model = action.payload.model;
      state.carConfig.year = action.payload.year;
    },
    setAllCarDetails: (state, action) => {
      state.carDetails = action.payload;
    }
  }
})

export const { setMake, setModel, setYear, setAllCar, setAllCarDetails} = carSlice.actions;

export default carSlice.reducer;