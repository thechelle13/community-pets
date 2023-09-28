import { useNavigate } from "react-router-dom";
import { petDelete, getPetById } from "../../services/PetService";
import "./Addpets.css";
import { useEffect, useState } from "react";

export const DeletePet = ({ currentUser }) => {
    const [selectedDelPet, setSelectedDelPet] = useState([]); 
    const Navigate = useNavigate();

    useEffect(() => {   
    getPetById(currentUser.petId).then((pet) => {
        setSelectedDelPet(pet);
    });
    }, [currentUser.petId]);

    const handleDelete = (event) => {
    event.preventDefault();

    const delPet = {
        id: selectedDelPet.id, 
    };
    
    petDelete(delPet.id).then(() => {
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
        <form className="form">
        <h2>Pet Delete:</h2> 
            
        {selectedDelPet && (
            <div>
            <p>Name: {selectedDelPet.name}</p>
            <p>Pet Type: {selectedDelPet.petType}</p>
            <p>Description: {selectedDelPet.description}</p>
            </div>
        )}
        <div>
            <button className="form-btn" onClick={handleDelete}>
            Delete this Pet?
            </button>
        </div>
        </form>
    </div>
);
};
