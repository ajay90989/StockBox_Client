import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("Cash");
    const chartOptions = {
        chart: {
            id: 'performance-chart',
            type: 'line',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        stroke: {
            curve: 'smooth',
        },
        markers: {
            size: 5,
        },
        colors: ['#008FFB'],
    };

    const chartSeries = [
        {
            name: 'Performance',
            data: activeTab === "Cash" ? [10, 41, 35, 51, 49, 62, 69, 91, 148]
                : activeTab === "Future" ? [30, 70, 35, 80, 59, 95, 70, 115, 200]
                    : [15, 40, 20, 30, 45, 60, 65, 80, 100], // Sample data for each tab
        },
    ];
    return (
        <div>
            <div className="page-content">
                <h6 className="mb-0 text-uppercase">Plans</h6>
                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <p className="mb-0 text-secondary">Cash+Future+option</p>
                                        <h4 className="my-1">2 Months</h4>
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
                    <div className="col-md-3">
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
                    <div className="col-md-3">
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
                    <div className="col-md-3">
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
                </div>
                {/*end row*/}
                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-8 d-flex">
                        <div className="card radius-10 w-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Past Performance</h5>
                                    <div className="options ms-auto">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === "Cash" ? "active" : ""}`}
                                                    onClick={() => setActiveTab("Cash")}
                                                >
                                                    Cash
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === "Future" ? "active" : ""}`}
                                                    onClick={() => setActiveTab("Future")}
                                                >
                                                    Future
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === "Option" ? "active" : ""}`}
                                                    onClick={() => setActiveTab("Option")}
                                                >
                                                    Option
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="hstack flex-wrap align-items-center justify-content-between gap-3 gap-sm-4 mb-3 border p-3 radius-10">
                                    {activeTab === "Cash" && (
                                        <div>
                                            <div>
                                                <h5 className="mb-0">
                                                    974{" "}
                                                    <span className="text-success font-13">
                                                        56% <i className="bx bx-up-arrow-alt" />
                                                    </span>
                                                </h5>
                                                <p className="mb-0">Avg.return/Month</p>
                                            </div>
                                        </div>


                                    )}
                                    {activeTab === "Future" && (
                                        <div>
                                            <h5 className="mb-0">
                                                1,218{" "}
                                                {/* <span className="text-danger font-13">
                                                    34% <i className="bx bx-down-arrow-alt" />
                                                </span> */}
                                            </h5>
                                            <p className="mb-0">Total Sales</p>
                                        </div>
                                    )}
                                    {activeTab === "Option" && (
                                        <div>
                                            <h5 className="mb-0">
                                                42.8%{" "}
                                                <span className="text-success font-13">
                                                    22% <i className="bx bx-up-arrow-alt" />
                                                </span>
                                            </h5>
                                            <p className="mb-0">Conversion Rate</p>
                                        </div>
                                    )}
                                </div>

                                {/* ApexChart */}
                                <div className="chart-js-container1">
                                    <Chart
                                        options={chartOptions}
                                        series={chartSeries}
                                        type="line"
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-4 d-flex">
                        <div className="card radius-10 overflow-hidden w-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="mb-0">Top Categories</h5>
                                    <div className="dropdown options ms-auto">
                                        <div
                                            className="dropdown-toggle dropdown-toggle-nocaret"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i className="bx bx-dots-horizontal-rounded" />
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="javascript:;">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="javascript:;">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="javascript:;">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="chart-js-container2 mt-4">
                                    <div className="piechart-legend">
                                        <h2 className="mb-1">8,452</h2>
                                        <h6 className="mb-0">Total Sessions</h6>
                                    </div>
                                    <canvas
                                        id="chart2"
                                        width={317}
                                        height={224}
                                        style={{
                                            display: "block",
                                            boxSizing: "border-box",
                                            height: 250,
                                            width: 352
                                        }}
                                    />
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-top">
                                    Clothing
                                    <span className="badge bg-primary rounded-pill">558</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Electronics
                                    <span className="badge bg-success rounded-pill">204</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Furniture
                                    <span className="badge bg-danger rounded-pill">108</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*end row*/}

            </div>


        </div>
    );
}

export default Dashboard;
