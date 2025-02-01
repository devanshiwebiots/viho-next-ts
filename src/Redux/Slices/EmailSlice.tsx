import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllEmail: any = createAsyncThunk('fetchEmail', async () => {
  const res = await fetch('/api/EmailApi');
  const result = await res.json();
  return result;
});

const EmailSlice = createSlice({
  name: 'filterData',
  initialState: {
    allEmail: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllEmail.fulfilled, (state, action) => {
      state.allEmail = action.payload;
    });
  },
});

export default EmailSlice.reducer;
export const {} = EmailSlice.actions;
