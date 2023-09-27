import { useEffect, useState } from "react"
import "./Addpets.css"
import { getAllPetTypes } from "../../services/PetTypeService"
import { useNavigate, useParams} from "react-router-dom"
import { getAllPets, petEdited } from "../../services/PetService"

export const EditPet = ({currentUser,setSelectedPet }) => {
    const [currentUserPets, setCurrentUserPets] = useState([])
    //const [selectedPet, setSelectedPet] = useState(null);
    const [type, setType] = useState([])
    const Navigate = useNavigate()
    const {petId} = useParams
    const handleInputChange = (evt) => {
        const copy = { ...editPet }
        copy[evt.target.id] = evt.target.value
        setEditPet(copy)
    }
    const handleSave = (event) => {
        event.preventDefault()

        const updatedPet = {
            id: setSelectedPet.id,
            name: editPet.name,
            petOwnerId: parseInt(editPet.petOwnerId),
            description: editPet.description,
            petTypeId: parseInt(editPet.petType)
        }
        petEdited(updatedPet)
        .then((res) => {
            setCurrentUserPets(res)
            Navigate(`/Pets`)
        })
    }
    const [editPet, setEditPet] = useState({
        ...currentUserPets
    })
  
    

    

    useEffect( () => {
        getAllPets().then((petArray) =>{
            const filteredPets = petArray.filter((pet) => pet.petOwnerId === currentUser.id);       
        // Set the filtered pets in the state
        setCurrentUserPets(filteredPets);
        //console.log("Pet Set", filteredPets)
        ;
    });
}, [currentUser.id]); 

    useEffect(()=> {
    setSelectedPet(null)
    },[currentUserPets])
    
    useEffect(() => {
        getAllPetTypes().then((typeArray)=>{
            setType(typeArray)
            //console.log("Type set.")
        })
    }, [])

    

    

    return (
        <div className="welcome-container">
        <section className="pet">
        <h1 className="new">
                <span>Community Pets</span>
            </h1>
            </section>
        <form className="form">
            <h2>Pet Update:</h2>
            
                {/* <div className="pet" >
                <div>Selected Pet Info:  
                    {selectedPet && (
  <div className="pet">
    <p>Name: {selectedPet.name}</p>
    <p>Pet Type: {getAllPetTypes(selectedPet.petTypeId)}</p>
    <p>Description: {selectedPet.description}</p>
  </div>
)}

            </div>
                
                
                </div> */}
            
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
            <div htmlFor="petType"> Pet Type:</div>
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
            <option value="petType">Please select pet type</option>
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
