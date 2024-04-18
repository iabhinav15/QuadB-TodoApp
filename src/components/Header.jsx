// Header component

import { LuListTodo } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-16 bg-gray-400">
      <LuListTodo className="text-4xl text-black mr-1" />
      <h1 className="text-3xl font-bold text-center">Task Manager</h1>
    </div>
  )
}

export default Header