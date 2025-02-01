import { createSlice } from '@reduxjs/toolkit';

const StickySlice = createSlice({
  name: 'sticky',
  initialState: {
    notesData: [],
  },
  reducers: {
    setNotes: (state, action) => {
      state.notesData = action.payload;
    },
  },
});
export default StickySlice.reducer;
export const { setNotes } = StickySlice.actions;
