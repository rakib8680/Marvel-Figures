import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className="navbar bg-secondary py-10 md:py-4  md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>All Toys</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Blogs</NavLink>

                        </li>
                        {user?.email ?
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Add a Toy</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>My Toys</NavLink>
                            </li>
                            :
                            <li>
                                <NavLink to='/login' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Login</NavLink>
                                <NavLink to='/register' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Register</NavLink>

                            </li>
                        }
                    </ul>
                </div>
                <Link to="/" className="flex items-center">
                    <img src={logo} className="md:w-16 md:h-16 w-12 h-12 rounded-full" />
                    <h1 className='font-black md:ms-5 md:text-2xl md:leading-6 '>Marvel <br /> Figures</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Home</NavLink>

                    </li>
                    <li>
                        <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>All Toys</NavLink>
                    </li>

                    {user?.email ?
                        <li>
                            <NavLink to='/addToy' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Add a Toy</NavLink>
                            <NavLink to="/myToys" className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>My Toys</NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to='/login' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Login</NavLink>
                            <NavLink to='/register' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Register</NavLink>

                        </li>
                    }
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-semibold text-primary' : 'default')}>Blogs</NavLink>

                    </li>
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    user?.email &&
                    <>
                        <div className="avatar mr-5 tooltip tooltip-left tooltip-neutral" data-tip={user?.displayName}>
                            <div className="w-11 rounded-full ring">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <button className='btn btn-outline btn-error btn-sm'>Log Out</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;