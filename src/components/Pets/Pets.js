import { useEffect, useState } from "react"
import { getAllPets} from "../../services/PetService"
import "./Pets.css"

export const Pets = () => {
    const [allPets, setAllPets] = useState([])
    
    useEffect( () => {
        getAllPets().then((petArray) =>{
            setAllPets(petArray)
            console.log("Pets Set")
        })
    }, [])

    // const handleSave = (event) => {
    //     event.preventDefault()

    //     const updatedPet = {
    //         id: newPet.id,
    //         name: newPet.name,
    //         petOwnerId: parseInt(newPet.petOwnerId),
    //         description: newPet.description,
    //         petTypeId: parseInt(newPet.petType)
    //     }
    //     createNewPet(updatedPet).then(() => {
    //         Navigate(`/Pets`)
    //     })
    // }

    return (
        <div className="welcome-container">
            <section className="pet">
            <h1 className="new">
                
                <span>Community Pets</span>
            </h1>
            </section>
            <article className="form">

        <section className="pet">
           
            <h2>My Pets</h2>
            
            
            {allPets.map((pet) => {
        return (
        <div className="pet" key={pet.id}>{pet.id}
       <button className="form-btn" type="submit" 
    //    onClick={handleSave}
       >Update</button>
       <button className="form-btn" type="submit" 
    //    onClick={handleDelete}
       >Delete</button>
            </div>
        )
    })}
    
            {/* {allPets.filter((pet) => pet.petOwnerId === ownerId) 
            .map((pet) => (
            <div key={pet.id}>{pet.id}</div>
            ))} */}
        
            <div className="pet">
            <header className="pet-info">Pet Name: </header>   
                <div className="pet-info">Pet Type:</div>
                <div className="pet-info">Pet Description:</div>
                
        </div>   
    </section>
    </article>
    </div>
    )
}