import { useEffect, useState } from "react"
import { getPetsById, petDelete, petEdit } from "../../services/PetService"
import "./Addpets.css"
import { getAllPetTypes } from "../../services/PetTypeService"
import { Types } from "../Types/Types"
import { Navigate, useParams } from "react-router-dom"

export const AddPets = () => {
    const [type, setType] = useState([])
    const [ pet, setPet] = useState([])
    const {petId} = useParams()
    const [newPet, setNewPet] = useState({
        name:"", 
        petOwnerId: 0, 
        petType: "",
        description: ""
    })

    useEffect(() => {
        getAllPetTypes().then((typeArray)=>{
            setType(typeArray)
            console.log("Type set.")
        })
    }, [])

    useEffect(() => {
        getPetsById(petId).then((petObj) => {
          setPet(petObj)
        })
      }, [petId])

      const handleInputChange = (event) => {
        const petCopy = { ...newPet }
        petCopy[event.target.name] = event.target.value
        setNewPet(petCopy)
      }
    
    const handleSave = (event) => {
        event.preventDefault()

        const updatedPet = {
            id: pet.id,
            name: pet.name,
            petOwnerId: pet.petOwnerId,
            description: pet.description,
            petTypeId: pet.petTypeId,
          }
      
          petEdit(updatedPet).then(() => {
            Navigate(`./Pets`)
          })
    }

    const handleDelete = (event) => {
        event.preventDefault()

        const delPet = {
            id: pet.id,
            name: pet.name,
            imageUrl: pet.imageUrl,
            description: pet.description,
            petTypeId: pet.petTypeId,
          }
      
          petDelete(delPet).then(() => {
            Navigate(`/Pets`)
          })
    }

    return (
        <div className="welcome-container">
        <section className="pet">
        <h1 className="new">
                <span>Community Pets</span>
            </h1>
            </section>
        <form className="form">
            <h2>Pet Update:</h2>
            <fieldset>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter the name of your pet."
                onChange={handleInputChange}
                required
                autoFocus
                />
            </div>
            </fieldset>
            
            <fieldset>
            <div className="form-group">
            <label htmlFor="description">Description:</label>
                <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Description of your pet."
                onChange={handleInputChange}
                required
                autoFocus
                />
            </div>
            </fieldset>
            <fieldset>
            <div> Pet Type:</div>
            <select
            name="petTypeId"
            value={Types.petTypeId}
            required
            onChange={(event) => {
              const typeCopy = { ...type }
              typeCopy.petTypeId = parseInt(event.target.value)
              setType(typeCopy)
            }}
          >
            <option value={0}>Please select type of pet</option>
            {type.map((typeObj) => {
              return (
                <option key={typeObj.id} value={typeObj.id}>
                  {typeObj.name}
                </option>
              )
            })}
          </select>
            </fieldset>
            <section>
            <button className="form-btn" onClick={handleSave}>Update</button>
            <button className="form-btn" onClick={handleDelete} >Delete Pet?</button>
            </section>     
        </form>
        </div>
    )
}