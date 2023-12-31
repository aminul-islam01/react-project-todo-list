
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home/Home'
import Products from './Components/Home/Products/Products'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Home></Home>
      <Products></Products> */}
    </div>
  )
}

export default App
