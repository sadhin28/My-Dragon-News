import { useContext,  useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    //call Authcontext api
    const {CreateNewUser,setuser,Updateprofiel}=useContext(AuthContext)
    const handelSubmit=(e)=>{
        e.preventDefault();
        //get form data
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password=form.get('password')
       
        
        CreateNewUser(email,password)
        .then(res=>{
            
            setuser(res.user)
            //update profile
            Updateprofiel(name,photo)
            .then(result=>{
                toast.success('Register Successfull')
            })
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
  const auth=getAuth(app)
    const provider = new GoogleAuthProvider();
  const handelLoginWithGoogle=()=>{
        signInWithPopup(auth,provider)
        .then(res=>{
            setuser(res.user)
        })
        .catch(error=>{
            toast.error(error.message)
        });
       
    }
  
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="  card bg-base-100  w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className=" mt-5 text-center font-bold md:text-2xl">Create A New Account</h1>
                    <div className="card-body ">
                        <form onSubmit={handelSubmit} className="mx-auto flex flex-col gap-4">
                            <div>
                                <label className="input  validator">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Username"
                                        
                                    />
                                </label>

                            </div>
                            <div>
                                <label className="input  validator">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="text"
                                        required
                                        name="photo"
                                        placeholder="Photo Url"
                                        
                                    />
                                </label>

                            </div>
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

                            <div>
                                <button className="btn btn-outline w-full btn-secondary">Register Now</button>
                            </div>
                            <div className="divider">or</div>
                              <button onClick={handelLoginWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                            <h1 className="text-center">Allready Have An acount <span className="text-primary hover:underline"><Link to='/auth/login'>Log-In</Link></span> now</h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;