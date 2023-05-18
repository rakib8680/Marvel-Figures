import React from 'react';
import error from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className='md:w-[700px] '>
                <img src={error} className="" />
            </div>
            <p className="text-2xl text-slate-800 font-semibold mb-8">Oops! Page not found.</p>
            <a href="/" className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-neutral">
                Go back to homepage
            </a>
        </div>
    );
};

export default ErrorPage;