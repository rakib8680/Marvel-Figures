import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Home from './Home';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;