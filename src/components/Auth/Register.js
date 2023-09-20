import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getUserByEmail } from "../../services/UserService"

export const Register = (props) => {
    const [owner, setOwner] = useState({
      email: "",
      fullName: "",
      isPetOwner: true,
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        createUser(owner).then((createdUser) => {
          if (createdUser.hasOwnProperty("id")) {
            localStorage.setItem(
              "pet_user",
              JSON.stringify({
                id: createdUser.id,
                staff: createdUser.isPetOwner,
              })
            )
    
            navigate("/")
          }
        })
      }
      const handleRegister = (e) => {
        e.preventDefault()
        getUserByEmail(owner.email).then((response) => {
          if (response.length > 0) {
            // Duplicate email. No good.
            window.alert("Account with that email address already exists")
          } else {
            // Good email, create user.
            registerNewUser()
          }
        })
      }
      const updateOwners = (evt) => {
        const copy = { ...owner }
        copy[evt.target.id] = evt.target.value
        setOwner(copy)
      }

      return (
        <main style={{ textAlign: "center" }}>
          <form className="form-login" onSubmit={handleRegister}>
          <h1>
              
                <span>Community Pets </span>
                <div></div>
                <span >Create Account </span>
            </h1>
            <h2>Please Register</h2>
            <fieldset>
              <div className="form-group">
                <input
                  onChange={updateOwners}
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
                  onChange={updateOwners}
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
                  onChange={updateOwners}
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
            <fieldset>
              <div className="form-group">
                <button className="login-btn btn-info" type="submit">
                  Register
                </button>
              </div>
            </fieldset>
          </form>
        </main>
      )
}