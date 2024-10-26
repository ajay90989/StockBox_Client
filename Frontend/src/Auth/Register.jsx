import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    
    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = (e) => {
        e.preventDefault(); 
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div>
            <div className="bg-login">
                <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                    <div className="container-fluid ">
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                            <div className="col mx-auto">
                                <div className="card mb-0">
                                    <div className="card-body p-sm-5">
                                        <div className="">
                                            <div className="mb-3 text-center">
                                                <img src="assets/images/logo-icon.png" width={60} alt="" />
                                            </div>
                                            <div className="text-center mb-4">
                                                <h5 className="">Stock Box</h5>
                                            </div>
                                            <div className="form-body">
                                                <form className="row g-3">
                                                    <div className="col-12">
                                                        <label htmlFor="inputUsername" className="form-label">
                                                            Username
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="inputUsername"
                                                            placeholder="John"
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="inputEmailAddress" className="form-label">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="inputEmailAddress"
                                                            placeholder="example@user.com"
                                                        />
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="inputChoosePassword" className="form-label">
                                                            Password
                                                        </label>
                                                        <div className="input-group" id="show_hide_password">
                                                            <input
                                                                type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                                                                className="form-control border-end-0"
                                                                id="inputChoosePassword"
                                                                placeholder="Enter Password"
                                                            />
                                                            <a
                                                                href="#"
                                                                onClick={togglePasswordVisibility} // Handle click event
                                                                className="input-group-text bg-transparent"
                                                            >
                                                                <i className={`bx ${showPassword ? 'bx-show' : 'bx-hide'}`} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <label htmlFor="inputConfirmPassword" className="form-label">
                                                            Confirm Password
                                                        </label>
                                                        <div className="input-group" id="show_hide_confirm_password">
                                                            <input
                                                                type={showConfirmPassword ? 'text' : 'password'}
                                                                className="form-control border-end-0"
                                                                id="inputConfirmPassword"
                                                                placeholder="Enter Password"
                                                            />
                                                            <a
                                                                href="#"
                                                                onClick={toggleConfirmPasswordVisibility} 
                                                                className="input-group-text bg-transparent"
                                                            >
                                                                <i className={`bx ${showConfirmPassword ? 'bx-show' : 'bx-hide'}`} />
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="d-grid">
                                                            <button type="submit" className="btn btn-primary">
                                                                Sign up
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="text-center ">
                                                            <p className="mb-0">
                                                                Already have an account? <Link to="/login">Sign in here</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
