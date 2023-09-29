import { useNavigate } from "react-router-dom";
import { petDelete, getPetByPetOwnerId } from "../../services/PetService";
import "./Addpets.css";
import { useEffect, useState } from "react";

export const DeletePet = ({ currentUser }) => {
    const [delPet, setDelPet] = useState([]); 
    const Navigate = useNavigate();

    useEffect(() => {   
    getPetByPetOwnerId(delPet).then((pet) => {
        setDelPet(pet);
        console.log("Pet to Delete", delPet)
    });
    }, []);



    const handleDelete = (event) => {
    event.preventDefault();

    const petDel = {
        id: delPet, 
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
            
    
            <div>
            <p>Name: {delPet.name}</p>
            <p>Pet Type: {delPet.petType}</p>
            <p>Description: {delPet.description}</p>
            </div>
         
        <div>
            <button className="form-btn" onClick={handleDelete}>
            Delete this Pet?
            </button>
        </div>
        </form>
    </div>
);
};

