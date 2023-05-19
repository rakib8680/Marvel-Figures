import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {
    // success  
    const [success, setSuccess] = useState('')
    // error 
    const [error, setError] = useState('')


    return (
        <div className="flex justify-center items-center h-screen register-bg p-2 md:p-0">
            <form className="backdrop-blur-xl  shadow-2xl rounded px-11 md:px-14 pt-14 space-y-6  bg-white bg-opacity-10">
                <div className="mb-4">
                    <label className="block   font-bold mb-2 text-2xl" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-full text-primary leading-tight bg-red-900"
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
                        className="btn bg-red-950"

                    >
                        Sign Up
                    </button>
                </div>
                <p className='text-green-500 '>{success}</p>
                <p className='text-red-400 t'>{error}</p>
                <div className='text-center text-sm mt-5'>
                    <div className="divider">OR</div>
                    <h2>SignUp With</h2>
                </div>
                <div className=' mt-5 flex gap-5  justify-around'>
                    <div className="btn btn-circle btn-neutral  cursor-not-allowed"><FaGithub className='w-[20px] h-[20px]' /></div>
                    <div className="btn btn-circle btn-neutral" ><FaGoogle className='w-[20px] h-[20px]' /></div>
                    <div className="btn btn-circle btn-neutral cursor-not-allowed"><FaTwitter className='w-[20px] h-[20px]' /></div>
                </div>
                <h2 className='text-sm pb-6 text-center mt-6'>Already have an account ? <Link to="/login" className='text-warning'>Login here</Link></h2>
            </form>

        </div>
    );
};

export default Register;