import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Comonents/NavBar';
import Footer from '../Comonents/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;