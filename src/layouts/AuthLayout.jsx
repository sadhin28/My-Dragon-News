import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="header bg-[#F3F3F3] ">
           <div className="w-11/12 mx-auto">
            <header className="pt-5">
             <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
           </div>
         
        </div>
    );
};

export default AuthLayout;