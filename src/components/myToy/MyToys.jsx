import { AuthContext } from '../provider/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import MyToysTableRow from './MyToysTableRow';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/myToys?email=${user.email}`

    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])

    return (
        <div>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>Total Toys : {myToys.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead >
                        <tr >
                            <th>

                            </th>
                            <th ></th>
                            <th className='text-base text-warning'>Photo</th>
                            <th className='text-base text-warning'>Seller</th>
                            <th className='text-base text-warning'>Toy Name</th>
                            <th className='text-base text-warning'>Sub Category</th>
                            <th className='text-base text-warning'>Price</th>
                            <th className='text-base text-warning'>Quantity</th>
                            <th className='text-base text-warning'></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            myToys.map((toy, index) => <MyToysTableRow toys={toy} key={toy._id} index={index} ></MyToysTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;