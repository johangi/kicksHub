import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Kicks<span className="hub">Hub</span></h1>
                </Link>
                <nav>
                    {user && user.admin && <Link to="/adminguide"><span class="veileder">Admin Guide</span></Link>}
                    {user && user.admin && <Link to="/admin"><span class="veileder">Admin</span></Link>}
                    {user && user.admin && <Link to="/veileder"><span class="veileder">Veileder</span></Link>}
                    {user && (
                        <div>
                            <span>{user.email}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>)}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>)}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;