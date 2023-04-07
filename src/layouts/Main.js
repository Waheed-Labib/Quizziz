import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import GoToHome from '../components/GoToHome/GoToHome';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <GoToHome></GoToHome>
        </div>
    );
};

export default Main;