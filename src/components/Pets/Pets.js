import { useEffect, useState } from "react"
import { getAllPets } from "../../services/PetService"
import "./Pets.css"

export const Pets = () => {
    const [pets, setPets] = useState([])

    useEffect( () => {
        getAllPets().then((petArray) =>{
            setPets(petArray)
            console.log("Pets Set")
        })
    }, [])

    return 
}