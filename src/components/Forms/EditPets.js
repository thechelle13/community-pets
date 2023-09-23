import { useEffect, useState } from "react"
import "./Addpets.css"
import { getAllPetTypes } from "../../services/PetTypeService"
import { useNavigate} from "react-router-dom"
import { petEdited } from "../../services/PetService"

export const EditPet = () => {
    const [type, setType] = useState([])
    const [editPet, setEditPet] = useState({
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
        const copy = { ...editPet }
        copy[evt.target.id] = evt.target.value
        setEditPet(copy)
    }

    const handleSave = (event) => {
        event.preventDefault()

        const updatedPet = {
            id: editPet.id,
            name: editPet.name,
            petOwnerId: parseInt(editPet.petOwnerId),
            description: editPet.description,
            petTypeId: parseInt(editPet.petTypeId)
        }
        petEdited(updatedPet).then(() => {
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
            value={editPet.petType}         
            onChange={(event) => {
            const petCopy = { ...editPet }
            petCopy.petType = parseInt(event.target.value)
            setEditPet(petCopy)
            }}
            required
            autoFocus
            >
            <option value="petTypeId">Please select pet type</option>
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
            <button className="form-btn" type="submit" onClick={handleSave}>Edit Pet</button>
            </section>     
        </form>
        </div>
    )
}
