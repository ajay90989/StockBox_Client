import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashbord from '../layout/Client/Dashboard/Dashboard';

import Sidebar from '../layout/Client/Sidebar'
import Header from '../layout/Client/Header';
import Footer from '../layout/Client/Footer';
import Profiles from '../layout/Client/Profile/Profiles';
import Service from '../layout/Client_service/Service';
import Trade from '../layout/Client/Client_trade/Trade';





function Client() {



    const [isToggled, setIsToggled] = useState(false);
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);

    useEffect(() => {

        if (!isToggled) {
            setIsSidebarHovered(false);
        }
    }, [isToggled]);

    const handleMouseEnter = () => {
        if (isToggled) {
            setIsSidebarHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (isToggled) {
            setIsSidebarHovered(false);
        }
    };

    const handleToggleClick = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (

        <div
            className={`wrapper ${isToggled ? 'toggled' : ''} ${isSidebarHovered ? 'sidebar-hovered' : ''}`}
        >
            <div
                className="sidebar-wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Sidebar onToggleClick={handleToggleClick} />
            </div>
            <Header />
            <div className="page-wrapper">
                <Routes>
                    <Route path="/dashboard" element={<Dashbord />} />
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/trade" element={<Trade />} />
                
            
                </Routes>
            </div>
            <Footer />


        </div>

    );
}

export default Client;
