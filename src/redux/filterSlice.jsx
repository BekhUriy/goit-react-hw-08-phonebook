//filterSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: ''
  },
  reducers: {
    onChangeFilter(state, action) {
       state.filter = action.payload;
    }
  },
})

export const { onChangeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;