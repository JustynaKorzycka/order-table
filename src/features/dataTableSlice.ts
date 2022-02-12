import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { DataTableState } from '../types'


const initialState: DataTableState = { data: [], status: null };

export const getData = createAsyncThunk(
  "dataTable/getData",
  async () =>  {
    return await fetch('./data.json' ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then(res =>res.response.data) 
  }
)

export const dataTableSlice = createSlice({
  name: "dataTable",
  initialState,
   reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending,
      (state) => {
        state.status = 'pending'
      });
    builder.addCase(getData.fulfilled,
      (state, { payload }) => {
        state.data = payload
        state.status = 'success'
      });
    builder.addCase(getData.rejected,
      (state) => {
        state.status = 'failed'
      });
  }
 
})

export default dataTableSlice.reducer;