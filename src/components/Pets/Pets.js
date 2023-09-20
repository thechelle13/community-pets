import { useEffect, useState } from "react"
import {  getAllPets} from "../../services/PetService"
import "./Pets.css"

export const Pets = () => {
    const [allPets, setAllPets] = useState([])
    const [newPet, setNewPet] = useState([])
    

    useEffect( () => {
        getAllPets().then((petArray) =>{
            setAllPets(petArray)
            console.log("Pets Set")
        })
    }, [])

    useEffect( () => {
        setNewPet("")
    }, [allPets])

    // useEffect(() => {
    //     const foundPets = allPets.filter((pet) =>
    //       pet.description.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    //     setFilteredPets(foundPets)
    //   }, [searchTerm, allPets])

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
        
            <div className="pet">
            <header className="pet-info">Pet Name:{allPets.name}</header>   
                    <div className="pet-info">Pet Type:{allPets.name}</div>
                    
                    <div className="pet-info">Pet Description:</div>
                {/* <footer>
                
                <div className="pet-info">Image:</div>
                
            </footer> */}
        </div>   
    </section>
    </article>
    </div>
    )
}