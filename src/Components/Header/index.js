import './index.css'
import { Contact } from '../../Pages/Contact';
import Menu from '../../Pages/Menu';
import Panier from '../../Pages/Panier';
import { Home } from '../../Pages/Home';
import {BrowserRouter,Routes,Route,Link } from "react-router-dom";
import img from '../../Assets/Panier.png';

export const Header = () =>{    

    return(
        <BrowserRouter>
        <header>
        
        <Link to="/Home">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Panier"  ><img src={img} id='icon' alt="err"/></Link>
    
        </header>

      
        <Routes>
        <Route path='/Home' Component={Home}></Route>
        <Route path='/Menu' Component={Menu}></Route>
        <Route path='/Contact' Component={Contact}></Route>
        <Route path='/Panier' Component={Panier}></Route>
        </Routes>
        </BrowserRouter>

    )
}