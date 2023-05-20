import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/myToys?email=${user.email}`

    const [myToys , setMyToys] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }, [])

    return (
        <div>
            my toys
        </div>
    );
};

export default MyToys;