import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Login/Firebase/Firebase.init";

//initializeAuthentication call 

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loading, setLoading] = useState(true);
    const [checkerror ,setCheckerror] = useState("")
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // signIngoogle Event Handler
    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
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
            setLoading(false);
        })
        return () => unsubscript;
    }, [])


    // prevent Reload an register
    const handleRegister = e => {
        e.preventDefault();
        console.log(email, pass);
        // validitain check
        if (pass.length < 6) {
            setCheckerror("Please Parovide Password at least 6 characters long")
            return;
        }
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // handleEmailChange target
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //handleEmailChange target
    const handlePasswordChange = e => {
        setPass(e.target.value);
    }

     // reload and sign in 
    // prevent reload
    const handleSignin = e => {
        e.preventDefault();
        console.log(email, pass);
        // validitain check
        if (pass.length < 6) {
            setCheckerror("Please Parovide Password at least 6 characters long")
            return;
        }
        setLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user)
                setCheckerror('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    }

    //  LogOut User Event Handler
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }
    return {
        user,
        loading,
        checkerror,
        handleGoogleSignIn,
        handleSignin,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        logOut

    }

};

export default useFirebase;