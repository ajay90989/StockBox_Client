import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [performanceFilter, setPerformanceFilter] = useState('Cash');
    const [topCategoriesFilter, setTopCategoriesFilter] = useState('Cash');

    // Data for Performance (Bar Chart)
    const performanceData = {
        Cash: [12, 19, 3, 5, 2, 3],
        Future: [15, 9, 8, 12, 5, 7],
        Option: [5, 3, 10, 2, 20, 4],
    };

    // Data for Top Categories (Pie Chart)
    const topCategoriesData = {
        Cash: [300, 500, 100, 200],
        Future: [400, 300, 500, 150],
        Option: [200, 400, 300, 250],
    };

    // Colors for Performance Data (Bar Chart)
    const colors = {
        Cash: 'rgba(75, 192, 192, 0.6)',    // Teal for Cash
        Future: 'rgba(255, 159, 64, 0.6)',  // Orange for Future
        Option: 'rgba(153, 102, 255, 0.6)', // Purple for Option
    };

    // Bar Chart Data
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: performanceFilter,
                data: performanceData[performanceFilter],
                backgroundColor: colors[performanceFilter],
            },
        ],
    };

    // Pie Chart Data (Based on Performance Filter)
    const pieData = {
        labels: ['Hits', 'Miss'],
        datasets: [
            {
                label: topCategoriesFilter,
                data: topCategoriesData[performanceFilter], // Using the same filter for Pie chart
                backgroundColor: [

                    '#0DBE34',
                    '#FF6384',

                ],
            },
        ],
    };

    return (
        <div>
            <div className="page-content">
                <div className="pricing-table">
                    <div className='d-flex justify-content-between'>
                        <h6 className="mb-0 text-uppercase">Subscribed Plans</h6>
                        <Link to="">View All</Link>
                    </div>
                    <hr />
                    <div className="row">
                        {/* Free Tier */}
                        <div className="col-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-header bg-danger py-3">
                                    <h5 className="card-title text-white text-uppercase text-center">
                                        Cash + Option
                                    </h5>
                                    <h6 className="card-price text-white text-center">
                                        ₹5999<span className="term">3months</span>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">

                                            <b> start Date:</b> 7/03/2024
                                        </li>

                                        <li className="list-group-item">

                                            <b>End Date:</b> 7/04/2024
                                        </li>


                                    </ul>
                                    <div className="d-grid">
                                        {" "}
                                        <a className="btn btn-danger my-2 radius-30">
                                            Subscribed
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Plus Tier */}
                        <div className="col-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-header bg-primary py-3">
                                    <h5 className="card-title text-white text-uppercase text-center">
                                        Cash + Option
                                    </h5>
                                    <h6 className="card-price text-white text-center">
                                        ₹ 1199<span className="term"> 3months</span>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">

                                            <b> start Date:</b> 7/03/2024
                                        </li>

                                        <li className="list-group-item">

                                            <b>End Date:</b> 7/04/2024
                                        </li>


                                    </ul>
                                    <div className="d-grid">
                                        {" "}
                                        <a className="btn btn-primary my-2 radius-30">
                                            Subscribed
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Pro Tier */}
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header bg-warning py-3">
                                    <h5 className="card-title text-dark text-uppercase text-center">
                                        Cash + Future
                                    </h5>
                                    <h6 className="card-price text-center">
                                        ₹15999<span className="term">3months</span>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">

                                            <b> start Date:</b> 7/03/2024
                                        </li>

                                        <li className="list-group-item">

                                            <b>End Date:</b> 7/04/2024
                                        </li>


                                    </ul>
                                    <div className="d-grid">
                                        {" "}
                                        <a className="btn btn-warning my-2 radius-30">
                                            Subscribed
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end row*/}


                </div>

                {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Revenue</p>
                                        <h4 className="my-1">$4805</h4>
                                        <p className="mb-0 font-13 text-success">
                                            <i className="bx bxs-up-arrow align-middle" />
                                            $34 from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons rounded-circle text-white ms-auto bg-gradient-burning">
                                        <i className="bx bxs-wallet" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Total Customers</p>
                                        <h4 className="my-1">8.4K</h4>
                                        <p className="mb-0 font-13 text-danger">
                                            <i className="bx bxs-down-arrow align-middle" />
                                            $24 from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons rounded-circle text-white ms-auto bg-gradient-voilet">
                                        <i className="bx bxs-group" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Store Visitors</p>
                                        <h4 className="my-1">59K</h4>
                                        <p className="mb-0 font-13 text-success">
                                            <i className="bx bxs-up-arrow align-middle" />
                                            $34 from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons rounded-circle text-white ms-auto bg-gradient-branding">
                                        <i className="bx bxs-binoculars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Bounce Rate</p>
                                        <h4 className="my-1">34.46%</h4>
                                        <p className="mb-0 font-13 text-danger">
                                            <i className="bx bxs-down-arrow align-middle" />
                                            12.2% from last week
                                        </p>
                                    </div>
                                    <div className="widgets-icons rounded-circle text-white ms-auto bg-gradient-kyoto">
                                        <i className="bx bx-line-chart-down" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-8 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Performance</h5>
                                    <div className="dropdown options ms-auto">
                                        <div
                                            className="dropdown-toggle dropdown-toggle-nocaret"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="bx bx-dots-horizontal-rounded" />
                                        </div>
                                        <ul className="dropdown-menu">
                                            {['Cash', 'Future', 'Option'].map((filter) => (
                                                <li key={filter}>
                                                    <button
                                                        className={`dropdown-item ${performanceFilter === filter ? 'active-filter' : ''
                                                            }`}
                                                        onClick={() => {
                                                            setPerformanceFilter(filter);  // Update Performance filter
                                                            setTopCategoriesFilter(filter); // Also update Pie chart filter
                                                        }}
                                                        style={{
                                                            cursor: 'pointer',
                                                            border: 'none',
                                                            background: performanceFilter === filter ? '#e0e0e0' : 'none',
                                                        }}
                                                    >
                                                        {filter}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <Bar data={barData} height={300} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Ideal hit Accuracy</h5>
                                    <div className="dropdown options ms-auto">
                                        <div
                                            className="dropdown-toggle dropdown-toggle-nocaret"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="bx bx-dots-horizontal-rounded" />
                                        </div>
                                        <ul className="dropdown-menu">
                                            {['Cash', 'Future', 'Option'].map((filter) => (
                                                <li key={filter}>
                                                    <button
                                                        className={`dropdown-item ${topCategoriesFilter === filter ? 'active-filter' : ''
                                                            }`}
                                                        onClick={() => setTopCategoriesFilter(filter)}
                                                        style={{
                                                            cursor: 'pointer',
                                                            border: 'none',
                                                            background: topCategoriesFilter === filter ? '#e0e0e0' : 'none',
                                                        }}
                                                    >
                                                        {filter}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <Pie data={pieData} height={250} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
