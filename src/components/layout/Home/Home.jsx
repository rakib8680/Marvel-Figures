import React from 'react';
import './Home.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"




const Home = () => {


    const images = [
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2407/5538/CAP_AMERICA_SELECT_2__99284.1681745340.jpg?c=1",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2065/4568/RGB_0398__83311.1667256346.jpg?c=1?imbypass=on",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2270/5115/Marvel_Skrull_AF_01__53431.1678236916.jpg?c=1",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2329/5267/Marvel_MrFantastic_AF_02__06759.1673366096.jpg?c=1?imbypass=on",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2104/4636/Marvel_BlackPanther_Bust_01__11094.1680134577.jpg?c=1",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2061/4550/RGB_9589__68568.1679318494.jpg?c=1?imbypass=on",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2102/4679/Marvel_ScarletWitch_Gallery_01__73202.1668535091.jpg?c=1",
        "",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2268/5045/Marvel_CaptAmericaMjolnir_Bust_01__96904.1663299040.jpg?c=1"

    ]



    return (
        <div>
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
            <div>
                <h1 className='text-center text-3xl '>Gallery</h1>
                <div className='divider w-1/5 mx-auto'></div>
                <div className='w-4/6 mx-auto'>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }} >
                        <Masonry columnsCount={3} gutter="10px">
                            {images.map((image, i) => (
                                <img
                                className=''
                                    key={i}
                                    src={image}
                                    style={{ width: "100%",  display: "block" }}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    );
};

export default Home;