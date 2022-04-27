import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<login />} />
      <Route path='/register' element={<Register />}/>
    <Login/>
    <Register/>   
     </Routes>
  ) 
}

export default App;