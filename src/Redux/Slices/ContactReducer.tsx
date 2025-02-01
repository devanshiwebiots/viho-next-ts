import { createSlice } from '@reduxjs/toolkit';

let initialState: any = { users: [], data: [], tempId: 0, editdata: {} };

const ContactReducer = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(action.payload, 'action.payload');
      const userTemp = {
        id: state.users.length + 1,
        avatar: action.payload.defaultUser,
        name: action.payload.data?.name,
        surname: action.payload.data.surname,
        email: action.payload.data.email,
        age: action.payload.data?.age,
        mobile: action.payload.data.mobile,
      };
      state.users.push(userTemp);
    },
    setEditData: (state, action) => {
      state.users = state.users.map((item: any) => (item.id === state.tempId ? action.payload : item));
    },
    setTempId: (state, action) => {
      state.tempId = action.payload;
    },
    deletedUser: (state, action) => {
      state.users = state.users.filter((data: any) => data.id !== action.payload);
    },
  },
});
export default ContactReducer.reducer;
export const { createUser, setEditData, setTempId, deletedUser } = ContactReducer.actions;
