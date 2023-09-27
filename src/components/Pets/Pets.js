import { useEffect, useState } from "react"
import { getAllPets} from "../../services/PetService"
import "./Pets.css"
import { useNavigate} from "react-router-dom"
import { AddPets } from "../Forms/AddPets";

export const Pets = ({currentUser}) => {
    const [currentUserPets, setCurrentUserPets] = useState([])
    
    const Navigate = useNavigate()
    
    useEffect( () => {
        getAllPets().then((petArray) =>{
            const filteredPets = petArray.filter((pet) => pet.petOwnerId === currentUser.id);       
        // Set the filtered pets in the state
        setCurrentUserPets(filteredPets);
        console.log("Pet Set", filteredPets)
        ;
    });
}, [currentUser.id]);

    
    const handleSave = (event) => {
        event.preventDefault()
            Navigate(`/EditPets`) 
    }
    const handleDelete = (event) => {
        event.preventDefault()    
            Navigate(`./DeletePet`)
    }

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
                  <p>Name: {pet.name}</p>
                  <p>Pet Type: {pet.petType}</p>
                  <p>Description: {pet.description}</p>
    
                  <button className="form-btn" type="submit" onClick={handleSave}>
                    Update
                  </button>
                  <button className="form-btn" type="submit" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              ))}
            </section>
            <button className="form-btn">Add A Pet
            {/* {<AddPets/>} */}
            </button>
          </form>
          
        </div>
      );
    };

