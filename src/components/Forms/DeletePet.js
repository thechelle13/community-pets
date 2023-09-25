import { useNavigate } from "react-router-dom"
import { petDelete } from "../../services/PetService"
import "./Addpets.css"
import { useEffect, useState } from "react"


export const DeletePet =() => {
    const [deletePet, setDeletePet] = useState({})
const Navigate = useNavigate()

useEffect(()=> {
    petDelete().then((delPetObj)=>{
        setDeletePet(delPetObj)
        console.log("Type set.")
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
                 Navigate(`./Pets`)
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
            <h2>Pet Delete:</h2>
        <div>
        <button className="form-btn" onClick={handleDelete} >Delete this Pet?</button>
        </div>
        </form>
        </div>
    )
}
