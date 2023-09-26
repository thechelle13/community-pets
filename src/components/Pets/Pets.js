import { useEffect, useState } from "react"
import { getAllPets} from "../../services/PetService"
import "./Pets.css"
import { getAllPetTypes } from "../../services/PetTypeService"
import { useNavigate, useParams } from "react-router-dom"
import { getAllOwners } from "../../services/OwnerService"



export const Pets = ({currentUser, pets}) => {
    const [allPets, setAllPets] = useState([])
    const [singlePet, setSinglePet] =useState([])
    const [owner, setOwner] =useState([])
    const [owners, setOwners] = useState([])
    const [type, setType] = useState([])
    
    // const {ownerId} = useParams()
    // const {petId} = useParams()
 
    const Navigate = useNavigate()
    
    useEffect( () => {
        getAllPets().then((petArray) =>{
            const currentUserPets = petArray.filter((pet) => pet.petOwnerId === currentUser.id);
        
        // Set the filtered pets in the state
        setAllPets(currentUserPets);
        
        console.log("Pets Set",petArray, currentUserPets);
    });
}, [currentUser.id]);
            
            // if currentuser.id === pet.petOwnerId then display currentUserPets
            // need the petOwnerId out of pets array if -conditional it matches the currentUserId ===
            

    useEffect( () => {
        getAllOwners().then((ownersArray) =>{
            setOwners(ownersArray)
            console.log("Owners Set", ownersArray)
        })
    }, [])

    useEffect(() => {
        getAllPetTypes().then((typeArray)=>{
            setType(typeArray)
            console.log("Types set.", typeArray)
        })
    }, [])


    
    const handleSave = (event) => {
        event.preventDefault()
            Navigate(`/EditPets`) 
    }
        const handleDelete = (event) => {
            event.preventDefault()    
            Navigate(`./DeletePet`)
    }

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
            
        
         <div className="pet" >
             <div key={owner.id}>Owner ID # {currentUser.id}</div>
            <div>{currentUser.currentUserPets}</div>
        <button className="form-btn" type="submit" 
         onClick={handleSave}
        >Update</button>
        <button className="form-btn" type="submit" 
        onClick={handleDelete}
        >Delete</button>
             </div>
       
     
    
     </section>
     </article>
     </div>
     )
 }

//  {/* {petByPetOwnerId
//                         .filter((pet) => pet.petOwnerId === petOwnerId) // Filter pets by matching petOwnerId
//                         .map((pet) => (
//                             <div className="pet" key={pet.id}>
//                                 <div >Pet # {pet.id}</div>
//                                 <div>Name: {pet.name}</div>
//                                 <div>
//                                     I am a "{type.find((typeObj) => typeObj.id === pet.petTypeId)?.type}"
//                                 </div>
//                                 <div>Description: {pet.description}</div>
//                                 <button className="form-btn" type="submit" onClick={handleSave}>
//                                     Update
//                                 </button>
//                                 <button className="form-btn" type="submit" onClick={handleDelete}>
//                                     Delete
//                                 </button>
//                             </div>
//                         ))}
//                 </section>
//             </article>
//         </div>
//     )
// } */}
