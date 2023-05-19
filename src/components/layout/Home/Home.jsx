import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='background'>
            <div className='container mx-auto'>
                <div className=''>
                    <h1 className='md:text-4xl text-2xl text-center font-black  bg-secondary w-fit mx-auto px-5 py-6 '>
                        MARVEL ACTION FIGURES <br /> AND <br /> COLLECTIBLES
                    </h1>
                </div>
                <div className=' text-center mt-[480px] backdrop-blur-md py-6 px-4 w-fit mx-auto bg-white  rounded-md  bg-opacity-5'>
                    <p>Step into a world of wonder and excitement as you explore our legendary collection of comic and movie-based Marvel characters. <br /> Discover the world of Marvel action figures at our online store. Start your collection today and embark on a <br /> thrilling adventure that will leave you  marveling at the power and <br /> craftsmanship of these legendary figures.</p>
                    <button className='btn btn-neutral mt-4'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;