import { useEffect, useState } from "react"
import { getAllPets} from "../../services/PetService"
import "./Pets.css"
import { getAllPetTypes } from "../../services/PetTypeService"

export const Pets = () => {
    const [allPets, setAllPets] = useState([])
    const [type, setType] = useState([])
    
    useEffect( () => {
        getAllPets().then((petArray) =>{
            setAllPets(petArray)
            console.log("Pets Set")
        })
    }, [])

    useEffect(() => {
        getAllPetTypes().then((typeArray)=>{
            setType(typeArray)
            console.log("Type set.")
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
        <div className="pet" key={pet.id}>
            <div>Pet # {pet.id}</div> 
            <div>Name: {pet.name}</div>
            <div>I am a "{type.map((typeObj) => {
            return (
                <div key={typeObj.id} value={typeObj.id}>
                {typeObj.type}
                </div>
            )
            })}"</div>
            <div>Description: {pet.description}</div>
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
    </section>
    </article>
    </div>
    )
}