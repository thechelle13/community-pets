import React, { useEffect, useState } from "react";
import { getAllPets} from "../../services/PetService"; 
import "./Pets.css";
import { useNavigate } from "react-router-dom";
import { getAllPetTypes } from "../../services/PetTypeService";

export const Pets = ({ currentUser }) => {
    const [currentUserPets, setCurrentUserPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);
    const [petTypes, setPetTypes] = useState([]); 
    const Navigate = useNavigate();

    useEffect(() => {
        getAllPetTypes().then((types) => {
        setPetTypes(types);
    });

        getAllPets().then((petArray) => {
        const filteredPets = petArray.filter((pet) => pet.petOwnerId === currentUser.id);
    
        setCurrentUserPets(filteredPets);
       // console.log("Pet Set", filteredPets);
        });
    }, [currentUser.id]);

    const handlePetSelect = (pet) => {
    setSelectedPet(pet);
    };

    const handleSave = (petId) => {
    Navigate(`/EditPets`)
    //console.log("Update pet with ID:", petId);
    };

    const handleDelete = (petId) => {
    Navigate(`/DeletePet`)
    //console.log("Delete pet with ID:", petId);
    };

    const handleAddPet = () => {
    Navigate(`/AddPets`)
    //console.log("Add Pet clicked");
    };

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
                <p>Pet Type: {getPetTypeName(pet.petTypeId)}</p> 
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
