import React, { useState } from 'react';

const Login = () => {
    // success  
    const [success, setSuccess] = useState('')
    // error 
    const [error, setError] = useState('')


    return (
        <div className="flex justify-center items-center h-screen background p-2 md:p-0">
            <form className="backdrop-blur-xl  shadow-md rounded px-11 md:px-14 pt-14 space-y-6 ">
                <div className="mb-4">
                    <label className="block text-white  font-bold mb-2 text-2xl" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-full text-black leading-tight "
                        id="email"
                        type="text"
                        name='email'
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow  border rounded w-full py-2 px-3 text-black mb-3 leading-tight "
                        id="password"
                        type="password"
                        name='password'
                        placeholder="Password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="btn btn-info"

                    >
                        Sign In
                    </button>
                </div>
                <div className="mt-5 text-sm">
                    <p className="inline-block align-baseline text-slate-300 mr-3">
                        Don't have an account yet?
                    </p>
                    <a href="/register" className="text-blue-500 hover:text-blue-800"  >
                        Sign up here.
                    </a>
                </div>
                <p className='text-green-500 '>{success}</p>
                <p className='text-red-400 t'>{error}</p>
                <div className='flex flex-col gap-2 pb-9'>
                    <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type='button' >
                        <div className="relative flex items-center space-x-4 justify-center">
                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                            <span className="block w-max font-semibold tracking-wide text-slate-400  text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                        </div>
                    </button>
                    <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" type='button'>
                        <div className="relative flex items-center space-x-4 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <span className="block w-max font-semibold tracking-wide text-slate-400 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                        </div>
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Login;