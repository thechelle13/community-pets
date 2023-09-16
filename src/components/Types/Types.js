import { useEffect, useState } from "react"
import "./Types.css"
import { getAllPetTypes } from "../../services/PetTypeService"


export const Types = () => {
    const [types, setTypes] = useState([])

    useEffect( () => {
        getAllPetTypes().then((typeArray) =>{
            setTypes(typeArray)
            console.log("Types Set")
        })
    }, [])

    return 
}