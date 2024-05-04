// Header component is used to display the title of the application and a button to show the deleted tasks.
// The showDeletedTask function is passed as a prop to the Header component.

import { LuListTodo } from "react-icons/lu";

const Header = ({showDeletedTask}) => {

  // Show deleted tasks
  const showDeletedTaskWindow = () => {
    showDeletedTask()
  }

  return (
    <div className="relative">
      <div className="flex items-center sm:justify-center justify-start w-full h-16 bg-gray-400">
        <LuListTodo className="text-4xl text-black mr-1" />
        <h1 className="text-3xl font-bold text-center">Task Manager</h1>
      </div>
      <button type="button" onClick={showDeletedTaskWindow} className="bg-gray-600 p-3 rounded-md mr-2 mt-2 font-medium absolute right-0 top-0" >
        See Deleted tasks
      </button>
    </div>
  )
}

export default Header