import { useNavigate } from "react-router-dom"
import { petDelete } from "../../services/PetService"
import "./Addpets.css"
import { useEffect, useState } from "react"


export const DeleteOwners =() => {
    const [deleteOwner, setDeleteOwner] = useState({})
const Navigate = useNavigate()

useEffect(()=> {
    petDelete().then((delOwnerObj)=>{
        setDeleteOwner(delOwnerObj)
        
    })
}, [])


const handleDelete = (event) => {
             event.preventDefault()
    
             const delPet = {
    //             id: pet.id,
    //             name: pet.name,
    //             petOwnerId: pet.petOwnerId,
    //             description: pet.description,
    //             petTypeId: pet.petTypeId,
            }
            petDelete(delPet).then(() => {
                 Navigate(`./login`)
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
            <h2>Account Delete:</h2>
        <div>
        <button className="form-btn" onClick={handleDelete} >Delete this Owner Account?</button>
        </div>
        </form>
        </div>
    )
}