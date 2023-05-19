import React from 'react';
import { useNavigation } from 'react-router-dom';
import { GridLoader } from 'react-spinners';


const Blog = () => {
    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        return <div className='flex justify-center h-[80vh] items-center bg-primary'><GridLoader color="#e3ed4c" size={60} /></div>
    }


    return (
        <div>
            <div className='background !h-auto md:py-20' >
                <div className=' backdrop-blur-md container mx-auto bg-white bg-opacity-10 w-[750px] px-10  py-20' >
                    <h1 className='text-5xl font-bold mb-5'>Latest Blogs</h1>
                    <div className='divider'></div>
                    <div className='mb-7'>
                        <h1 className='text-2xl mb-2 font-medium text-warning'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p>An access token is a secret token which is issued by an Authentication server.It is used to protect resources.The expiration time of access token is very short. Like from a few minutes to a few hours. On the other hand, Refresh token as a long expiration time, like a few days to few weeks. To store access and refresh token, we can use cookies, memory, local storage, session storage etc.</p>
                    </div>
                    <div className='mb-7'>
                        <h1 className='text-2xl mb-2 font-medium text-warning'>2. Compare SQL and NoSQL databases.</h1>
                        <p>SQL databases are based ona structured data model, where the data is organized into tables. No-SQL databases use different kind of data models, like-graph, key-value, document etc.The structure of data in SQL must be defined in advance. In the No-SQL database , it doesn't need to define.SQL databases supports ACID transactions. On the other hand, N0-SQL databases prioritize scalability and performance.</p>
                    </div>
                    <div className='mb-7'>
                        <h1 className='text-2xl mb-2 font-medium text-warning'>3. What is express js? What is Nest JS?</h1>
                        <p>Express js is a fast , flexible , easy and simple framework for node js. Express js handles HTTP methods like- GET, POST, PUT , DELETE etc. It follows a middleware pattern. <br /> Nest js is also a popular web application framework for node js. Nest js is built with TypeScript. Nest js provides module system that helps organize codes into reusable modules.Nest js also use middleWare like Express js.</p>
                    </div>
                    <div >
                        <h1 className='text-2xl mb-2 font-medium text-warning'>4. What is a custom hook, and why will you create a custom hook?</h1>
                        <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;