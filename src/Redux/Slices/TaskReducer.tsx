import {  createSlice } from '@reduxjs/toolkit';
let initialState: any = { newTask: [], allTask: [] };

const TaskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    setAllTask: (state, action) => {
      state.allTask = action.payload;
    },
    AddNewTask: (state, action) => {
      const taskTemp = {
        id: state.allTask.length + 1,
        title: action.payload.title,
        collection: action.payload.collection,
        desc: action.payload.desc,
      };
      state.allTask.push(taskTemp);
    },
    RemoveTask: (state, action) => {
      state.allTask = state.allTask.filter((data: any) => data.id !== action.payload);
    },
  },
});

export default TaskSlice.reducer;
export const { setAllTask, AddNewTask, RemoveTask } = TaskSlice.actions;
