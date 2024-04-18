
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {

  return (

    <div className='min-h-screen bg-gray-200'>
      <Header />
      <TaskInput />
      <TaskList />
    </div>
    
  )
}

export default App
