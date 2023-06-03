import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Header />
      <div className="app-wrapper-content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
