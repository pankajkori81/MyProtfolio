import React from "react";
import './Footer.css';
import { useNavigate } from "react-router-dom";


function Footer(){


    const date=new Date();

    const currentyears= date.getFullYear();
    console.log(currentyears);

     const homenavigate=useNavigate();

    function gotohome(){
     homenavigate("/");
    }

    return(
        <div>

           <div className="main-footer">

            <div className="foot-logo">
                <img onClick={gotohome} src="logo_transparent.png" alt="" />

            

            <div className="social-media">
               
              <a className="media" href="#">youtube</a> 
              <a className="media" href="#">facebook</a>
              <a className="media" href="#">github</a>
              <a className="media" href="#">twitter</a>

            </div>

            </div>


            <div className="lists">

              <ul className="list-card">
                <h3>Company</h3>
                <li>About Us</li>
                <li>Careers Apply Now!</li>
              </ul>

              <ul className="list-card">
                <h3>Partner</h3>
                <li>Distributions</li>
                <li>Partner Log In</li>
                <li>Marketing Solutions</li>
              </ul>

              <ul className="list-card">
                 <h3>Support </h3>
                <li>Contact Us</li>
                <li>Help center</li>
                <li>India +91 34233 43555</li>
                <li>US & UK 22 4545 6554</li>
              </ul>

              <ul className="list-card">
                <h3>Other Services</h3>
                <li>Connect with us</li>
                <li>Proper guidence</li>
              </ul>

            </div>

            <div className="term_conds">
                <p>Copyright @{currentyears} Koriwebs. All Rights Reserved</p>
                
                <ul className="term_conds_1">
                    <li>Legal Notice</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                    <li>Terms & Conditions</li>
                </ul>

            </div>



           </div>


        </div>
    )
};

export default Footer;
