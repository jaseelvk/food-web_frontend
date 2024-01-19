import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import './App.css';
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";


function App() {
  return (
    <>
      <Router>
         <Routes>
           <Route path="/Signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
         </Routes>
       </Router>
    
    </>

  );
}

export default App;
