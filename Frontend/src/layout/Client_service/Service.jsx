import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FreetrialStatus = () => {
    const [selectedPlan, setSelectedPlan] = useState("");

    // Define the data for each plan, with details for 3 months, 6 months, and annual plans
    const plansData = {
        saab: {
            title: "Intraday",
            plans: [
                {
                    duration: "1 MONTHS PLAN",
                    priceOriginal: "Cash+Future",

                    features: [" ₹5000", "Basic",],
                },
                {
                    duration: "3 MONTHS PLAN",

                    priceOriginal: "Cash+Option",
                    features: [" ₹11999", "Intraday(cash+Option)"],
                },

            ]
        },
        shrt: {
            title: "Short Term",
            plans: [
                {
                    duration: "3 MONTHS PLAN",
                    priceCurrent: "US$25",
                    priceOriginal: "$70",
                    features: ["20 Downloads a day", "90 Days access", "Limited commercial licenses"],
                },
                {
                    duration: "6 MONTHS PLAN",
                    priceCurrent: "US$45",
                    priceOriginal: "$140",
                    features: ["20 Downloads a day", "180 Days access", "Limited commercial licenses"],
                },
                {
                    duration: "ANNUAL PLAN",
                    priceCurrent: "Basic",
                    priceOriginal: "$280",
                    features: ["Unlimited downloads", "365 Days access", "Limited commercial licenses"],
                }
            ]
        },
        lng: {
            title: "Long Term",
            plans: [
                {
                    duration: "1 MONTHS PLAN",
                    priceCurrent: "US$26",
                    priceOriginal: "$70",
                    features: ["20 Downloads a day", "90 Days access", "Limited commercial licenses"],
                },
                {
                    duration: "3 MONTHS PLAN",
                    priceCurrent: "US$27",
                    priceOriginal: "$140",
                    features: ["20 Downloads a day", "180 Days access", "Limited commercial licenses"],
                },

            ]
        },
        // Add data for other plans as needed
    };

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
                                <Link to="/admin/dashboard">
                                    <i className="bx bx-home-alt" />
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <hr />

            <div className="card">
                <div className="card-body">
                    <div>
                        <label htmlFor="" className='mb-1'>Plans For You</label>
                        <div className='col-lg-4 d-flex '>
                            <select className="form-select" value={selectedPlan} onChange={handleSelectChange}>
                                <option value="" disabled>Select Plans</option>
                                <option value="saab">Intraday</option>
                                <option value="shrt">Short Term</option>
                                <option value="lng">Long Term</option>
                                {/* Add other options as needed */}
                            </select>
                        </div>
                    </div>

                    {selectedPlan && (
                        <div className="pricing-container price1 row mt-4">
                            {plansData[selectedPlan].plans.map((plan, index) => (
                                <div className="card card1 col-md-4" key={index}>
                                    <h3 className="plan-title">{plan.duration}</h3>
                                    <div className="price">
                                        <span className="price-current">{plan.priceCurrent}</span>
                                        <span className="price-original">{plan.priceOriginal}</span>
                                    </div>
                                    <ul className="features">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <button className="subscribe-button">Subscribe now</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FreetrialStatus;
