import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
   
    //Create user
    const CreateNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //updateprofile
    const Updateprofiel=(name,photo)=>{
        updateProfile(auth.currentUser,{
             displayName: name, 
             photoURL: photo
        })
    }

      useEffect(()=>{
     const  unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setuser(currentUser)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    //Logout
    const Logout=()=>{
        return signOut(auth)
    }
    const authInfo={
        user,
        setuser,
        CreateNewUser,
        Updateprofiel,
        Logout
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;