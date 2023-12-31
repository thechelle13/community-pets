import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getUserByEmail } from "../../services/UserService"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("val@email.com")
    const navigate = useNavigate()
  
    const handleLogin = (e) => {
      e.preventDefault()
  
      getUserByEmail(email).then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0]
          localStorage.setItem(
            "pet_user",
            JSON.stringify({
              id: user.id,
              isPetOwner: user.isPetOwner,
              fullName: user.fullName, 
              email: user.email, 
              city: user.city
            })
          )
          navigate("/")
        } else {
          window.alert("Invalid login")
        }
      })
    }
  
    return (
      <main className="container-login">
        <section>
          <form className="form-login" onSubmit={handleLogin}>
          <h1 className="new">
                <span>Welcome to
                </span>
                <div></div>
                <span>Community Pets</span>
            </h1>
            <h2>Please sign in</h2>
            <fieldset>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(evt) => set(evt.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <button className="login-btn btn-info" type="submit">
                  Sign in
                </button>
              </div>
            </fieldset>
          </form>
        </section>
        <section>
          <Link to="/register">Not a member yet?</Link>
        </section>
      </main>
    )
  }
  