import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const EditToys = () => {
    const toy = useLoaderData();
    const { name, pictureURL, quantity, price, sellerName, sellerEmail, subCategory, description, rating, _id } = toy || {};

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        // post to db
        fetch(`http://localhost:5000/allToys/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${name} updated successfully!`)
                    navigate('/myToys')
                }
            })
    };

    return (
        <div className='flex justify-center items-center md:h-screen login-bg   pt-[565px] pb-[560px] md:pb-0 md:pt-0 '>
            <form onSubmit={handleSubmit(onSubmit)} className="backdrop-blur-xl  shadow-2xl md:rounded px-11 md:px-14  pt-20  md:pt-14 pb-5 space-y-6  bg-white bg-opacity-10 ">
                {errors.exampleRequired && <span>This field is required</span>}
                <h1 className='text-center text-2xl font-semibold'>Update <span className='text-warning font-bold'>{name}</span> Details</h1>
                <div className='divider w-1/3 mx-auto'></div>
                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Toy picture
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("pictureURL")}
                        defaultValue={pictureURL}
                        type='url'
                    />
                </div>

                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Toy Name
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("name", { required: true })}
                        defaultValue={name}
                    />
                </div>

                <div className='inline-flex flex-col'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Toy Category
                    </label>
                    <select className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900" {...register("subCategory", { required: true })}
                    >
                        <option value="avengers">avengers</option>
                        <option value="guardians">guardians</option>
                        <option value="fantasticFour">fantasticFour</option>
                    </select>
                </div>

                <br />


                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Seller Name
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("sellerName", { required: true })}
                        placeholder="seller name"
                        type="text"
                        defaultValue={user?.displayName}
                    />
                </div>



                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Price
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("price")}
                        defaultValue={price}
                        type="text"
                    />
                </div>

                <div className='inline-flex flex-col '>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Ratings
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("rating", { required: true })}
                        defaultValue={rating}
                        type="text"
                    />
                </div>

                <br />


                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Quantity
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("quantity", { required: true })}
                        defaultValue={quantity}
                        type="text"
                    />
                </div>

                <div className='inline-flex flex-col '>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Descriptions
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[820px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("description")}
                        defaultValue={description}
                    />
                </div>

                <br />


                <div className='text-center py-5'>
                    <Link className='text-center btn btn-error btn-outline md:w-72' to="/myToys" >
                        Cancel
                    </Link>
                    <input className="btn md:w-72" value="Update" type="submit" />
                </div>

            </form>
            <Toaster />
        </div>
    );
};

export default EditToys;