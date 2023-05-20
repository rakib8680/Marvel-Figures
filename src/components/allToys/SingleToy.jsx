import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const SingleToy = () => {

    const toy = useLoaderData()
    console.log(toy);
    const { name, pictureURL, quantity, price, sellerName, sellerEmail, subCategory, description, rating } = toy || {};

    return (
        <div className='background pt-20 md:pt-28 mb-96'>
            <div className="card lg:card-side backdrop-blur-md bg-white bg-opacity-10 shadow-2xl md:w-4/6   mx-auto md:h-[600px] p-5 md:p-0 rounded-none md:rounded-xl ">
                <figure>
                    <img src={pictureURL} className="w-full md:w-[600px] rounded-lg md:rounded-none" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold ">{name}</h2>
                    <div className='divider'></div>
                    <p>Sub-Category : {subCategory}</p>
                    <p>Seller : {sellerName}</p>
                    <p>Email : {sellerEmail}</p>
                    <p>Price : ${price}</p>
                    <div className='flex items-center gap-2'>
                        Rating :<FaStar /><FaStar /><FaStar /><FaStar /> <FaStarHalfAlt/> {rating}
                    </div>
                    <p>Quantity : {quantity} pieces</p>
                    <p className='md:w-[650px]'>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/allToys' className="btn btn-neutral">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;