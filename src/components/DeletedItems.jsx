// DeletedItems component is a modal that displays all the deleted tasks. It has two buttons for each task, one to restore the task and the other to delete it permanently. 

import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { restoreDeletedTask } from '../redux/deletedTaskSlice'
import { addTask } from '../redux/tasksSlice'

const DeletedItems = ({closeDeletedTask}) => {

  const deletedTask = useSelector((state) => state.deletedTasks)
  const dispatch = useDispatch()

  const handleClose = () => {
    closeDeletedTask()
  };

  const restoreTask = (task) => {
    dispatch(addTask({ task: task.title, dueDate: task.dueDate || '' }))
    dispatch(restoreDeletedTask(task.id))
  }

  const deleteTask = (task) => {
    dispatch(restoreDeletedTask(task.id))
  }

  return (
    <div className='fixed z-50 inset-0 bg-white'>
      <div className='min-h-screen pt-4 px-4 text-center sm:p-0'>
      <div className='flex justify-between px-6 pt-5 pb-2'>
        <p className='block font-medium text-xl text-left'>Deleted Items</p>
        <button type='button' onClick={handleClose}>
            <MdClose size={22} />
        </button>
      </div>
      { deletedTask.length === 0 ? <p className='text-center'>No deleted tasks</p> :
        deletedTask?.map((task, index) => {
          return (
            <div key={index} className='flex justify-between items-center sm:w-1/2 w-full mx-auto bg-gray-400 my-3 p-2 rounded-md '>
              <h2>{task.title}</h2>
              <p>{task.dueDate && <span className="text-sm text-black flex">Due Date - ({task.dueDate})</span>}</p>
              <div className='flex gap-4'>
                <button onClick={()=>restoreTask(task)} className='bg-green-400 p-2 rounded-md shadow-md'>
                  Restore
                </button>
                <button onClick={()=>deleteTask(task)} className='bg-red-500 p-2 rounded-md shadow-md'>
                  Delete
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default DeletedItems