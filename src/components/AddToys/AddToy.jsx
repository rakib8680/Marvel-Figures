import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const AddToy = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        // post to db
        fetch('https://marvel-figures-server.vercel.app/allToys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Toy added successfully!')
                    navigate('/myToys')
                }
            })
    };

    return (
        <div className='flex justify-center items-center md:h-screen login-bg  md:p-0 pt-[565px] pb-[560px] md:pb-0 md:pt-0'>
            <form onSubmit={handleSubmit(onSubmit)} className="backdrop-blur-xl  shadow-2xl md:rounded px-11 md:px-14  pt-20  md:pt-14 pb-5 space-y-6  bg-white bg-opacity-10 ">
                {errors.exampleRequired && <span>This field is required</span>}
                <h1 className='text-center text-2xl font-semibold'>Add a Toy</h1>
                <div className='divider w-1/3 mx-auto'></div>
                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Toy picture
                    </label>
                    <input
                        className="shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("pictureURL")}
                        placeholder="Picture-URL"
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
                        placeholder="Toy Name"
                    />
                </div>

                <div className='inline-flex flex-col'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Toy Category
                    </label>
                    <select className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900" {...register("subCategory", { required: true })}>
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
                        Seller Email
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("sellerEmail")}
                        placeholder="seller email"
                        type="email"
                        defaultValue={user?.email}
                    />
                </div>

                <div className='inline-flex flex-col'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Price
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("price", { required: true, valueAsNumber: true })}
                        placeholder="Price"
                        type="text"
                    />
                </div>


                <br />

                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Ratings
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("rating", { required: true })}
                        placeholder="Rating"
                        type="text"
                    />
                </div>

                <div className='inline-flex flex-col md:mr-5'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Quantity
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("quantity", { required: true })}
                        placeholder="Available Quantity"
                        type="text"
                    />
                </div>

                <div className='inline-flex flex-col'>
                    <label className=" font-bold mb-1 text-lg" htmlFor="email">
                        Descriptions
                    </label>
                    <input
                        className="text-input shadow  border rounded py-2 px-3 md:w-[400px] w-[302px] text-primary leading-tight bg-red-900"
                        {...register("description")}
                        placeholder="description"
                    />
                </div>

                <br />


                <div className='text-center py-5'>
                    <input className="btn " value="Add Toy  " type="submit" />
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default AddToy;