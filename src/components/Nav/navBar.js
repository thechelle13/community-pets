import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()


    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
                <Link to="/pets">Pets</Link>
            </li>
            <li className="navbar-item">
                <Link to="/pets">Owners</Link>
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