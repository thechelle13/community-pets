import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// import { PetPostList } from "./PetPostList"

export const PetPosts = ({ currentUser}) => {
    const [petPost, setPetPost] = useState({
    description: "",
    currentUser: currentUser.id,
    
    sitStartDate: new Date(),
    sitEndDate: new Date()
    });

    const [petPostsList, setPetPostsList] = useState([]) 

    const handleDescriptionChange = (event) => {
    const updatedPetPost = { ...petPost, description: event.target.value }
    setPetPost(updatedPetPost)
    };

    const handleSubmit = (event) => {
    event.preventDefault()

    const petPostData = {
        description: petPost.description,
        sitStartDate: petPost.sitStartDate,
        sitEndDate: petPost.sitEndDate,
    
        user: currentUser.id,
    };
    
    setPetPostsList([...petPostsList, petPostData])
    
    // setPetPost({ description: "", 
    //             currentUser: currentUser.id, 
     
    //             sitStartDate: new Date(), 
    //             sitEndDate: new Date() 
    //         })  
    };

    return (
    <div className="welcome-container">
        <section className="pet">
            <h2 className="new">
                <span> Community Pets </span>
                {/* <span>Post a Pet Sitting Need</span> */}
            </h2>
        </section>
        
        
    

        <section className="pet">
            <span>
                <h2>Post a Pet Sitting Need to Exchange</h2>
            </span>
            <form onSubmit={handleSubmit}>
                <h3>Create a Pet Post</h3>

                <section className="pet">
                <div>{currentUser.fullName}</div>
                <div>{currentUser.city}</div>
                <div>{currentUser.email}</div>
                </section>    

                <section className="pet">
                <div className="form-group">
                <label htmlFor="description">Post Description:</label>
                <input
                    type="text"
                    id="description"
                    value={petPost.description}
                    onChange={handleDescriptionChange}
                    required
                />
                
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
                <button className="btn" type="submit">
                    Post</button>
                    </section>
            </form>
        
        </section>
        <section className="pet">
        <h3>My Pet Sitting Post List</h3>
        <form >
             <strong>User:</strong> {currentUser.fullName}<br />
             
            <strong>Description:</strong> {petPost.description}<br />
            <strong>Start Date:</strong> {petPost.sitStartDate.toLocaleDateString()}<br />
            <strong>End Date:</strong> {petPost.sitEndDate.toLocaleDateString()}
          </form>
        {/* <PetPostList petPosts={petPostsList} /> */}
        
        </section>
    </div>
)
}
