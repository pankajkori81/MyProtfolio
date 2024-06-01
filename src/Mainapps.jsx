import React, { useState } from "react";

import {BrowserRouter , Router , Routes , Route , Link}  from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import "./Mainapps.css";
import Service from "./Pages/Service";
import Connectwithme from "./Pages/Connectwithme";
import Headerinfo from "./Components/Headerinfo";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";


function Mainapps(){


  const [menuOpen, setMenuOpen ]=useState(false);


  // function openclick(){
  //   setMenuOpen(!menuOpen);
  // }

    return(
        <div>

          
          <BrowserRouter>


          <div className="logo">
           <img src="logo_transparent.png" alt="" />
         </div>

        

         <div className="navbar">
         <div className="menu" onClick={()=>{
          setMenuOpen(!menuOpen);
         }}>
          <span></span>
          <span></span>
          <span></span>
         </div>
                <ul className={menuOpen ? "open" : ""}>
                <li><a  href="#"><Link className="nav1" to="/">Home</Link></a></li>
                <li><a  href="#"><Link className="nav1" to="/about">About</Link></a></li>
                <li><a  href="#"><Link className="nav1" to="/service">Service</Link></a></li>
                <li><a  href="#"><Link className="nav1" to="/skills">Skills</Link></a></li>
                <li><a  href="#"><Link className="nav1" to="/project">Projects</Link></a></li>
                {/* <li><a  href="#"><Link className="nav2" to="/connectwithme">Connect With Me</Link></a></li>
                 */}

                <li><a  href="#"><Link className="nav2" to="/contact">Contact Us</Link></a></li>
                </ul>
           

         </div>


            

          <Routes>
            <Route  path="/" element Component={Headerinfo}/>
            <Route  path="/about" element Component={About} />
            <Route path="/service" element Component={Service}/>
            <Route path="/contact" element Component={Contact} />
            <Route path="/skills" element Component={Skills} />
            <Route path="/project" element Component={Project} />
 

            <Route path="/connectwithme" element Component={Connectwithme} />
          </Routes>

          
        


          
          </BrowserRouter>

        

           

        </div>
    )
};

export default Mainapps;