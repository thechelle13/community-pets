import React, { useEffect, useState } from "react";
import { getAllPets, petDelete } from "../../services/PetService";
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
      const filteredPets = petArray.filter(
        (pet) => pet.petOwnerId === currentUser.id
      );
      setCurrentUserPets(filteredPets);
    });
  }, [currentUser]);

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
  };

  const handleSave = () => {
    if (selectedPet !== null) {
      Navigate(`/EditPets`);
    } else {
      alert("Please select a pet before updating.");
    }
  };

  const handleDelete = () => {
    if (selectedPet !== null) {
      petDelete(selectedPet.id).then(() => {
        // After successful deletion, you can update the UI by filtering out the deleted pet
        setCurrentUserPets((prevPets) =>
          prevPets.filter((pet) => pet.id !== selectedPet.id)
        );

        // Clear the selected pet
        setSelectedPet(null);
      });
    } else {
      alert("Please select a pet before deleting.");
    }
  };

  const handleAddPet = () => {
    Navigate(`/AddPets`);
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
            <div className="pet-radio" key={pet.id}>
              <input
                type="radio"
                name="selectedPet"
                value={pet.id}
                checked={selectedPet === pet}
                onChange={() => handlePetSelect(pet)}
              />
              <section className="pet">
                <p>Name: {pet.name}</p>
                <p>Pet Type: {getPetTypeName(pet.petTypeId)}</p>
                <p>Description: {pet.description}</p>
              </section>
            </div>
          ))}
        </section>
        <section className="button-container">
          <button className="form-btn" onClick={handleSave}>
            Update
          </button>
          <button className="form-btn" onClick={handleDelete}>
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




