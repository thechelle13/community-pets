import { useEffect, useState } from "react"
import "./Addpets.css"

import { useNavigate, useParams} from "react-router-dom"
import { getUserById, userEdited } from "../../services/UserService"


export const EditOwners = ({currentUser}) => {
    const [owner, setOwner] = useState([])

    const {petOwnerId} = useParams()

    useEffect(() => {
        getUserById(petOwnerId).then((ownerObj) => {
        setOwner(ownerObj)
        })
    }, [petOwnerId])
    
    const Navigate = useNavigate()

    // investigate this
    const handleInputChange = (evt) => {
        const copy = { ...owner }
        copy[evt.target.id] = evt.target.value
        setOwner(copy)
    }
    const handleSave = (event) => {
        event.preventDefault()

        const updatedUser = {
            id: currentUser.id,
            fullName: owner.fullName,
            isPetOwner: owner.isPetOwner,
            city: owner.city,
            email: owner.email
        }
        userEdited(updatedUser).then((response) => {
          console.log("API Response:", response)
          setOwner(response)
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
            <div >Current Info: </div>
            <div >Full Name: {currentUser.fullName}</div>
            <div >Email: {currentUser.email}</div>
            <div >City: {currentUser.city}</div>
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