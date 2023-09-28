import "./Welcome.css";
import dogImage from "../assets/IMG_1440.jpeg"
// import { Navigate } from "react-router-dom";
// import { useEffect } from "react";

export const Welcome = ({currentUser}) => {

    // useEffect( ()=> {
      
    // },[currentUser.fullName])
    // const handleSave = (event) => {
    //     event.preventDefault()
    //         Navigate(`/EditOwners`) 
    //   }
    //     const handleDelete = (event) => {
    //         event.preventDefault()    
    //         Navigate(`/DeleteOwners`)
    //   }
      
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
        <div className="welcome-about">A site to list your pets</div>
        <div className="welcome-tagline">and post to a Pet Sitting Exchange Board.</div>
        <form className="form"> 
        <section className="form-group">
            <h2>My Details:</h2>
          <article className="owner">
                    
              <div >User #: {currentUser.id}
              </div>
              <div >Name: {currentUser.fullName}
              </div>
              <div >Email: {currentUser.email}
              </div>
              <div >City: {currentUser.city}
              </div>
              {/* <button className="form-btn" type="submit" 
                onClick={handleSave}
                >Update</button>
              <button className="form-btn" type="submit" 
                onClick={handleDelete}
                >Delete</button> */}
          </article>
        </section> 
      </form>
    </div>
);
};
