import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const Tab = () => {

    const [activeTab, setActiveTab] = useState("avengers")
    const [toys, setToys] = useState([])

    const handleTabClick = category => {
        setActiveTab(category)
    };

    useEffect(() => {
        fetch(`https://marvel-figures-server.vercel.app/targetToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])

    return (
        <div className='bg-gradient-to-b from-black via-red-950 to-black '>
            <h1 className='text-center text-3xl' >Shop by Category</h1>
            <div className='flex justify-center mt-10'>
                <div className="tabs">
                    <a className={`tab tab-lg tab-lifted ${activeTab == "guardians" ? "tab-active transition-all duration-500 " : ""}`}
                        onClick={() => handleTabClick("guardians")}
                    >
                        Guardians</a>
                    <a className={`tab tab-lg tab-lifted ${activeTab == "avengers" ? "tab-active transition-all duration-500" : ""}`}
                        onClick={() => handleTabClick("avengers")}
                    >
                        Avengers</a>
                    <a className={`tab tab-lg tab-lifted ${activeTab == "fantasticFour" ? "tab-active transition-all duration-500" : ""}`}
                        onClick={() => handleTabClick("fantasticFour")}
                    >
                        Fantastic 4</a>
                </div>
            </div>

            {/* toy cards  */}
            <div className='md:grid grid-cols-3 container mx-auto mt-12 '>
                {
                    toys.slice(0,3).map((toy => <ToyCard toy={toy} key={toy._id} ></ToyCard>))
                }
            </div>

        </div>
    );
};

export default Tab;