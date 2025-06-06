import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
           <div>

           </div>
            <div className="nav space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
            <div className="flex gap-2 items-center">
                <img src={userIcon} alt="" />
                <Link to='auth/login' className="btn btn-neutral rounded-none">Log-In</Link>
            </div>
        </div>
    );
};

export default Navbar;