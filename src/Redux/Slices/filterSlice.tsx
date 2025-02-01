import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterData',
  initialState: {
    gridClass: '',
    columnClass: 'col-xl-3 col-lg-6 col-sm-6 xl-4',
    sidebarOpen: false,
  },
  reducers: {
    toggleRowGrid: (state) => {
      console.log('Toggle Row Grid');
      state.gridClass = 'list-view';
    },
    toggleColumnGrid: (state) => {
      state.gridClass = '';
      state.columnClass = 'col-xl-3 col-lg-6 col-sm-6 xl-4';
    },
    changeColumnClass: (state, action) => {
      state.columnClass = action.payload;
    },
    toggleSidebar: (state) => {
      console.log('working');
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export default filterSlice.reducer;
export const { toggleSidebar, toggleRowGrid, toggleColumnGrid, changeColumnClass } = filterSlice.actions;
