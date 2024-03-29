import React from 'react';
import "./App.css";
import { Route, Routes} from "react-router-dom";
import { Box} from "@mui/material";
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
   <Box className='main'>
     <Navbar/>
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
     </Routes>
     <Footer/>
    </Box>
  )
}

export default App
