import './App.css'

import React from 'react';
import './index.css'
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact  from './Pages/Contact';
import Panier from './Pages/Panier';

import {BrowserRouter,Routes,Route,Link } from "react-router-dom";
import img from './Assets/Panier.png';
import { Footer } from './Components/Footer';

function App() {

    return(
      <div className='App'>
         <BrowserRouter>
        <header>
        
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Panier"><img src={img} id='icon' alt="err"/></Link>
    
        </header>

      
        <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Menu' Component={Menu}></Route>
        <Route path='/Contact' Component={Contact}></Route>
        <Route path='/Panier' Component={Panier}></Route>
        </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </div>
       

    )
}


export default App;
