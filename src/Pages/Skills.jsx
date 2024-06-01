import React from "react";
import './Skills.css';
import Footer from "../Components/Footer";



function Skills(){
    return(

        <div>

            <div className="skill-head">My Skills </div>
            <div className="skill-design"></div>

            <div className="skills-part">
                <div className="skills-subpart">
                    <h3>Programming Langauage </h3>
                    <p>C Langauage</p>
                    <p>Java Langauage </p>
                    <p>Javascript</p>
                </div>

                <div className="skills-subpart">
                    <h3>Course Work </h3>
                    <p>Object Oriented Programming Langauage (OOPs)</p>
                    <p>Data Base Management System (DBMS)</p>
                    <p>Computer Network (CN) </p>
                    <p>AWS</p>
                </div>

                <div className="skills-subpart">
                    <h3>Web Development </h3>
                    <p>HTML , CSS</p>
                    <p>Javascript(ES6/7)</p>
                    <p>React Js</p>
                    <p>Node Js & Express Js</p>
                    <p>Mysql & Mongodb</p>
                    <p>Git & Github</p>
                </div>

                <div className="skills-subpart">
                    <h3>Certifications</h3>
                    <p>Web Development , <span>Shuvidha Fondation</span> </p>
                    <p>Computer Network , <span>Great Learning</span> </p>
                    <p>TODO List , <span>infobyte</span></p>
                    <p>Web Development , <span>Microsoft Azure Bootcamp</span></p>
                </div>
            </div>


          <Footer/>
        </div>
    )
};

export default Skills;