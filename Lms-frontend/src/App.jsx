import './App.css'

import { Route, Routes } from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import Homepage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route> | 
        <Route path= "/about" element={<AboutUs/>} ></Route>

        <Route path="/signup" element={<Signup />}/>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
        
    </>
  )
}

export default App
