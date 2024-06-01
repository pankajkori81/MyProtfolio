import React from "react";
import './Project.css';

import Footer  from "../Components/Footer";

const project={
    color:"white"
}


function Project(){
    return(
        <div>


            <div className="project-img">
                <img  className="project-img1" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="project-img" />
                <h1>MY PROJECTS. </h1>
                <p>Here Are Some Most Recent Projects </p>
            
            </div>

            <div className="project-cards">
                <div className="item-cards">
                    <img src="https://elements-cover-images-0.imgix.net/13023029-0e6d-4e9c-9c3b-dc7491c91dc9?auto=compress%2Cformat&w=632&fit=max&s=bf36bad613991eaa4bcca12b6a71c165" alt="e-commerce website" />
                    <h3>Ecommerce Website Design</h3>
                     <p>Thriving Facebook community and top ranked podcast , Army inspires a grounded. tangible and self-affirming sense of "Wow!" I really can do this for over 100,0000 online entrepreneurs. Best-selling marketing courses</p>
                    <button className="btn1">VIEW</button>
                    <button className="btn2">SOURCE</button>
                </div>

                <div className="item-cards">
                    <img src="https://elements-cover-images-0.imgix.net/0c35d074-8a3c-4151-9989-8dee84a01261?auto=compress%2Cformat&w=1170&fit=max&s=1bb1eee94d0acbf2657ca1ebe302cbc8" alt="website" />
                    <h3>Shopping Website Design</h3>
                     <p>Thriving Facebook community and top ranked podcast , Army inspires a grounded. tangible and self-affirming sense of "Wow!" I really can do this for over 100,0000 online entrepreneurs. Best-selling marketing courses</p>
                    <button className="btn1">VIEW</button>
                    <button className="btn2">SOURCE</button>
                </div>

                <div className="item-cards">
                    <img src="https://elements-cover-images-0.imgix.net/0c35d074-8a3c-4151-9989-8dee84a01261?auto=compress%2Cformat&w=1170&fit=max&s=1bb1eee94d0acbf2657ca1ebe302cbc8" alt="e-commerce website" />
                    <h3>Tourist Website Design</h3>
                     <p>Thriving Facebook community and top ranked podcast , Army inspires a grounded. tangible and self-affirming sense of "Wow!" I really can do this for over 100,0000 online entrepreneurs. Best-selling marketing courses</p>
                    <button className="btn1">VIEW</button>
                    <button className="btn2">SOURCE</button>
                </div>

                <div className="item-cards">
                    <img src="https://elements-cover-images-0.imgix.net/13023029-0e6d-4e9c-9c3b-dc7491c91dc9?auto=compress%2Cformat&w=632&fit=max&s=bf36bad613991eaa4bcca12b6a71c165" alt="e-commerce website" />
                    <h3>Food Delivery Website Design</h3>
                     <p>Thriving Facebook community and top ranked podcast , Army inspires a grounded. tangible and self-affirming sense of "Wow!" I really can do this for over 100,0000 online entrepreneurs. Best-selling marketing courses</p>
                    <button className="btn1">VIEW</button>
                    <button className="btn2">SOURCE</button>
                </div>

            </div>


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
};


export default Project;