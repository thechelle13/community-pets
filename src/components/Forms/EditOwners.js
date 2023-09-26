import { useState } from "react"
import "./Addpets.css"

import { useNavigate} from "react-router-dom"
import { userEdited } from "../../services/UserService"


export const EditOwners = ({currentUser}) => {
    const [owner, setOwner] = useState([])
    const [editUser, setEditUser] = useState({
        name:"", 
        petOwnerId: 0, 
        petTypeId: 0,
        description: ""
    })
    const Navigate = useNavigate()



    // investigate this
    const handleInputChange = (evt) => {
        const copy = { ...editUser }
        copy[evt.target.id] = evt.target.value
        setEditUser(copy)
    }

    const handleSave = (event) => {
        event.preventDefault()

        const updatedUser = {
            id: editUser.id,
            name: editUser.fullName,
            isPetOwner: editUser.isPetOwner,
            city: editUser.city,
            email: editUser.email
        }
        userEdited(updatedUser).then(() => {
            Navigate(`/Owners`)
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
            <h2>Owner Update:</h2>
            <div currentUser={currentUser.id}>Current Info: {currentUser.id}</div>
            <div currentUser={currentUser.id}>Full Name: {currentUser.fullName}</div>
            <div currentUser={currentUser.id}>Email: {currentUser.email}</div>
            <div currentUser={currentUser.id}>City: {currentUser.city}</div>
            <fieldset>
              <div className="form-group">
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Enter your First and Last name"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <input
                  onChange={handleInputChange}
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email address"
                  required
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <input
                  onChange={handleInputChange}
                  type="text"
                  id="city"
                  className="form-control"
                  placeholder="Enter your City"
                  required
                  autoFocus
                />
              </div>
            </fieldset>

           
            <fieldset>
              <div className="form-group">
                <label>
                  <input
                    onChange={(evt) => {
                      const copy = { ...owner }
                      copy.isPetOwner = evt.target.checked
                      setOwner(copy)
                    }}
                    type="checkbox"
                    id="isPetOwner"
                    required
                  />
                  I am an pet owner{" "}
                </label>
              </div>
            </fieldset>
            <section>
            <button className="form-btn" type="submit" onClick={handleSave}>Edit Owner</button>
            </section>     
        </form>
        </div>
    )
}