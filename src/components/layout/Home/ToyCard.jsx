import React from 'react';

const ToyCard = ({ toy }) => {
    console.log(toy);
    const { name, pictureURL, quantity, price, sellerName, sellerEmail, subCategory, description, rating } = toy || {};

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={pictureURL}/></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;