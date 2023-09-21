import { useEffect, useState } from "react"
import {  getAllPets} from "../../services/PetService"
import "./Pets.css"
import { useParams } from "react-router-dom"


export const Pets = () => {
    const [allPets, setAllPets] = useState([])
    
    const {ownerId} = useParams()
    

    useEffect( () => {
        getAllPets().then((petArray) =>{
            setAllPets(petArray)
            console.log("Pets Set")
        })
    }, [])

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
          <div key={pet.id}>{pet.id}
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