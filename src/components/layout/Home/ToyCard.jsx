import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    console.log(toy);
    const { name, pictureURL, quantity, price, sellerName, sellerEmail, subCategory, _id, rating } = toy || {};

    return (
        <div>
            <div className="card card-compact md:w-[350px] h-[600px]  backdrop-blur-md bg-white bg-opacity-10 shadow-xl p-0 border  mx-auto border-neutral ">
                <figure><img src={pictureURL} /></figure>
                <div className="card-body " >
                    <h2 className="card-title text-3xl font-bold ">{name}</h2>
                    <div className='divider h-[2px]'></div>
                    <p>Sub-Category : {subCategory}</p>
                    <p>Price : ${price}</p>
                    <div className='flex items-center gap-2'>
                        Rating :<FaStar /><FaStar /><FaStar /><FaStar /> <FaStarHalfAlt /> {rating}
                    </div>
                    <p>Quantity : {quantity} pieces</p>
                    <div className="card-actions justify-end">
                        <Link to={`/allToys/${_id}`}  className="btn btn-neutral">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;