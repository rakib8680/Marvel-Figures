import React from 'react';
import { useNavigation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import FeaturedToy from './FeaturedToy';
import Gallery from './Gallery';
import './Home.css'
import Tab from './Tab';
import logo from '../../../assets/logo.jpg'




const Home = () => {

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <div className='flex justify-center h-[80vh] items-center bg-secondary'><GridLoader color="#be0003" size={25} /></div>
    }

    console.log(navigation.state)


    return (
        <div>
            {/* banner  */}
            <div className='background md:mb-0 mb-20'>
                <div className='container mx-auto'>
                    <div className=''>
                        <h1 className='md:text-4xl text-2xl text-center font-black  bg-secondary w-fit mx-auto px-5 py-6 '>
                            MARVEL ACTION FIGURES <br /> AND <br /> COLLECTIBLES
                        </h1>
                    </div>
                    <div className=' text-center md:mt-[480px] mt-[370px] backdrop-blur-md py-6 px-4 w-fit mx-auto bg-white  rounded-md  bg-opacity-5'>
                        <p>Step into a world of wonder and excitement as you explore our legendary collection of comic and movie-based Marvel characters. <br /> Discover the world of Marvel action figures at our online store. Start your collection today and embark on a <br /> thrilling adventure that will leave you  marveling at the power and <br /> craftsmanship of these legendary figures.</p>
                        <button className='btn btn-secondary  mt-4'>Buy Now</button>
                    </div>
                </div>
            </div>
            {/* gallery  */}
            <div className='bg-gradient-to-b from-black via-red-950 to-black '>
                <h1 className='text-center text-3xl  md:my-10'>Gallery</h1>
                <div className='divider md:w-1/3 w-3/4 mx-auto mb-10'></div>
                <Gallery></Gallery>
                <div className='divider  md:w-1/3 w-3/4 mx-auto mt-20' ></div>
            </div>

            {/* tab  */}
            <div className='mt-20'>
                <Tab></Tab>
            </div>

            {/* about us  */}
            <h1 className='text-center text-3xl  mb-10 mt-40'>Our Story</h1>
            <div className='divider md:w-1/3 w-3/4 mx-auto md:mb-20'></div>
            <div className='flex  justify-center items-center container mx-auto gap-10 flex-col md:flex-row p-5 md:p-0'>
                <div className='md:w-[500px]'>
                    <h1 className='text-4xl mb-5'>So Many Toys. So Much Fun!</h1>
                    <p>For 25 years, Entertainment Earth has been the premier online destination for the latest and greatest toys, the most exciting action figures, and the coolest gifts and collectibles pop culture has to offer. From television, movies, sports, celebrities, comics, Internet memes, and every fandom in between, we drop new products daily and curate our selection so you don’t miss out. Whether you’re looking for something stellar from a galaxy far, far away with Star Wars or from the streets of Gotham City with DC Comics, we’ve got surprises for everyone. Get access to exclusive releases and limited-run pre-orders. You can even reserve hard-to-find items before they arrive! From Funko to Hasbro, all your favorite vendors are represented in our robust catalogue of cool collectibles. Take advantage of our unparalleled industry expertise and make your collection as worthy as Marvel’s Thor. As collectors ourselves, we are pleased to offer Risk Free Shopping with our industry-leading Mint Condition Guarantee™ and Hassle Free 90-Day Returns. Find that grail you're seeking for yourself or someone you love!</p>
                    <button className='btn btn-lg btn-outline rounded-none mt-5'>Read Our Story</button>
                </div>
                <div className='divider md:divider-horizontal md:h-80  md:my-auto w-3/4   mx-auto md:w-auto'></div>
                <div className='text-center'>
                    <img src={logo}  />
                    <h1 className='text-5xl font-black bg-red-950 pt-1 pb-3'>Marvel  Figures</h1>
                </div>  
            </div>

            {/* featured toys  */}
            <div className='container mx-auto '>
                <h1 className='text-center text-3xl  md:my-10'>Our Featured Toys</h1>
                <div className='divider md:w-1/3 w-3/4 mx-auto mb-10'></div>
                <FeaturedToy></FeaturedToy>
            </div>

        </div>
    );
};

export default Home;