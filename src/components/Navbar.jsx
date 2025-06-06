import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
import { AuthContext } from "../provider/AuthProvider";
import {use, useContext } from "react";
const Navbar = () => {
    const {user,Logout}=useContext(AuthContext)
    console.log(user)
    return (
        <div className="flex justify-between items-center">
           <div>
              <p>{user && user.displayName}</p>
           </div>
            <div className="nav space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="flex gap-2 items-center">
                <img src={userIcon} alt="" />
                {
                   user && user?.email ?<Link onClick={Logout} className="btn btn-neutral rounded-none">Log-Out</Link>: <Link to='auth/login' className="btn btn-neutral rounded-none">Log-In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;