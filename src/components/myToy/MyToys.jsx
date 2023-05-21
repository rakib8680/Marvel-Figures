import { AuthContext } from '../provider/AuthProvider';
import React, { useContext, useEffect, useState } from 'react';
import MyToysTableRow from './MyToysTableRow';
import { GridLoader } from 'react-spinners';
import { useNavigation } from 'react-router-dom';

const MyToys = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <div className='flex justify-center h-[80vh] items-center bg-secondary'><GridLoader color="#be0003" size={25} /></div>
    }

    const { user } = useContext(AuthContext)

    const [myToys, setMyToys] = useState([])
    const [filter, setFilter] = useState("")

    const url = `https://marvel-figures-server.vercel.app/myToys?email=${user.email}&text=${filter}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])


    const handleSort = (e) => {
        const text = e.target.value;
        setFilter(text)
    }


    return (
        <div className='pb-24 pt-10'>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>Total Toys : {myToys.length}</h1>
            <div className='text-end md:pr-24 mb-10'>
                <select className="select select-bordered  max-w-xs " onChange={handleSort}>
                    <option disabled selected>Sort By</option>
                    <option>Price: Low To High</option>
                    <option>Price: High To Low</option>
                </select>
            </div>
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
                            myToys.map((toy, index) => <MyToysTableRow toy={toy} key={toy._id} index={index} myToys={myToys} setMyToys={setMyToys}></MyToysTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;