// This component takes the user input and adds the task to the list.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <form className="mt-4 flex items-center justify-center">
      <input
        className="border rounded text-base font-normal px-4 py-2 mr-2 w-1/2"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      {/* Add new task button */}
      <button type="submit" className="bg-gray-500 text-white text-base font-semibold px-4 py-2 rounded" onClick={handleAddTask}>
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
