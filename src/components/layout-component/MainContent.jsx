import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainContent;