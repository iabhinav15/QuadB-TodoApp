import { createSlice } from '@reduxjs/toolkit';


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem("tasks")) || [],

  reducers: {

    // Add a new task
    addTask: (state, action) => {
      state.unshift({ id: Date.now(), title: action.payload, completed: false });
      localStorage.setItem("tasks", JSON.stringify(state));
    },

    // Delete a task
    deleteTask: (state, action) => {
      state = state.filter(task => task.id !== action.payload)
      localStorage.setItem("tasks", JSON.stringify(state))
      return state;
    },

    // Toggle the completed status of a task
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state))
      }
    },

    // Edit a task
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const taskToEdit = state.find(task => task.id === id);
      if (taskToEdit) {
        taskToEdit.title = newTitle;
        localStorage.setItem("tasks", JSON.stringify(state))
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
