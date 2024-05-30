import React from "react";
import './About.css';
import Footer from "../Components/Footer";



function About(){
    return(
        <div>
             
            <div className="abouts">
                <div className="about-title">
                    <h1> About Me </h1>
                    <div className="box-design"></div>
                </div>

                <div className="about-detail">
                    <div className="about-left">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="profile photo" />
                    </div>

                   {/*  IN about right two things are added para and skills */}
                    <div className="about-right">
                        <div className="about-para">
                       <p>I am experienced Full stack Developer with 3+ years of professional experties in the field. Throughout my career , I have had the privillage of collabrating with prestigious organizations , contributing to their success and growth. </p>
                       <p> My Passion for full Stack Development is not only reflected in my extensive experience but also in the enthusiasm and detication i bring to eact project</p>
                    </div>
                    

                <div className="skills">
                    <div className="sub-skills">
                        <p>HTML & CSS <hr width="50%" /></p>
                        <p>JAVASCRIPT <hr width="70%" /></p>
                        <p>REACT JS<hr width="60%" /></p>
                        <p>NODE JS <hr width="40%" /></p>
                        <p>MONGO DB <hr  style={{width:"60%"}}/></p>
                    </div>
                </div>
                </div>
                </div>
            </div>


            <Footer/>



        </div>
    )
}
export default About;