import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';
import FeaturedToy from './FeaturedToy';
import Gallery from './Gallery';
import './Home.css'
import Tab from './Tab';
import logo from '../../../assets/logo.jpg'
import useTitle from '../../../Hooks/useTitle';




const Home = () => {


    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <div className='flex justify-center h-[80vh] items-center bg-secondary'><GridLoader color="#be0003" size={25} /></div>
    }
    

    useTitle('Home')


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
                    <div className=' text-center md:mt-[480px] mt-[300px] backdrop-blur-md py-6 px-4 w-fit mx-auto bg-white  rounded-md  bg-opacity-5 text-sm'>
                        <p>Step into a world of wonder and excitement as you explore our legendary collection of comic and movie-based Marvel characters. <br /> Discover the world of Marvel action figures at our online store. Start your collection today and embark on a <br /> thrilling adventure that will leave you  marveling at the power and <br /> craftsmanship of these legendary figures.</p>
                        <Link to='/allToys' className='btn bg-red-950 border border-accent  mt-4'>Buy Now</Link>
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
                    <img src={logo} />
                    <h1 className='text-5xl font-black bg-red-950 pt-1 pb-3'>Marvel  Figures</h1>
                </div>
            </div>

            {/* featured toys  */}
            <div className=' mt-20 md:pt-16 pt-24 pb-24 bg-gradient-to-r from-black via-secondary to-black'>
                <h1 className='text-center text-3xl  md:my-10'>Our Featured Toys</h1>
                <div className='divider md:w-1/3 w-3/4 mx-auto mb-10'></div>
                <div className=''>
                    <div>
                        <FeaturedToy></FeaturedToy>
                    </div>
                    <div className='container mx-auto px-5 pt-10  md:p-0'>
                        <div>
                            <h1 className='text-3xl text-warning'>#1 Thor</h1>
                            <div className='divider w-32 my-0'></div>
                            <p className='mb-5'>Thor is a fictional character from Marvel Comics, known as the god of thunder. He is a superhero and a member of the Avengers. Thor is based on the Norse mythology deity of the same name.In the Marvel Cinematic Universe (MCU), Thor is portrayed by actor Chris Hemsworth. He first appeared in the film "Thor" released in 2011 and has since appeared in multiple MCU movies, including "The Avengers" series, "Thor: The Dark World," "Thor: Ragnarok,"</p>
                        </div>
                        <div>
                            <h1 className='text-3xl text-warning'>#2 Nebula</h1>
                            <div className='divider w-32 my-0'></div>
                            <p className='mb-5'>Nebula is a fictional character from Marvel Comics and the Marvel Cinematic Universe (MCU). She is known as a cyborg and an antagonist-turned-heroine in the Guardians of the Galaxy series.
                                In the MCU, Nebula is portrayed by actress Karen Gillan. She first appeared in the film "Guardians of the Galaxy" released in 2014 and has since appeared in "Guardians of the Galaxy Vol. 2," "Avengers: Infinity War," "Avengers: Endgame," and "Guardians of the Galaxy Vol. 3" (upcoming as of my knowledge cutoff in September 2021).</p>
                        </div>
                        <div>
                            <h1 className='text-3xl text-warning'>#3 Star Lord</h1>
                            <div className='divider w-32 my-0'></div>
                            <p className='mb-5'>Star-Lord is a fictional character from Marvel Comics and a prominent member of the Guardians of the Galaxy. In the Marvel Cinematic Universe (MCU), Star-Lord is portrayed by actor Chris Pratt.
                                Peter Quill, also known as Star-Lord, made his first appearance in the film "Guardians of the Galaxy" released in 2014. He has since appeared in "Guardians of the Galaxy Vol. 2," "Avengers: Infinity War," "Avengers: Endgame," and "Guardians of the Galaxy Vol. 3" (upcoming as of my knowledge cutoff in September 2021).</p>
                        </div>
                        <div>
                            <h1 className='text-3xl text-warning'>#4 Ben Grimm</h1>
                            <div className='divider w-32 my-0'></div>
                            <p className=''>In the comics, Ben Grimm was an astronaut who, along with Reed Richards (Mr. Fantastic), Sue Storm (Invisible Woman), and Johnny Storm (Human Torch), was exposed to cosmic rays during a space mission. The radiation transformed him into a creature with a rock-like appearance and superhuman strength. As The Thing, Ben possesses incredible durability, endurance, and resistance to injury.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;