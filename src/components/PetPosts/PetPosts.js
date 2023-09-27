import React, { useEffect, useState } from "react";

export const PetPosts = ({ currentUser, currentUserPets }) => {
  const [petPost, setPetPost] = useState({
    description: "",
    selectedPetId: "",
  });

  const [postedPet, setPostedPet] = useState(null);

  const handleDescriptionChange = (event) => {
    const updatedPetPost = { ...petPost, description: event.target.value };
    setPetPost(updatedPetPost);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a pet post object with the description, pet details, and user information
    const petPostData = {
      description: petPost.description,
      pet: postedPet,
      user: currentUser,
    };

    // Send the pet post data to your API or perform any necessary actions
    console.log("Pet Post Data:", petPostData);

    // Clear the input field
    setPetPost({ description: "" });
    setPostedPet(null);
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

          {/* Input field for the description */}
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={petPost.description}
              onChange={handleDescriptionChange}
              required
            />
          </div>


          <button className="btn" type="submit">Post</button>
        </form>
      </section>
    </div>
  );
};
