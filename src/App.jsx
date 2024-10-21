import { NavLink } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-center text-5xl font-bold mb-24'>Coffee Store</h1>
      <div className="flex gap-4 justify-center">
        <NavLink to="/addCoffee" className='link link-primary'>Add Coffee</NavLink>
        <NavLink to="/updateCoffee" className='link link-primary'>Update Coffee</NavLink>
     </div>
    </>
  )
}

export default App
