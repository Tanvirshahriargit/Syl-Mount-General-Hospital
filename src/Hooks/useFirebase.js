import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Login/Firebase/Firebase.init";

//initializeAuthentication call 

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

// signIngoogle Event Handler
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
        })
    }
// user manager observer
    useEffect(() => {
        const unsubscript = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscript;
    }, [])

//  LogOut User Event Handler
    const logOut = () => {
        signOut(auth)
        .then(()=>{})
    }
    return {
        user,
        handleGoogleSignIn,
        logOut

    }

};

export default useFirebase;