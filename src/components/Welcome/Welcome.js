import "./Welcome.css";
import dogImage from "../assets/IMG_1440.jpeg"
// import { Navigate } from "react-router-dom";
// import { useEffect } from "react";

export const Welcome = ({currentUser}) => {

          
    return (
    <div className="welcome-container">
        <div className="dog-images">
        <img className="app-logo" src={dogImage} alt="Sleepy Doggy" />
        </div>
        <h1>
        <span className="welcome-title">Welcome </span>
        <span>{currentUser.name}</span>
        <span>Community Pets</span>
        </h1>
        <div className="welcome-about">A site to list your pets and post to a Pet Sitting Exchange Board.</div>
        {/* <div className="welcome-tagline">and post to a Pet Sitting Exchange Board.</div> */}
        <div className="form"> 
        <section className="form-group">
            <h2>My Details:</h2>
         
                    
              {/* <div >User #: {currentUser.id}
              </div> */}
              <strong >Name: {currentUser.fullName}
              </strong>
              <strong >Email: {currentUser.email}
              </strong>
              <strong >City: {currentUser.city}
              </strong>
             
         
        </section> 
      </div>
    </div>
);
};
