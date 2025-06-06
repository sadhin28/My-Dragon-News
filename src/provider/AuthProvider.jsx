import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    //Create user
    const CreateNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        user,
        setuser,
        CreateNewUser
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;