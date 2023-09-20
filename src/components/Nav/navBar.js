import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {
    const navigate = useNavigate()


    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/">Welcome</Link>
            </li>
            <li className="navbar-item">
                <Link to="/Owners">Home</Link>
            </li>
            <li className="navbar-item">
                <Link to="/Pets">Pets</Link>
            </li>
            <li className="navbar-item">
                <Link to="/AddPets">Update Pets</Link>
            </li>
            {localStorage.getItem("pet_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("pet_user")
                        navigate("/", { replace: true })
                    }}
                    >
                    Logout
                </Link>
            </li>
    ) : ( ""
    )}
</ul>
)
}