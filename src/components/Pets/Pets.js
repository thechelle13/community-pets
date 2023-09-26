import { useEffect, useState } from "react"
import { getAllPets} from "../../services/PetService"
import "./Pets.css"
//import { getAllPetTypes } from "../../services/PetTypeService"
import { useNavigate} from "react-router-dom"
import { getAllOwners } from "../../services/OwnerService"



export const Pets = ({currentUser}) => {
    const [pet, setPets] = useState([])
    const [owner, setOwner] =useState([])
   
    //const [type, setType] = useState([])

    const Navigate = useNavigate()
    
    useEffect( () => {
        getAllPets().then((petArray) =>{
            const currentUserPets = petArray.filter((pet) => pet.petOwnerId === currentUser.id);
        
        // Set the filtered pets in the state
        setPets(currentUserPets);
        console.log("Pet Set", currentUserPets)
        ;
    });
}, [currentUser.id]);
            
                        

    useEffect( () => {
        getAllOwners().then((ownersArray) =>{
            const thisUser = ownersArray.filter((owner) => owner.id === currentUser.id);
            setOwner(ownersArray)

            console.log("Owner Set", thisUser)
        })
    }, [currentUser.id])

    // useEffect(() => {
    //     getAllPetTypes().then((typeArray)=>{
    //         setType(typeArray)
    //         console.log("Types set.", typeArray)
    //     })
    // }, [])


    
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
            <form className="form">

        <section className="form-group">
            
            <h2>My Pets</h2>
            
       
         <div className="pet" >
             <div key={owner.id}>Owner ID # 
             {currentUser.id}

             {pet.name}</div>
            
        <button className="form-btn" type="submit" 
         onClick={handleSave}
        >Update</button>
        <button className="form-btn" type="submit" 
        onClick={handleDelete}
        >Delete</button>
             </div>
     </section>
     </form>
     </div>
     )
 }

