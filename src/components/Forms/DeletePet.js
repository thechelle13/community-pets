import { useNavigate } from "react-router-dom"
import { petDelete } from "../../services/PetService"
import "./Addpets.css"
import { useEffect, useState } from "react"


export const DeletePet =({currentUser}) => {

const Navigate = useNavigate()

//use Effect that takes currentUserId and if equal to petOwnerId delete

const handleDelete = (event) => {
            event.preventDefault()
    
            const delPet = {
                id: currentUser.id,
                
            }
            petDelete(currentUser.id).then(() => {
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
        <div>
        <button className="form-btn" onClick={handleDelete} >Delete this Pet?</button>
        </div>
        </form>
        </div>
    )
}
