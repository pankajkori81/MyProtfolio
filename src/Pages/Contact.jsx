import React, { useState }  from "react";

import './Contact.css';

import  Footer from  "../Components/Footer";


function Contact(){


    const [username , setName]=useState("");


    const [email , setEmail]=useState("");


    const [text , setText]=useState("");



    function Namechange(event){
     setName(event.target.value);
     console.log(event.target.value)
     console.log(event.target.name);
     
     
    }



    function Emailchange(event){
        setEmail(event.target.value);
        console.log(event.target.value)
        console.log(event.target.name);

    }


    function Textchange(event){
        setText(event.target.value);
        console.log(event.target.value)
        console.log(event.target.name);
    }




   function handlesubmit(event){
    event.preventDefault();

   }

 


   const contactHead={
    fontSize:"55px",
    color:"#fff",
    textAlign:"center",
    marginTop:"1%"
   }




    return(


     

        <div>

            <h1 style={contactHead}> Get in touch</h1>
            <div className="design-box"></div>
            
           <div className="main-contact">
           

           <div className="contact-left">
             
            <div className="contact-details">
                <h1>Let's talk</h1>

                <p>I am currently avaiable to take on new projects . so feel free ti send me a message about anything that you want me to work on. You can contact me anytime.</p>
                 
                 <p className="email">Email: mahikori@8169gmail.com</p>
                 <p className="contact-num">Mob. No.: +91 83453 34454</p>
                 <p className="location">Location: Mumbai , India.</p>

            </div>

           </div>

           <form onSubmit={handlesubmit}>

            <div className="contact">

                <label className="name">Your Name</label>
                <input  type="text" name="username" placeholder="Enter your name" onChange={Namechange}  value={username}  />

                <label className="email">Your Email</label>
                <input type="text" name="email" placeholder="Enter your email" onChange={Emailchange} value={email} />

                <label className="text">Write your message here</label>
                <textarea name="text" id="" cols="20" rows="8" placeholder="Enter your message here"  onChange={Textchange}  value={text}/>
                

                <button  type="submit">Submit</button>

            </div>



           </form>

           </div>

          <Footer/>


        </div>
    )
};

export default Contact;



