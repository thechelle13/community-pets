import React, { useEffect, useState } from "react";
import { getAllPets} from "../../services/PetService"; // Assuming you have a service to fetch pet types.
import "./Pets.css";
import { useNavigate } from "react-router-dom";
import { getAllPetTypes } from "../../services/PetTypeService";

export const Pets = ({ currentUser }) => {
    const [currentUserPets, setCurrentUserPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState([]);
    const [petTypes, setPetTypes] = useState([]); // State to store pet types
    const Navigate = useNavigate();

    useEffect(() => {
    // Fetch pet types
        getAllPetTypes().then((types) => {
        setPetTypes(types);
    });

    // Fetch user's pets
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

    const handleSave = (petId) => {
    
    Navigate(`/EditPets`)
    console.log("Update pet with ID:", petId);
    };

    const handleDelete = (petId) => {
    Navigate(`/DeletePet`)
    console.log("Delete pet with ID:", petId);
    };

    const handleAddPet = () => {
    Navigate(`/AddPets`)
    console.log("Add Pet clicked");
    // Handle adding a new pet.
    // Redirect to the add pet page or perform the action you want.
    };

  // Function to get the pet type name by pet type id
    const getPetTypeName = (petTypeId) => {
    const petType = petTypes.find((type) => type.id === petTypeId);
    return petType ? petType.type : ""; 
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
                <p>Pet Type: {getPetTypeName(pet.petTypeId)}</p> {/* Display pet type name */}
                <p>Description: {pet.description}</p>
            </div>
        ))}
        </section>
        <section className="button-container">
        <button className="form-btn" onClick={() => handleSave(selectedPet)}>
            Update
        </button>
        <button className="form-btn" onClick={() => handleDelete(selectedPet)}>
            Delete
        </button>
        <button className="form-btn" onClick={handleAddPet}>
            Add Pet
        </button>
        </section>
    </form>
    </div>
);
};
