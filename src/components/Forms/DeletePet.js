import { useNavigate } from "react-router-dom"
import { petDelete } from "../../services/PetService"
import "./Addpets.css"
import { useEffect, useState } from "react"


export const DeletePet =({currentUser}) => {
const [selectedDelPet, setSelectedDelPet] = useState([])

const Navigate = useNavigate()

useEffect( ()=>{
    setSelectedDelPet()
},[])
//use Effect that takes currentUserId and if equal to petOwnerId delete

const handleDelete = (event) => {
            event.preventDefault()
    
            const delPet = {
                id: currentUser.petId,
                
            }
            petDelete(selectedDelPet).then(() => {
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
            <h2>Pet Delete:</h2>
            {selectedDelPet}
            </form>
        <div>
        <button className="form-btn" onClick={handleDelete} >Delete this Pet?</button>
        </div>
        
        </div>
    )
}
