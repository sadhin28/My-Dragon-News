import {  useContext, useRef } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate,} from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
    const navigate = useNavigate()
     const [showPassword, setShowPassword] =useState(false)
     const {login,setuser,loading,forgotPassword} = useContext(AuthContext)
     const location = useLocation()
    const emailref = useRef();
    const auth=getAuth(app)
     const handelLogin=(e)=>{
        e.preventDefault();
        const form = new FormData(e.target)
        const email=form.get('email')
        const password = form.get('password')
        //login
        login(email,password)
        .then(res=>{
          
            setuser(res.user)
            toast.success('Log-In Successfull')
               if(loading){
             return <div className="grid relative top-40 justify-center">
             <span className="loading  loading-infinity loading-xl"></span>
            
              </div>
               }
               navigate( location?.state ? location.state:"/")
            
               
            
        })
        .catch(error=>{
             toast.error(error.message)
        })
        
        
     }
     //forgot password
    const handelForgatePassword = () => {
      const email =   document.getElementsByName('email')[0].value
      if(!email){
        toast.error("Please Provide A valid Email Address")
      }
      else{
        forgotPassword(auth,email)
        .then(res=>{
            toast.success('Forgot Password,Please Check email')
        })
        .catch(error=>{
            toast.error(error.message)
        })
      }
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="  card bg-base-100  w-full max-w-lg shrink-0 shadow-2xl">
                <h1 className=" mt-5 text-center font-bold md:text-2xl">Log-in Your Account</h1>
                <div className="card-body ">
                    <form onSubmit={handelLogin} className="flex py-10 flex-col gap-5  mx-auto">
                        <div className="">
                            <label className="input  validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input name="email" type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <div>
                            <label className="input validator w-full">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                        ></path>
                                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                    </g>
                                </svg>
                                 <p  onClick={() => setShowPassword(!showPassword)} className="relative  cursor-pointer left-47">{showPassword ? <FaEyeSlash /> : <FaEye />}</p>
                                <input
                                    className=""
                                    name="password"
                                     type={showPassword ? 'text' : 'password'}
                                    required
                                    placeholder="Password"
                                    minlength="8"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                />
                            </label>
                            <p className="validator-hint hidden">
                                Must be more than 8 characters, including
                                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                            </p>
                        </div>
                        
                         <div><a onClick={handelForgatePassword} className="link link-hover">Forgot password?</a></div>
                        
                        <div>
                           <button className="btn btn-outline w-full btn-secondary">LogIn</button>
                        </div>
                        <div className="divider">or</div>
                        <h1 className="text-center">Dont Have An Account <span className="text-primary hover:underline"><Link to='/auth/register'>Register</Link></span> now</h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;