import { BookmarkSlice } from '@/Type/SideBarType';
import { createSlice } from '@reduxjs/toolkit';
import { ataData } from '../SliceData';

const initialState: BookmarkSlice = {
  bookmarkedData: [...ataData],
  linkItemsArray: [],
};
const BookMarkSliceHeader = createSlice({
  name: 'bookmark',
  initialState: initialState,
  reducers: {
    getLinkItemsArray: (state, action) => {
      state.linkItemsArray = action.payload;
    },
    handleBookmarkChange: (state, action) => {
      if (!action.payload.bookmarked) {
        state.bookmarkedData.push({ ...action.payload, bookmarked: !action.payload.bookmarked });
      } else {
        const tempt: any = [];
        state.bookmarkedData.forEach((ele) => {
          if (ele.id !== action.payload.id) {
            tempt.push(ele);
          }
        });
        state.bookmarkedData = tempt;
      }
      const temp = [...state.linkItemsArray];
      temp.splice(action.payload.id - 1, 1, { ...action.payload, bookmarked: !action.payload.bookmarked });
      state.linkItemsArray = temp;
    },
  },
});

export default BookMarkSliceHeader.reducer;
export const { getLinkItemsArray, handleBookmarkChange } = BookMarkSliceHeader.actions;
