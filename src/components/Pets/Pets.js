import React, { useEffect, useState } from "react";
import { getAllPets } from "../../services/PetService";
import "./Pets.css";
import { useNavigate } from "react-router-dom";

export const Pets = ({ currentUser }) => {
  const [currentUserPets, setCurrentUserPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    getAllPets().then((petArray) => {
      const filteredPets = petArray.filter((pet) => pet.petOwnerId === currentUser.id);
      // Set the filtered pets in the state
      setCurrentUserPets(filteredPets);
      console.log("Pet Set", filteredPets);
    });
  }, [currentUser.id]);

  const handlePetSelect = (petId) => {
    setSelectedPet(petId);
  };

//   const handleSave = (event) => {
//     event.preventDefault()
//         Navigate(`/EditPets`) 
//   }
//     const handleDelete = (event) => {
//         event.preventDefault()    
//         Navigate(`/DeletePets`)
//   }
  const handleSave = (petId) => {
    // Handle update for the selected pet (selectedPet).
    console.log("Update pet with ID:", petId);
  };

  const handleDelete = (petId) => {
    // Handle delete for the selected pet (selectedPet).
    console.log("Delete pet with ID:", petId);
  };

  return (
    <div className="welcome-container">
      <section className="pet">
        <h1 className="new">
          <span>Community Pets</span>
        </h1>
      </section>
      <form className="form">
        <section className="form-group">
          <h2>My Pets</h2>
          {currentUserPets.map((pet) => (
            <div className="pet" key={pet.id}>
              <input
                type="radio"
                name="selectedPet"
                value={pet.id}
                checked={selectedPet === pet.id}
                onChange={() => handlePetSelect(pet.id)}
              />
              <p>Name: {pet.name}</p>
              <p>Pet Type: {pet.petTypeId}</p>
              <p>Description: {pet.description}</p>
            </div>
          ))}
        </section>
        <section className="form-group">
          <button className="form-btn" onClick={() => handleSave(selectedPet)}>
            Update
          </button>
          <button className="form-btn" onClick={() => handleDelete(selectedPet)}>
            Delete
          </button>
        </section>
      </form>
    </div>
  );
};


