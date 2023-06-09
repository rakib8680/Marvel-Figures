import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const AllToysTableRow = ({ toys, index }) => {
    const {user} =useContext(AuthContext)

    const { name, pictureURL, quantity, price, sellerName, subCategory, _id } = toys || {};

    return (
        <tr>
            <th>
            </th>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                        <img src={pictureURL} />
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                {name}
            </td>
            <td>{subCategory}</td>
            <td>
                ${price}
            </td>
            <td>
                {quantity}pc
            </td>
            <td>
                <Link to={`/allToys/${_id}`} className='btn btn-square btn-success btn-sm tooltip-left tooltip flex tooltip-success'  data-tip="View Details" onClick={()=>{user? "" : toast.error('Please Login first')}}><FaEye /></Link>
            </td>
            <Toaster/>
        </tr>
    );
};

export default AllToysTableRow;