import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

const Header = () => {
    const user = { name: 'john' };
    return (
        <div className="navbar bg-secondary mb-8 py-4  md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link>Services</Link>
                        </li>
                        {user?.email ?
                            <li>
                                <Link to='/bookings' className='btn btn-ghost'>My Bookings</Link>
                                <button className='btn btn-error' >Log Out</button>
                            </li>
                            :
                            <li>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link>
                            </li>
                        }
                    </ul>
                </div>
                <Link to="/" className="flex items-center">
                    <img src={logo} className="w-16 h-16 rounded-full" />
                    <h1 className='font-black md:ms-5 md:text-2xl md:leading-6'>Marvel <br /> Figures</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <a href='#about' className="justify-between">
                            About
                        </a>

                    </li>
                    <li>
                        <Link>Services</Link>
                    </li>
                    {user?.email ?
                        <li>
                            <Link to='/bookings' className='btn btn-ghost'>My Bookings</Link>
                            <button className='btn btn-error ' >Log Out</button>
                        </li>
                        :
                        <li>
                            <NavLink to='/login' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Login</NavLink>
                            <NavLink to='/register' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Register</NavLink>

                        </li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn  btn-outline btn-primary duration-200 btn-sm md:btn-md">Get started</a>
            </div>
        </div>
    );
};

export default Header;