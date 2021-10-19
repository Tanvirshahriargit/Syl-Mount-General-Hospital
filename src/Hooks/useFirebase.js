import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut, onAuthStateChanged, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Login/Firebase/Firebase.init";

//initializeAuthentication call 

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [ email, setEmail ] = useState("");
    const [pass, setPass] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

// signIngoogle Event Handler
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
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

    // reload and sign in 
    // prevent reload
    const handleSignin = e => {
        console.log(email, pass);
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
        })
        e.preventDefault();
    }

    // prevent Reload an register
    const handleRegister = e => {
        console.log(email, pass);
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
        })

        e.preventDefault();
    }
    // handleEmailChange target
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //handleEmailChange target
    const handlePasswordChange = e => {
        setPass(e.target.value);
    }

//  LogOut User Event Handler
    const logOut = () => {
        signOut(auth)
        .then(()=>{})
    }
    return {
        user,
        handleGoogleSignIn,
        handleSignin,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        logOut

    }

};

export default useFirebase;