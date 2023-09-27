import "./Welcome.css";
import dogImage from "../assets/IMG_1440.jpeg"

export const Welcome = () => {
    return (
    <div className="welcome-container">
        <div className="dog-images">
        <img className="app-logo" src={dogImage} alt="Sleepy Doggy" />
        </div>
        <h1>
        <span className="welcome-title">Welcome to </span>
        <span>Community Pets</span>
        </h1>
        <div className="welcome-about">A site to list your pets</div>
        <div className="welcome-tagline">and post to a Pet Sitting Exchange Board.</div>
    
    </div>
);
};
