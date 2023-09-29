import "./Welcome.css";
import dogImage from "../assets/IMG_1440.jpeg"
// import { Navigate } from "react-router-dom";
// import { useEffect } from "react";

export const Welcome = ({currentUser}) => {

          
    return (
    <div className="welcome-container">
        
        <h1>
        <span className="welcome-title">Welcome </span>
        <span>{currentUser.fullName}</span>
        <span>to</span>
        <span>Community Pets</span>
        </h1>
        <div className="dog-images">
        <img className="app-logo" src={dogImage} alt="Sleepy Doggy" />
        </div>
        <div className="welcome-about"><h2>A site to list your pets and post to a Pet Sitting Exchange Board.</h2></div>
        {/* <div className="welcome-tagline">and post to a Pet Sitting Exchange Board.</div> */}
        <div className="form"> 
        <section className="form-group">
            
         
                    
              {/* <div >User #: {currentUser.id}
              </div> */}
              {/* <strong >Name: {currentUser.fullName}
              </strong> */}
              {/* <strong >Email: {currentUser.email}
              </strong> */}
              {/* <strong >City: {currentUser.city}
              </strong> */}
             
         
        </section> 
      </div>
    </div>
);
};
