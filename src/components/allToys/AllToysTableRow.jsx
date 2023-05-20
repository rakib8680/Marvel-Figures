import React from 'react';
import { FaEye } from 'react-icons/fa';


const AllToysTableRow = ({ toys, index }) => {
    console.log(toys, index);

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
                {price}
            </td>
            <td>
                {quantity}
            </td>   
            <td>
               <button className='btn btn-square btn-success btn-sm'><FaEye/></button>
            </td>   
        </tr>
    );
};

export default AllToysTableRow;