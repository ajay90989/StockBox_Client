import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashbord from '../layout/Client/Dashboard/Dashboard';

import Sidebar from '../layout/Client/Sidebar'
import Header from '../layout/Client/Header';
import Footer from '../layout/Client/Footer';
import Profiles from '../layout/Client/Profile/Profiles';
import Service from '../layout/Client_service/Service';
import Trade from '../layout/Client/Client_trade/Trade';
import Coupon from '../layout/Client/Client_coupon/Coupon';
import Subscription from '../layout/Client/Client_subscription/Subscription';
import Faq from '../layout/Client/Client_faq/Faq';
import Privacy from '../layout/Client/Client_privacy/Privacy';
import Terms from '../layout/Client/Client_condition/Terms';
import Demat from '../layout/Client/Client_demat/Demat';





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
                    <Route path="/coupon" element={<Coupon />} />
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/demat" element={<Demat />} />


                </Routes>
            </div>
            <Footer />


        </div>

    );
}

export default Client;
