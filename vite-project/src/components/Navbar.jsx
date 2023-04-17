import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import '../styles/navBarStyles.css'


const Navbar = (props) => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsiveNav");
    }

    return (
            <>
            <header>
           <h3>logo</h3>
           <nav ref={navRef}>
            <a href="/#">{props.enlaceUno}</a>
            <a href="/#">{props.enlaceDos}</a>
            <a href="/#">{props.enlaceTres}</a>
            <a href="/#">{props.enlaceCuatro}</a> 
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
                </button> 
                </nav>   
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>      
           
           </header>
            </>
    )
}
export default Navbar;


    
    


