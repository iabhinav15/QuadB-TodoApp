import { createSlice } from '@reduxjs/toolkit';


const deletedTaskSlice = createSlice({
  name: 'deletedTasks',
  initialState: JSON.parse(localStorage.getItem("deletedTasks")) || [],
  
  reducers: {
    
    // Add a deleted task
    addDeletedTask: (state, action) => {
      state.unshift(action.payload);
      localStorage.setItem("deletedTasks", JSON.stringify(state));
    },

    // Restore/delete a deleted task
    restoreDeletedTask: (state, action) => {
      state = state.filter(task => task.id !== action.payload)
      localStorage.setItem("deletedTasks", JSON.stringify(state))
      return state;
    },

  },
});

export const { addDeletedTask, restoreDeletedTask, deleteDeletedTask } = deletedTaskSlice.actions;
export default deletedTaskSlice.reducer;