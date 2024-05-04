import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import deletedTaskReducer from './deletedTaskSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    deletedTasks: deletedTaskReducer,
  },
});

export default store;
