import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect } from 'react';
import { useState } from 'react';
import initializeFirebase from '../pages/Login/Firebase/firebase.init';

initializeFirebase()
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const logInUsignGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => setError(error.message))
    }

    return {
        user,
        error,
        isLoading,
        logInUsignGoogle,
        logOut
    }
}

export default useFirebase;