import { useState } from "react";
import "./Addpets.css";
import { useNavigate } from "react-router-dom";
import { userEdited } from "../../services/UserService";

export const EditOwners = ({ currentUser }) => {
  const [owner, setOwner] = useState([]);
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

    userEdited(updatedUser).then((response) => {
      console.log("API Response:", response);
      setOwner(response);
      Navigate(`/Owners`);
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
              required // Adding 'required' attribute
              autoFocus
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
              required // Adding 'required' attribute
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={handleInputChange}
              type="text"
              id="city"
              className="form-control"
              placeholder="Enter your City"
              required // Adding 'required' attribute
              autoFocus
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
                required // Adding 'required' attribute
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
