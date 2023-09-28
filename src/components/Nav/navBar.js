import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {
    const navigate = useNavigate()


    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/" className="navbar-link">Welcome</Link>
            </li>
            <li className="navbar-item">
                <Link to="/Owners" className="navbar-link">My Home</Link>
            </li>
            <li className="navbar-item">
                <Link to="/Pets" className="navbar-link">My Pets </Link>
            </li>
            <li className="navbar-item">
                <Link to="/PetPosts" className="navbar-link">Post to Exchange</Link>
            </li>
            <li className="navbar-item">
                <Link to="/PetPostList" className="navbar-link">Exchange</Link>
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