
import { useState } from 'react';
import DeletedItems from './components/DeletedItems';
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'


function App() {

  const [showDeletedItems, setShowDeletedItems] = useState(false);

  // Show deleted tasks
  const showDeletedTask = () => {
    setShowDeletedItems(true)
  }

  // Close deleted tasks modal
  const closeDeletedTask = () => { 
    setShowDeletedItems(false)
  }

  return (
    <div>
      <div className='min-h-screen bg-gray-200'>
        <Header showDeletedTask={showDeletedTask} />
        <TaskInput />
        <TaskList />
      </div>
      
      {showDeletedItems && <DeletedItems closeDeletedTask={closeDeletedTask} />}

    </div>  
  )
}

export default App
