import React from "react";
import './Headerinfo.css';

import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Sectionpart from "./Sectionpart";


function Headerinfo(){

    const connectnetwork=useNavigate();

    function gotoconnect(){
        connectnetwork("/connectwithme");

    }

    return(
        <div>
         
         <div className="portfolio-part">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="Profile-img" />
            <h1> <span>Hello! This is Pankaj Kori ,</span> Full Stack Web Developer Based in INDIA. </h1>
            <p>I am a full stack developer from india with 3+ years of experience in multiple companies like Microsoft , Wipro and Amazon.   </p>
            <button type="submit" className="btn1" onClick={gotoconnect} > Connect With Me</button>
            <button type="submit" className="btn2">My Resume</button>
         </div>
         {/* <div className="border-line"></div> */}

         <Sectionpart/>

         <div className="join-fees">
                <div className="fees-card">
                    <div className="web-cards">
                        <h3>- Basic -</h3>
                        <hr className="lines"  />

                        <h1>5000Rs.</h1>

                        <p>- 3 Days -</p>
                        <p>- 3 Pages -</p>
                        <p>- Featured -</p>
                        <p>- Responsive Design -</p>
                        <button className="fees-btn">PURCHASE NOW</button>

                    </div>

                    <div className="web-cards">
                        <h3>- Preminum -</h3>
                        <hr className="lines"  />

                        <h1>10,000Rs.</h1>

                        <p>- 2 Days -</p>
                        <p>- 5 Pages -</p>
                        <p>- Featured -</p>
                        <p>- Responsive Design -</p>
                        <button className="fees-btn">PURCHASE NOW</button>

                    </div>

                    <div className="web-cards">
                        <h3>- Business -</h3>
                        <hr className="lines"  />

                        <h1>25,000Rs.</h1>

                        <p>- 5 Days -</p>
                        <p>- 8 Pages -</p>
                        <p>- Featured -</p>
                        <p>- Responsive Design -</p>
                        <button className="fees-btn">PURCHASE NOW</button>

                    </div>
                </div>
            </div>

         <Footer/>

        </div>
    )
}
export default Headerinfo;