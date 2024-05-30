import react from "react";

import './Service.css';
import Footer from "../Components/Footer";

function Service(){
    return(
        <div>
            
            <h1 className="service-head">My Services </h1>

            <div className="services">

                <div className="service-card">
                 <h1>01</h1>
                  <h2>Web design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas culpa expedita eius at fuga excepturi natus aperiam iste ab.</p>
                  <button>Read More</button>
                </div>


                <div className="service-card">
                 <h1>02</h1>
                  <h2>Graphic design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas culpa expedita eius at fuga excepturi natus aperiam iste ab.</p>
                  <button>Read More</button>
                </div>


                <div className="service-card">
                 <h1>03</h1>
                  <h2>Content Writing</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas culpa expedita eius at fuga excepturi natus aperiam iste ab.</p>
                  <button>Read More</button>
                </div>

                <div className="service-card">
                 <h1>04</h1>
                  <h2>App design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas culpa expedita eius at fuga excepturi natus aperiam iste ab.</p>
                  <button>Read More</button>
                </div>

                <div className="service-card">
                 <h1>05</h1>
                  <h2>Digital Marketing</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas culpa expedita eius at fuga excepturi natus aperiam iste ab.</p>
                  <button>Read More</button>
                </div>

                <div className="service-card">
                 <h1>06</h1>
                  <h2>Social Media</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas culpa expedita eius at fuga excepturi natus aperiam iste ab.</p>
                  <button>Read More</button>
                </div>
            </div>

          <Footer/>
            

        </div>
    )
}

export default Service;