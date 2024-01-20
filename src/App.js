import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
export default function App() {
  return (
<>
<Router>
  <Routes>
    <Route path='/' element={<Signup />} />
    <Route path='/login' element={<Login />} />
  </Routes>
</Router>
</>
  )
}
