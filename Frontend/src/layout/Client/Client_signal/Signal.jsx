import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signal = () => {
    const [selectedPlan, setSelectedPlan] = useState("all");

    const handleSelectChange = (event) => {
        setSelectedPlan(event.target.value);
    };
    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Signal</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link to="/client/dashboard">
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Signal</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />
                <div className="card">
                    <div className="card-body">
                        <div>
                            {/* <label htmlFor="planSelect" className="mb-1">
                                Plans For You
                            </label> */}
                            <div className='row mb-4'>

                                <div className="col-lg-4">
                                    <label htmlFor="planSelect" className="mb-1">
                                        Plans For You
                                    </label>
                                    <select id="planSelect" className="form-select" onChange={handleSelectChange} value={selectedPlan}>
                                        <option value="" disabled>Select Plans</option>
                                        <option value="all">All</option>
                                        <option value="cash">Cash</option>
                                        <option value="future">Future</option>
                                        <option value="option">Option</option>
                                    </select>
                                </div>

                                <div className="col-lg-4">
                                    <label htmlFor="planSelect" className="mb-1">
                                        Search
                                    </label>

                                    <div
                                        className="position-relative search-bar d-lg-block d-none"

                                    >
                                        <input className="form-control px-5" type="search" placeholder="Search by Stock Name" />
                                        <span className="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-5">
                                            <i className="bx bx-search" />
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div>

                            {selectedPlan === "all" && (
                                <div className="row">
                                    <div className="col-md-6">

                                        {/* Card 1 */}
                                        <div className="trade-card shadow">
                                            <div className="trade-header d-flex justify-content-between">
                                                <span className="trade-time">18 Nov, 17:08</span>
                                                <span className="trade-time">Future</span>
                                                <span className="trade-type">Short Term</span>
                                            </div>
                                            <div className="trade-content">
                                                <div className="d-flex justify-content-between">
                                                    <h3>THERMAX-EQ</h3>
                                                    <span className="trade-type1">open</span>
                                                </div>
                                                <p className="trade-price">₹100</p>
                                                <div className="trade-details">
                                                    <div className='row justify-content-center'>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Entry price:</strong> (₹100)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Stoploss:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className='col-md-4'>
                                                            <p>
                                                                <strong>Hold duration:</strong> (15-30 days)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button className="btn btn-view-detail">View Detail</button>
                                                    <button className="btn btn-view-detail">Broker Response</button>
                                                    <button className="btn btn-buy">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        {/* Card 1 */}
                                        <div className="trade-card shadow">
                                            <div className="trade-header d-flex justify-content-between">
                                                <span className="trade-time">18 Nov, 17:08</span>
                                                <span className="trade-time">Cash</span>
                                                <span className="trade-type">Short Term</span>
                                            </div>
                                            <div className="trade-content">
                                                <div className="d-flex justify-content-between">
                                                    <h3>THERMAX-EQ</h3>
                                                    <span className="trade-type1">open</span>
                                                </div>
                                                <p className="trade-price">₹100</p>
                                                <div className="trade-details">
                                                    <div className='row justify-content-center'>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Entry price:</strong> (₹100)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Stoploss:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className='col-md-4'>
                                                            <p>
                                                                <strong>Hold duration:</strong> (15-30 days)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button className="btn btn-view-detail">View Detail</button>
                                                    <button className="btn btn-buy">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {selectedPlan === "cash" && (
                                <div className="row">
                                    <div className="col-md-12">

                                        {/* Card 1 */}
                                        <div className="trade-card shadow">

                                            <div className="row">
                                                <div className="col-md-2 d-flex align-items-end">
                                                    <div className="trade-header ">
                                                        <div>
                                                            <span className="trade-time tradetime1"><b>18 Nov, 17:08</b></span>
                                                        </div>
                                                        <div className='mb-3'>
                                                            <span className="trade-type">Short Term</span>
                                                        </div>
                                                        <div >
                                                            <span className="trade-type1">Cash,Future,Option</span>
                                                        </div>



                                                    </div>
                                                </div>
                                                <dv className="col-md-7">
                                                    <div className="trade-content">
                                                        <div className="d-flex justify-content-between tradehead">
                                                            <h3>THERMAX-EQ</h3>
                                                            <span className="trade-type1 mb-2">open</span>
                                                        </div>
                                                        <p className="trade-price">₹100</p>
                                                        <div className="trade-details">
                                                            <div className='row justify-content-center'>
                                                                <div className="col-md-6">
                                                                    <div>
                                                                        <strong>Entry price:</strong>
                                                                        <p> (₹100)</p>
                                                                    </div>
                                                                </div>


                                                                <div className='col-md-6 d-flex justify-content-end'>
                                                                    <div>
                                                                        <strong>Hold duration:</strong>
                                                                        <p>(15-30 days)</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div>
                                                                        <strong>Stoploss:</strong>
                                                                        <p>--</p>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3 d-flex justify-content-center">
                                                                    <div>
                                                                        <strong>Target:</strong>
                                                                        <p>--</p>
                                                                    </div>

                                                                </div>


                                                                <div className="col-md-3 d-flex justify-content-center">


                                                                    <div>
                                                                        <strong>Target:</strong>
                                                                        <p>--</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3 d-flex justify-content-center">
                                                                    <div>
                                                                        <strong>Target:</strong>
                                                                        <p>--</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </dv>
                                                <div className="col-md-3 d-flex align-items-center">
                                                    <div className="mb-3">
                                                        <button className="btn btn-buy mb-2 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">BUY</button>
                                                        <button className="btn btn-view-detail mb-2 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal1">View Detail</button>
                                                        <button className="btn btn-view-detail mb-2 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal1">View Ananlysis</button>
                                                        <button className="btn btn-view-detail w-100" data-bs-toggle="modal" data-bs-target="#exampleModal1">Broker Response</button>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                </div>

                            )}
                            {selectedPlan === "future" && (
                                <div className="row">
                                    <div className="col-md-6">

                                        {/* Card 1 */}
                                        <div className="trade-card shadow">
                                            <div className="trade-header d-flex justify-content-between">
                                                <span className="trade-time">18 Nov, 17:08</span>

                                                <span className="trade-type">Short Term</span>
                                            </div>
                                            <div className="trade-content">
                                                <div className="d-flex justify-content-between">
                                                    <h3>THERMAX-EQ</h3>
                                                    <span className="trade-type1">Broker Response</span>
                                                </div>
                                                <p className="trade-price">₹100</p>
                                                <div className="trade-details">
                                                    <div className='row justify-content-center'>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Entry price:</strong> (₹100)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Stoploss:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className='col-md-4'>
                                                            <p>
                                                                <strong>Hold duration:</strong> (15-30 days)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button className="btn btn-view-detail">View Detail</button>
                                                    <button className="btn btn-buy">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        {/* Card 1 */}
                                        <div className="trade-card shadow">
                                            <div className="trade-header d-flex justify-content-between">
                                                <span className="trade-time">18 Nov, 17:08</span>
                                                {/* <span className="trade-time">Cash</span> */}
                                                <span className="trade-type">Short Term</span>
                                            </div>
                                            <div className="trade-content">
                                                <div className="d-flex justify-content-between">
                                                    <h3>THERMAX-EQ</h3>
                                                    <span className="trade-type1">Broker Response</span>
                                                </div>
                                                <p className="trade-price">₹100</p>
                                                <div className="trade-details">
                                                    <div className='row justify-content-center'>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Entry price:</strong> (₹100)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Stoploss:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className='col-md-4'>
                                                            <p>
                                                                <strong>Hold duration:</strong> (15-30 days)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button className="btn btn-view-detail">View Detail</button>
                                                    <button className="btn btn-buy">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {selectedPlan === "option" && (
                                <div className="row">
                                    <div className="col-md-6">

                                        {/* Card 1 */}
                                        <div className="trade-card shadow">
                                            <div className="trade-header d-flex justify-content-between">
                                                <span className="trade-time">18 Nov, 17:08</span>

                                                <span className="trade-type">Short Term</span>
                                            </div>
                                            <div className="trade-content">
                                                <div className="d-flex justify-content-between">
                                                    <h3>THERMAX-EQ</h3>
                                                    <span className="trade-type1">Broker Response</span>
                                                </div>
                                                <p className="trade-price">₹100</p>
                                                <div className="trade-details">
                                                    <div className='row justify-content-center'>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Entry price:</strong> (₹100)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Stoploss:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className='col-md-4'>
                                                            <p>
                                                                <strong>Hold duration:</strong> (15-30 days)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button className="btn btn-view-detail">View Detail</button>
                                                    <button className="btn btn-buy">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">

                                        {/* Card 1 */}
                                        <div className="trade-card shadow">
                                            <div className="trade-header d-flex justify-content-between">
                                                <span className="trade-time">18 Nov, 17:08</span>
                                                <span className="trade-time">Cash</span>
                                                <span className="trade-type">Short Term</span>
                                            </div>
                                            <div className="trade-content">
                                                <div className="d-flex justify-content-between">
                                                    <h3>THERMAX-EQ</h3>
                                                    <span className="trade-type1">Broker Response</span>
                                                </div>
                                                <p className="trade-price">₹100</p>
                                                <div className="trade-details">
                                                    <div className='row justify-content-center'>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Entry price:</strong> (₹100)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Stoploss:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className='col-md-4'>
                                                            <p>
                                                                <strong>Hold duration:</strong> (15-30 days)
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>


                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                        <div className="col-md-4">


                                                            <p>
                                                                <strong>Target:</strong> --
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <button className="btn btn-view-detail">View Detail</button>
                                                    <button className="btn btn-buy">BUY</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>

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
                {/* Data Table */}

            </div>
        </div>
    );
}

export default Signal;
