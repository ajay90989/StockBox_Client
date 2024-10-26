import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Client from './Client.routes';
import Forgetpassword from '../Auth/Forgetpassword';



const Routing = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const roles = localStorage.getItem('Role');
    const FullName = localStorage.getItem("FullName");
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");


    useEffect(() => {

        if (location.pathname === "/forget") {
            navigate("/forget");
            return;
        }

        if (location.pathname === "/register") {
            navigate("/register");
            return;
        }


        if (!roles || token === "null" || roles === "null" || location.pathname === "/login"  || location.pathname === "/") {
            navigate("/login");
            return;
        }



        switch (roles) {
        //     case "1":
        //         if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/admin")) {
        //             navigate("/admin/dashboard");
        //         }
        //         break;
        //     case "2":
        //         if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/staff")) {
        //             navigate("/staff/dashboard");
        //         }
        //         break;
            // case "3":
            //     if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/client")) {
            //         navigate("/client/dashboard");
            //     }
            //     break;
        //     default:
        //         break;
        }

    }, [navigate, location.pathname, roles, id, FullName, token]);



    return (
        <Routes>

           
            <Route path="/client/*" element={<Client /> } />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/forget" element={<Forgetpassword/>} />

        </Routes>
    );
}

export default Routing;
