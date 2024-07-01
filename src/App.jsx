
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems' // Import the NavItems component from its source file
import './App.css'

function App() {
 

  return (
      <>
        <NavItems />
        <Outlet />
      </>
    )
  }

export default App