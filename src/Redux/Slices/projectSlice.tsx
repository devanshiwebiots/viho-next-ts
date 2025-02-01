import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProjectData: any = createAsyncThunk('project/fetch', async () => {
  const res = await fetch('/api/ProjectApi');
  const result = await res.json();
  return result;
});

const projectSlice = createSlice({
  name: 'headerStates',
  initialState: {
    data: [],
  },
  reducers: {
    addProjectData: (state: any, action) => {
      state.data = [...state.data, { ...action.payload, id: state.data.length + 1, customers_img1: 'user/3.jpg', customers_img2: 'user/5.jpg', customers_img3: 'user/1.jpg', img: 'user/3.jpg' }];
      console.log(state.data);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjectData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default projectSlice.reducer;
export const { addProjectData } = projectSlice.actions;
