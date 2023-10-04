/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext()



const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true)

    // create user in login 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // create register 

    const LogIn = (email,password) =>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }

    // sign Out user
    const LogOut = () =>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        LogIn,
        LogOut,
        loading
    }
    return (
       <AuthContext.Provider value = {authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;