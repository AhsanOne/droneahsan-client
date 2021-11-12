import React, { useState, useEffect } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import initializeFirebase from '../Pages/Login/Login/Firebase/firebase.init';

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Register User
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST')
                // update user profile to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .finally(() => setIsLoading(false));
        history.replace('/')
    }

    // Sign in with google

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .finally(() => setIsLoading(false));
    }

    // Login user whth email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })

            .finally(() => setIsLoading(false));
    }

    const logoutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // Save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://whispering-woodland-67196.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // Check Admin
    useEffect(() => {
        fetch(`https://whispering-woodland-67196.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Detect user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [auth])

    return {
        user,
        registerUser,
        loginUser,
        logoutUser,
        signInWithGoogle,
        isLoading,
        admin,
    }
}

export default useFirebase
