import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FreetrialStatus = () => {
    const [selectedPlan, setSelectedPlan] = useState("");

    const handleSelectChange = (event) => {
        setSelectedPlan(event.target.value);
    };

    return (
        <div className="page-content">
            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div className="breadcrumb-title pe-3">Services</div>
                <div className="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0 p-0">
                            <li className="breadcrumb-item">
                                <a href="/admin/dashboard">
                                    <i className="bx bx-home-alt" />
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <hr />
            <div className="card">
                <div className="card-body">
                    <div>
                        <label htmlFor="planSelect" className="mb-1">
                            Plans For You
                        </label>
                        <div className="col-lg-4 d-flex">
                            <select id="planSelect" className="form-select" onChange={handleSelectChange} value={selectedPlan}>
                                <option value="" disabled>Select Plans</option>
                                <option value="all">All</option>
                                <option value="intraday">Intraday</option>
                                <option value="short-term">Short Term</option>
                                <option value="long-term">Long Term</option>
                            </select>
                        </div>
                    </div>
                    <div className="pricing-container price1 row mt-4">
                        {/* Conditionally render cards based on the selected plan */}
                        {selectedPlan === "all" && (
                            <>
                                <div className="card card1 col-md-4">

                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">2 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                            </>
                        )}

                        {selectedPlan === "intraday" && (
                            <>
                                <div className="card card1 col-md-4">

                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">2 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                            </>
                        )}

                        {selectedPlan === "short-term" && (
                            <>
                                <div className="card card1 col-md-4">

                                    <h3 className="plan-title">3 MONTHS PLAN</h3>
                                    <i className="fadeIn animated bx bx-info-circle" />
                                    <span className="price-original">Cash + Future + option </span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <i className="fadeIn animated bx bx-info-circle" />
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <i className="fadeIn animated bx bx-info-circle" />
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                            </>
                        )}

                        {selectedPlan === "long-term" && (
                            <>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>
                                        <li>20 Downloads a day</li>


                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreetrialStatus;
