import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Students from "./components/Students";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/students" element={<Students/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;

