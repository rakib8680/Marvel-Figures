import React, { useState } from 'react';

const Tab = () => {

    const [activeTab, setActiveTab] = useState("avengers")

    const handleTabClick = category => {
        setActiveTab(category)
    }

    return (
        <div>
            <h1 className='text-center' >Shop by Category</h1>
            <div className='flex justify-center mt-10'>
                <div className="tabs">
                    <a className={`tab tab-lg tab-lifted ${activeTab == "guardians" ? "tab-active transition-all duration-500" : ""}`}
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
        </div>
    );
};

export default Tab;