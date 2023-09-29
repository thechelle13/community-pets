import React, { useEffect, useState } from "react";
import "./Addpets.css";
import { getAllPetTypes } from "../../services/PetTypeService";
import { useNavigate, useParams } from "react-router-dom";
import { getAllPets, getPetByPetOwnerId, petEdited } from "../../services/PetService";

export const EditPet = ({ currentUser }) => {
  const [currentUserPets, setCurrentUserPets] = useState([]);
  const [editPet, setEditPet] = useState({
    id: "",
    name: "",
    petOwnerId: "",
    description: "",
    petTypeId: "",
  });
  const [type, setType] = useState([]);

  const Navigate = useNavigate();
  const { petOwnerId } = useParams();

  useEffect(() => {
    getAllPets().then((petArray) => {
      const filteredPets = petArray.filter(
        (pet) => pet.petOwnerId === currentUser.id
      );
    
      if (filteredPets.length > 0) {
        setEditPet({
          id: filteredPets[0].id,
          name: filteredPets[0].name,
          petOwnerId: filteredPets[0].petOwnerId,
          description: filteredPets[0].description,
          petTypeId: filteredPets[0].petTypeId,
        });
      }
      setCurrentUserPets(filteredPets);
    });
  }, [currentUser.id]);

  useEffect(() => {
    getAllPetTypes().then((typeArray) => {
      setType(typeArray);
    });
  }, []);

  const handleInputChange = (evt) => {
    const { id, value } = evt.target;

    // Ensure that petOwnerId and petTypeId are integers
    const newValue = id === "petOwnerId" || id === "petTypeId" ? parseInt(value) : value;

    setEditPet((prevEditPet) => ({
      ...prevEditPet,
      [id]: newValue,
    }));
  };


  
  const handleSave = (event) => {
    event.preventDefault();
  
    // Ensure that petOwnerId and petTypeId are integers
    const updatedPet = {
      id: editPet.id,
      name: editPet.name,
      petOwnerId: parseInt(editPet.petOwnerId), // Ensure this is a valid integer
      description: editPet.description,
      petTypeId: parseInt(editPet.petTypeId), // Ensure this is a valid integer
    };
  
    petEdited(updatedPet).then((res) => {
      setEditPet(res);
      Navigate(`/Pets`);
    });
  };
  

  return (
    <div className="welcome-container">
      <section className="pet">
        <h1 className="new">
          <span>Community Pets</span>
        </h1>
      </section>
      <div className="form">
        <h2>Pet Update:</h2>
        <div>Current Info: </div>
        {/* <div>Pet Name: {editPet.name}</div>
        <div>Email: {currentUser.email}</div>
        <div>City: {currentUser.city}</div> */}

        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleInputChange}
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your pet's name"
              required
              autoFocus
              value={editPet.name}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              onChange={handleInputChange}
              type="text"
              id="description"
              className="form-control"
              placeholder="Description of your pet."
              required
              autoFocus
              value={editPet.description}
            />
          </div>
        </fieldset>
        <fieldset>
          <div htmlFor="petType"> Pet Type:</div>
          <select
            name="petType"
            value={editPet.petTypeId}
            onChange={(event) => {
              const { value } = event.target;
              setEditPet((prevEditPet) => ({
                ...prevEditPet,
                petTypeId: value,
              }));
            }}
            required
            autoFocus
          >
            <option value="petType">Please select pet type</option>
            {type.map((typeObj) => {
              return (
                <option key={typeObj.id} value={typeObj.id}>
                  {typeObj.type}
                </option>
              );
            })}
          </select>
        </fieldset>
        <section>
          <button className="form-btn" type="submit" onClick={handleSave}>
            Edit Pet
          </button>
        </section>
      </div>
    </div>
  );
};

