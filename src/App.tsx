
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { EmployeeDashboard } from './pages/EmployeesDashboard'

function App() {

  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />   
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/employees' element={<EmployeeDashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
