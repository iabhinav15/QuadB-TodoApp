/* This is task component. It has a task object, and three functions to handle toggling the task, editing the task, and deleting the task. The task object has the following properties: 
//   id: A unique identifier for the task.
//   title: The content of the task.
//   completed: A boolean value indicating whether the task is completed or not.
- The handleToggleTask function toggles the completed status of the task. 
- The handleEditTask function sets the task id and title/content to be edited. 
- The handleDeleteTask function deletes the task.
*/

import { MdOutlineModeEdit } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'

const TaskBar = ({task, handleToggleTask, handleEditTask, handleDeleteTask}) => {

  return (
    <div className="flex items-center justify-between px-3 py-2 rounded bg-gray-400 ">
      <div className="flex items-center">
        {/* Checkbox to toggle task completion status */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleToggleTask(task.id)}
          className="checked:border-transparent h-4 w-4 rounded cursor-pointer"
        />
        <span className={`flex-grow ml-2 text-lg font-medium ${task.completed ? 'line-through' : ''}`}>
          {task.title}
        </span>
      </div>
      <div>
        {/* Edit task button */}
        <button className="ml-2 px-2 py-1 bg-gray-500 rounded" onClick={() => handleEditTask(task.id, task.title)}>
          <MdOutlineModeEdit size={25} color='white' />
        </button>
        {/* Delete task button */}
        <button className="ml-2 px-2 py-1 bg-orange-600 rounded" onClick={() => handleDeleteTask(task.id)}>
          <RiDeleteBinLine size={25} color="white"  />
        </button>
      </div>
    </div>
  )
}

export default TaskBar