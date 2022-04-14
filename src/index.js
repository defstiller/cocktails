import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar/Navbar"
import Error from "./Error"
import About from "./AboutPage/About"
import Cocktail from "./Cocktails/Cocktail"
import Home from "./Home"
import CocktailDetails from './Cocktails/CocktailDetails';
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
  <Router>
    <Routes>
      <Route exact path="/" element={<><Navbar /><Home /></>} />
      <Route exact path="about" element={<><Navbar /><About /></>} />
      <Route path='/product/:id' element={<><Navbar /><CocktailDetails/></>} />
      <Route path="*" element={<Error />}/>
    </Routes>
  </Router>
  </StrictMode>
,
);

