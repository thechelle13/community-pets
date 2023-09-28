import { useState } from "react";
import "./Addpets.css";
import { useNavigate } from "react-router-dom";
import { userEdited } from "../../services/UserService";

export const EditOwners = ({ currentUser, setCurrentUser }) => {
    const [owner, setOwner] = useState({ ...currentUser });
    
    const Navigate = useNavigate();

    const handleInputChange = (evt) => {
    const copy = { ...owner };
    copy[evt.target.id] = evt.target.value;
    setOwner(copy);
    };

    const handleSave = (event) => {
    event.preventDefault();

    const updatedUser = {
        id: currentUser.id,
        fullName: owner.fullName,
        isPetOwner: owner.isPetOwner,
        city: owner.city,
        email: owner.email,
    };

    userEdited(updatedUser)
        .then((res) => {
        //console.log("API Response:", res);
        setCurrentUser(res); 
        Navigate(`/Owners`);
        })
        .catch((error) => {
        //console.error("Error updating user data:", error);
            
        });
    };

    return (
    <div className="welcome-container">
        <section className="pet">
        <h1 className="new">
            <span>Community Pets</span>
        </h1>
        </section>
        <form className="form">
        <h2>Owner Update:</h2>
        <div>Current Info: </div>
        <div>Full Name: {currentUser.fullName}</div>
        <div>Email: {currentUser.email}</div>
        <div>City: {currentUser.city}</div>
        <fieldset>
            <div className="form-group">
            <input
                onChange={handleInputChange}
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Enter your First and Last name"
                required
                autoFocus
                value={owner.fullName} 
            />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <input
                onChange={handleInputChange}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
                value={owner.email} 
            />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group" htmlFor="city">
            <input
                onChange={handleInputChange}
                type="text"
                id="city"
                className="form-control"
                placeholder="Enter your City"
                required
                autoFocus
                value={owner.city} 
            />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label>
                <input
                onChange={(evt) => {
                    const copy = { ...owner };
                    copy.isPetOwner = evt.target.checked;
                    setOwner(copy);
                }}
                type="checkbox"
                id="isPetOwner"
                required
                checked={owner.isPetOwner} 
                />
                I am a pet owner{" "}
            </label>
            </div>
        </fieldset>
        <section>
            <button className="form-btn" type="submit" onClick={handleSave}>
            Edit Owner
            </button>
        </section>
        </form>
    </div>
    );
};
