import { useNavigate } from "react-router-dom"
import { petDelete } from "../../services/PetService"
import "./Addpets.css"


export const DeletePet =() => {

const Navigate = useNavigate()

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
    return (<>
        <div>
        <button className="form-btn" onClick={handleDelete} >Delete A Pet?</button>
        </div>
        </>
    )

}
