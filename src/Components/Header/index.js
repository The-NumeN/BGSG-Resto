import './index.css'
import { Contact } from '../../Pages/Contact';
import { Home } from '../../Pages/Home';
import { Panier } from '../../Pages/Panier';
import img from "../../Assets/Panier.png";
import {BrowserRouter,Routes,Route,Link } from "react-router-dom";

export const Header = () =>{
    
    return(
        <BrowserRouter>
        <header>
        
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Panier" ><img src={img} id='icon' alt='Erreur'/></Link>
        </header>
        <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Contact' Component={Contact}></Route>
        <Route path='/Panier' Component={Panier}></Route>
        </Routes>
        </BrowserRouter>
       
    )
}