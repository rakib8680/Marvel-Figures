import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../provider/AuthProvider';
import './Register.css'


const Register = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <div className='flex justify-center h-[80vh] items-center bg-secondary'><GridLoader color="#be0003" size={25} /></div>
    }

    useTitle('Register')
    const navigate = useNavigate()
    const location = useLocation()
    // context api 
    const { handleGoogleSignIn, handleGithubSignIn, registerUser, updateUser, loading } = useContext(AuthContext)
    // success  
    const [success, setSuccess] = useState('')
    // error 
    const [error, setError] = useState('')


    // Register with google 
    const googleSignIn = () => {
        setSuccess('')
        setError('')
        handleGoogleSignIn()
            .then(() => {
                setSuccess('Account registered successfully')
                toast.success('Successfully registered')
                navigate(location?.state?.from.pathname || '/')
            })
            .catch(error => setError(error.message))
    };


    // form submit  
    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value



        // // password validation 
        setError('')
        setSuccess('')

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('!! Please provide one upperCase word')
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('!! Please provide at least one number')
            return
        }
        else if (password.length < 6) {
            setError('!! Password must be 6 characters or above')
            return
        }

        // register new user 
        registerUser(email, password)
            .then((result) => {
                setSuccess('Account registered successfully')
                updateUser(result.user, name, photo)
                toast.success('Successfully registered')
                navigate(location?.state?.from.pathname || '/')
            })
            .catch(error => setError(error.message))


        form.reset()


    }



    return (
        <div className="flex justify-center items-center h-screen register-bg p-2 md:p-0  md:my-0">
            <form className="backdrop-blur-xl  shadow-2xl rounded px-11 md:px-14 pt-7 pb-5 md:py-12  md:space-y-6  bg-white bg-opacity-10" onSubmit={handleRegistration}>
                <div className="mb-4">
                    <label className="block   font-bold mb-2 text-2xl" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        id="name"
                        type="text"
                        name='name'
                        required
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block   font-bold mb-2 text-2xl" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-full text-primary leading-tight bg-red-900"
                        id="email"
                        type="text"
                        name='email'
                        required
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block font-bold mb-2 text-2xl" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow  border rounded w-full py-2 px-3 text-primary  leading-tight  bg-red-900"
                        id="password"
                        type="password"
                        name='password'
                        required
                        placeholder="Password"
                    />
                </div>
                <div className="mb-6">
                    <label className="block font-bold mb-2 text-2xl" htmlFor="password">
                        Photo URL
                    </label>
                    <input
                        className="shadow  border rounded w-full py-2 px-3 text-primary mb-3 leading-tight  bg-red-900"
                        id="photo"
                        type="photo"
                        name='photo'
                        placeholder="photo"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="btn bg-red-950 border border-red-800"

                    >
                        Sign Up
                    </button>
                </div>
                <p className='text-green-500 '>{success}</p>
                <p className='text-red-300'>{error}</p>
                <div className='text-center text-sm mt-5'>
                    <div className="divider">OR</div>
                    <h2>SignUp With</h2>
                </div>
                <div className=' mt-5 flex gap-5  justify-around'>
                    <div className="btn btn-circle btn-neutral  cursor-not-allowed"><FaGithub className='w-[20px] h-[20px]' /></div>
                    <div className="btn btn-circle btn-neutral" onClick={googleSignIn}><FaGoogle className='w-[20px] h-[20px]' /></div>
                    <div className="btn btn-circle btn-neutral cursor-not-allowed"><FaTwitter className='w-[20px] h-[20px]' /></div>
                </div>
                <h2 className='text-sm pb-6 text-center mt-6'>Already have an account ? <Link to="/login" className='text-warning'>Login here</Link></h2>
            </form>
            <Toaster />
        </div>
    );
};

export default Register;