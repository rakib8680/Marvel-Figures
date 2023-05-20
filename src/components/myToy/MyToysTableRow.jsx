import React from 'react';
import { FaEye, FaPencilRuler, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysTableRow = ({toy,index, myToys, setMyToys}) => {


    const { name, pictureURL, quantity, price, sellerName, subCategory, _id } = toy || {};



    // delete toy 
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                console.log(result);
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/allToys/${_id}`, {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = myToys.filter(toys=>toys._id !==_id)
                                setMyToys(remaining)
                            }
                        })

                }
            })
    }

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
                <Link to={`/allToys/${_id}`} className='btn btn-square btn-success btn-sm tooltip-left tooltip flex tooltip-success' data-tip="View Details"><FaEye /></Link>
                <Link to={`/editToy/${_id}`} className='btn btn-square btn-info btn-sm tooltip-left tooltip flex tooltip-info my-2' data-tip="Edit Details"><FaPencilRuler /></Link>
                <button className='btn btn-square btn-error btn-sm tooltip-left tooltip flex tooltip-error' data-tip="Delete Toy" onClick={() => handleDelete(_id)}><FaTrash /></button>
            </td>
        </tr>
    );
};

export default MyToysTableRow;