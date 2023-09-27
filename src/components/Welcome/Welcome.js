import "./Welcome.css";
import dogImage from "../assets/IMG_1440.jpeg"; // Adjust the path based on your project structure

export const Welcome = () => {
    return (
    <div className="welcome-container">
        <div className="dog-images">
        <img className="app-logo" src={dogImage} alt="Good Doggy" />
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
