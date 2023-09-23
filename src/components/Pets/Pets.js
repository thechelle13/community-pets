import { useEffect, useState } from "react"
import { getAllPets, getPetByPetOwnerId,} from "../../services/PetService"
import "./Pets.css"
import { getAllPetTypes } from "../../services/PetTypeService"
import { useNavigate, useParams } from "react-router-dom"
import { getAllOwners } from "../../services/OwnerService"
import { getUserByEmail, getUserById } from "../../services/UserService"


export const Pets = ({currentUser}) => {
    const [allPets, setAllPets] = useState([])
    const [owner, setOwner] =useState([])
    const [owners, setOwners] = useState([])
    const [type, setType] = useState([])
    
    const {ownerId} = useParams()
   
    const Navigate = useNavigate()
    
    useEffect( () => {
        getAllPets().then((petArray) =>{
            setAllPets(petArray)
            console.log("Pets Set",petArray )
        })
    }, [])

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

    useEffect(()=> {
        getUserById(ownerId).then((data) => {
            const singleOwner = data[0]
            if(singleOwner) {
                setOwner(singleOwner)
            }
        }
        )
    }, [ownerId])
    
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
            {allPets.map((pet) => {
         return (
         <div className="pet" key={pet.id}>
             <div key={owner.id}>Owner ID # {currentUser.id}</div>
             <div >Pet # {pet.id}</div> 
             <div>Name: {pet.name}</div>
             <div>I am a "{type.map((typeObj) => {
             return (
                 <div key={typeObj.id} value={typeObj.type}>
                 {typeObj.type}
                 </div>
             )
             })}"</div>
             <div>Description: {pet.description}</div>
        <button className="form-btn" type="submit" 
         onClick={handleSave}
        >Update</button>
        <button className="form-btn" type="submit" 
        onClick={handleDelete}
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
