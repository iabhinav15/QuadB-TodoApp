// This component displays the list of tasks. It also handles the edit, delete and toggle task completion status functionalities.

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/tasksSlice';
import { empty } from '../assets';
import EditTask from './EditTask';
import TaskBar from './TaskBar';


const TaskList = () => {

  // Get tasks from the store
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");

  // Edit a task
  const handleEditTask = (taskId, currentTitle) => {
    setEditTaskId(taskId);
    setEditedTaskTitle(currentTitle);
  };

  // Handle change in edited task title
  const handleOnChangeEditedTaskTitle = (e) => {
    setEditedTaskTitle(e.target.value);
  };

  // Save edited task
  const handleSaveEditedTask = (e) => {
    e.preventDefault();
    if(editedTaskTitle.trim() === ""){
      alert("Write someting!");
      return;
    }
    dispatch(editTask({ id: editTaskId, newTitle: editedTaskTitle }));
    setEditTaskId(null);
    setEditedTaskTitle('');
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Toggle task completion status
  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };


  return (
    <div className="mt-4 flex flex-col justify-center items-center">
      { 
        tasks.length === 0 ? 
        (<div className="text-center"> <img src={empty} /> No tasks to show </div>) : 
        tasks?.map((task) => 
          (<div key={task.id} className="sm:w-1/2 w-full p-3">
            {
              editTaskId !== task.id ? 
              // Displaying all tasks
              (<TaskBar task={task} handleToggleTask={handleToggleTask} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />) :
              // Displaying the task being edited
              (<EditTask handleSaveEditedTask={handleSaveEditedTask} editedTaskTitle={editedTaskTitle} handleOnChangeEditedTaskTitle={handleOnChangeEditedTaskTitle}  />) 
              
            }
          </div>))
      }
    </div>
  );
};

export default TaskList;
