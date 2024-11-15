import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FreetrialStatus = () => {
    const [selectedPlan, setSelectedPlan] = useState("all");

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

                                    <h3 className="plan-title">Intraday</h3>
                                    <span className="price-original">Cash + Option</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information " data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999<span className='tagmonth'>/m</span></span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay<span className='paynow'> ₹5999</span></button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">Intraday</h3>
                                    <span className="price-original">Cash + Option</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                    <div className="price">
                                        <span className="price-current">₹11999</span>

                                    </div>
                                    <ul className="features">
                                        <li style={{ fontSize: "1rem" }}><b>Validity</b>: 3 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹11999</span></button>
                                </div>
                                <div className="card card1 col-md-4">

                                    <h3 className="plan-title">Short Term</h3>
                                    <span className="price-original">Cash + Option</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information " data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999<span className='tagmonth'>/m</span></span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay<span className='paynow'> ₹5999</span></button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">Short Term</h3>
                                    <span className="price-original">Cash + Option</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                    <div className="price">
                                        <span className="price-current">₹11999</span>

                                    </div>
                                    <ul className="features">
                                        <li style={{ fontSize: "1rem" }}><b>Validity</b>: 3 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹11999</span></button>
                                </div>
                                <div className="card card1 col-md-4">

                                    <h3 className="plan-title">Long Term</h3>
                                    <span className="price-original">Cash + Option</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information " data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999<span className='tagmonth'>/m</span></span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay<span className='paynow'> ₹5999</span></button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">Long Term</h3>
                                    <span className="price-original">Cash + Option</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                                    <div className="price">
                                        <span className="price-current">₹11999</span>

                                    </div>
                                    <ul className="features">
                                        <li style={{ fontSize: "1rem" }}><b>Validity</b>: 3 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹11999</span></button>
                                </div>
                            </>
                        )}

                        {selectedPlan === "intraday" && (
                            <>
                                <div className="card card1 col-md-4">

                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹5999</span></button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">2 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹11999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹11999</span></button>
                                </div>
                            </>
                        )}

                        {selectedPlan === "short-term" && (
                            <>
                                <div className="card card1 col-md-4">

                                    <h3 className="plan-title">3 MONTHS PLAN</h3>

                                    <span className="price-original">Cash + Future + option </span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹11999/m</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹11999</span></button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>

                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>



                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹5999</span></button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>

                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>


                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹5999</span></button>
                                </div>
                            </>
                        )}

                        {selectedPlan === "long-term" && (
                            <>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>


                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹5999</span></button>
                                </div>
                                <div className="card card1 col-md-4">
                                    <h3 className="plan-title">1 MONTHS PLAN</h3>
                                    <span className="price-original">Cash + Future</span>
                                    <hr />
                                    <i className="fadeIn animated bx bx-info-circle information" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                    <div className="price">
                                        <span className="price-current">₹5999</span>

                                    </div>
                                    <ul className="features">
                                        <li><b>Validity</b>: 1 Month </li>


                                    </ul>
                                    <button className="subscribe-button">Pay <span className='paynow'> ₹5999</span></button>
                                </div>
                            </>
                        )}
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Discription</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt, maxime suscipit ratione facere ab maiores tenetur consequuntur corrupti quod a reprehenderit dignissimos dolorum incidunt natus quidem voluptatem distinctio impedit. Optio, illum natus. Aut et nisi harum autem dolorem animi.
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Discription</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla minus nemo aut reiciendis mollitia recusandae dignissimos quaerat incidunt est, sunt suscipit accusamus! Quod repudiandae cumque soluta. Illum nihil soluta ipsum deleniti, harum a laudantium deserunt quis quidem labore dignissimos voluptatibus.
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

export default FreetrialStatus;
