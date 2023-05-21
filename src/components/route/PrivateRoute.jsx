import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    
    if (loading) {
        return <div className='flex justify-center h-[80vh] items-center bg-secondary'><GridLoader color="#be0003" size={25} /></div>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>

};

export default PrivateRoute;