import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config";




export const AuthContext = createContext(null)
const auth = getAuth(app);






const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);




    // google signIn 
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // // github sign in 
    // const githubProvider = new GithubAuthProvider()
    // const handleGithubSignIn = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, githubProvider)
    // };


    // // register with email and pass 
    // const registerUser = (email, password) => {
    //     setLoading(true);
    //     console.log(loading);
    //     return createUserWithEmailAndPassword(auth, email, password)
    // };


    // // sign in with email and pass
    // const signInUser = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password)
    // };


    // // update profile 
    // const updateUser = (user, name, photo) => {
    //     return updateProfile(user, {
    //         displayName: name,
    //         photoURL: photo
    //     })
    // }

    // // sign out 
    // const logOut = () => {
    //     setLoading(true);
    //     return signOut(auth)
    // }

    // set current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, []);


    // auth information 
    const authInfo = {
        user,
        handleGoogleSignIn,
        // handleGithubSignIn,
        // logOut,
        // registerUser,
        // signInUser,
        loading,
        // updateUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;