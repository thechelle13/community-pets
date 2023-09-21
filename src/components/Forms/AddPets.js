import { useEffect, useState } from "react"
import { createNewPet} from "../../services/PetService"
import "./Addpets.css"
import { getAllPetTypes } from "../../services/PetTypeService"
import { useNavigate} from "react-router-dom"

export const AddPets = () => {
    const [type, setType] = useState([])
    const [newPet, setNewPet] = useState({
        name:"", 
        petOwnerId: 0, 
        petTypeId: 0,
        description: ""
    })
    const Navigate = useNavigate()

    useEffect(() => {
        getAllPetTypes().then((typeArray)=>{
            setType(typeArray)
            console.log("Type set.")
        })
    }, [])

    const handleInputChange = (evt) => {
        const copy = { ...newPet }
        copy[evt.target.id] = evt.target.value
        setNewPet(copy)
    }

    const handleSave = (event) => {
        event.preventDefault()

        const updatedPet = {
            id: newPet.id,
            name: newPet.name,
            petOwnerId: parseInt(newPet.petOwnerId),
            description: newPet.description,
            petTypeId: parseInt(newPet.petType)
        }
        createNewPet(updatedPet).then(() => {
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
            <label htmlFor="name" >Name:</label>
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
                id="description"
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
            name="petType"
            value={newPet.petType}         
            onChange={(event) => {
            const petCopy = { ...newPet }
            petCopy.petType = parseInt(event.target.value)
            setNewPet(petCopy)
            }}
            required
            autoFocus
            >
            <option value="petType">Please select type of pet</option>
            {type.map((typeObj) => {
            return (
                <option key={typeObj.id} value={typeObj.id}>
                {typeObj.type}
                </option>
            )
            })}
        </select>
            </fieldset>
            <section>
            <button className="form-btn" type="submit" onClick={handleSave}>Add Pet</button>
            </section>     
        </form>
        </div>
    )
}