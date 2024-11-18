/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

export const authContext = createContext()

const AuthProvider = ({ routes }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null)

    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

    }


    const handleLogin = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
    }


    const handleGoogleLogin = () => {
        signInWithPopup(auth,googleProvider)
    }

    const handleLogout = () => {
        signOut(auth)
    }

    const authInfo = {
        handleGoogleLogin,
        handleLogin,
        handleRegister,
        handleLogout
    }


    // useEffect(()=> {
    //     const unsubscribe = onAuthStateChanged(auth,(currentUser => {


    //         return() => {
    //             unsubscribe();
    //         }
    //     })
    // },[])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser)
        });

       
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {routes}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;