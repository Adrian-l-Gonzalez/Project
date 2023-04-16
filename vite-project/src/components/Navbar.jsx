import React from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    return (
            <>
           <h3>logo</h3>
           <nav>
            <a href="/#">Homme</a>
            <a href="/#">My Work</a>
            <a href="/#">Blog</a>
            <a href="/#">About Me</a> 
                <button>
                <FaTimes/>
                </button>    
                <button>
                    <FaBars/>
                </button>      
           </nav>
            </>
    )
}
export default Navbar;