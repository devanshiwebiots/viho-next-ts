import { createSlice } from '@reduxjs/toolkit';

const TableSlice = createSlice({
  name: 'TableData',
  initialState: {
    items: [],
  },
  reducers: {
    addTableData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default TableSlice.reducer;
export const { addTableData } = TableSlice.actions;
