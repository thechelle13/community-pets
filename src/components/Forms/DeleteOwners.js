import { useNavigate } from "react-router-dom"
import "./Addpets.css"
import { userDelete } from "../../services/UserService"

export const DeleteOwners =({currentUser}) => {

    const Navigate = useNavigate()

    const handleDelete = (event) => {
            event.preventDefault()
    
            const delUser = {
                id: currentUser.id,               
            }
            userDelete(currentUser.id).then(() => {
                Navigate(`/login`)
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
            {currentUser.name}
        <div>
        <button className="form-btn" onClick={handleDelete} >Delete this Owner Account?</button>
        </div>
        </form>
        </div>
    )
}