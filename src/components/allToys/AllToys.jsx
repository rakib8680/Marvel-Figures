import React, { useContext, useEffect, useState } from 'react';
import AllToysTableRow from './AllToysTableRow';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const AllToys = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const url = "http://localhost:5000/allToys"

    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                setToys(data)
            })
    }, [url]);



    return (
        <div className=''>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>Total Toys : {toys.length}</h1>
            <div className="overflow-x-auto w-full ">
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
                            toys.map((toys, index) => <AllToysTableRow toys={toys} key={toys._id} index={index} ></AllToysTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;