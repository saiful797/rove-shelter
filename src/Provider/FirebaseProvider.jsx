import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();
// Social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider(); 

const FirebaseProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Create user with email and password
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Update user profile with name and imageURL
    const updateUserProfile = (name, imageURL) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imageURL
        })
    }

    // User sign with email and password
    const signInUser = (email, password) =>{

        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // Log in with PopUp
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // User LogOut process
    const logOut = () =>{
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }
            setLoading(false);
        })

        return () => unsubscribe ();
    },[])

    const authInfo ={
        signUpUser, 
        updateUserProfile,
        signInUser,
        googleSignIn,
        githubSignIn,
        logOut,
        loading,
        user,
    }

    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes ={
    children: PropTypes.node,
}
export default FirebaseProvider;