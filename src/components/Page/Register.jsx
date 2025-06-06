import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="  card bg-base-100  w-full max-w-lg shrink-0 shadow-2xl">
                    <h1 className=" mt-5 text-center font-bold md:text-2xl">Create new acount</h1>
                    <div className="card-body ">
                        <form className="mx-auto flex flex-col gap-4">
                            <div>
                                <label className="input w-90 validator">
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
                                        placeholder="Username"
                                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                                        minlength="3"
                                        maxlength="30"
                                        title="Only letters, numbers or dash"
                                    />
                                </label>
                                
                            </div>
                            <div>
                                <label className="input w-90 validator">
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
                                        placeholder="Photo Url"
                                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                                        minlength="3"
                                        maxlength="30"
                                        title="Only letters, numbers or dash"
                                    />
                                </label>
                               
                            </div>
                            <div className="">
                                <label className="input w-90 validator">
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
                                    <input type="email" placeholder="mail@site.com" required />
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
                                    <input
                                        className=""
                                        type="password"
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
                            <h1 className="text-center">If you have alrady an acount plase <span className="text-primary hover:underline"><Link to='/auth/login'>Log-In</Link></span> now</h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;