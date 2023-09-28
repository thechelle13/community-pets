import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export const PetPosts = ({ currentUser}) => {
    const [petPost, setPetPost] = useState({
    description: "",
    currentUser: currentUser.id,
    //date: new Date().toISOString(),
    sitStartDate: new Date(),
    sitEndDate: new Date()
    });

    const handleDescriptionChange = (event) => {
    const updatedPetPost = { ...petPost, description: event.target.value };
    setPetPost(updatedPetPost);
    };

    const handleSubmit = (event) => {
    event.preventDefault();

    const petPostData = {
        description: petPost.description,
    //   pet: postedPet,
        user: currentUser,
    };
    //console.log("Pet Post Data:", petPostData);

    setPetPost({ description: "", currentUser: currentUser.id, 
    //date: new Date(), 
    sitStartDate: new Date(), sitEndDate: new Date() })  
};

    return (
    <div className="welcome-container">
        <section className="pet">
        <h2 className="new">
            <span> Community Pets </span>
            <span>Pet Posting Exchange</span>
        </h2>
        </section>
        <section className="pet">
        <div> Pet Post Exchange </div>
        </section>

        <section className="pet">
        <form onSubmit={handleSubmit}>
            <h3>Create a Pet Post</h3>
            <section>
            <div>{currentUser.fullName}</div>
            <div>{currentUser.city}</div>
            <div>{currentUser.email}</div>
            </section>        
            <div className="form-group">
            <label htmlFor="description">Post Description:</label>
            <input
                type="text"
                id="description"
                value={petPost.description}
                onChange={handleDescriptionChange}
                required
            />
            {/* <label htmlFor="date">Post Date:</label>
            <input
            type="text"
            id="date"
            value={petPost.date}
            onChange={handleDescriptionChange}
            required
            /> */}
            <label htmlFor="sitStartDate">Start Date of Sit:</label>
                <DatePicker
                id="sitStartDate"
                selected={petPost.sitStartDate}
                onChange={(date) => setPetPost({ ...petPost, sitStartDate: date })}
                required
            />
            <label htmlFor="sitEndDate">End Date of Sit:</label>
                <DatePicker
                id="sitEndDate"
                selected={petPost.sitEndDate}
                onChange={(date) => setPetPost({ ...petPost, sitEndDate: date })}
                required
            />
            </div>
            <button className="btn" type="submit">Post</button>
        </form>
        </section>
    </div>
);
};
