import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, } from "react";
import userLogo from '../assets/user.png'

const Navbar = () => {
    const { user, Logout } = useContext(AuthContext)
 
    return (
        <div className="flex md:mb-0 mb-5 justify-between items-center text-xs md:text-xl">
            
            <div>
                <p>{user && user.displayName}</p>
            </div>
            <div className="nav space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/members'>Members</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="flex gap-2 items-center">
                {
                    user ? <img className="md:w-10 md:h-10 w-5 h-5 rounded-full object-cover" src={user && user.
                        photoURL} alt="" />:<img className="w-10 h-10 rounded-full object-cover" 
                        src={userLogo} alt="" />
                }
                {
                    user && user?.email ? <Link to="/" onClick={Logout} className="btn btn-neutral text-xs md:text-xl rounded-none">Log-Out</Link> : <Link to='auth/login' className="btn btn-neutral text-xs md:text-xl rounded-none">Log-In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;