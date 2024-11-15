import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

const Trade = () => {
    const [selectedPlan, setSelectedPlan] = useState("cash");

    const handleSelectChange = (event) => {
        setSelectedPlan(event.target.value);
    };
    // Define your static data
    const data = [
        { id: 1, sno: '1', segment: 'Cash ', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 2, sno: '2', segment: 'Future', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 3, sno: '3', segment: 'Option', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 4, sno: '4', segment: 'Cash', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 5, sno: '5', segment: 'Future', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 6, sno: '6', segment: 'Option', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 7, sno: '7', segment: 'Cash', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 8, sno: '8', segment: 'Future', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 9, sno: '9', segment: 'Option', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 10, sno: '10', segment: 'Cash', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 11, sno: '11', segment: 'Future', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
        { id: 12, sno: '12', segment: 'Option', type: 'Short Term', symbol: 'TATAMotors-EQ', price: '₹778', date: '14Nov2024', time: '15:19', target: '-', stoploss: '₹770', hold: '(15-30days)' },
    ]


    const columns1 = [
        { name: 'S.NO.', selector: row => row.sno, sortable: true },
        { name: 'Segment', selector: row => row.segment, sortable: true, width: '180px' },
        { name: 'Type', selector: row => row.type, sortable: true, width: '180px' },
        { name: 'Trading Symbol', selector: row => row.symbol, sortable: true, width: '180px' },
        { name: 'Entry Price', selector: row => row.price, sortable: true, width: '180px' },
        { name: 'Entry Date', selector: row => row.date, sortable: true, width: '180px' },
        { name: 'Entry Time', selector: row => row.time, sortable: true, width: '180px' },
        { name: 'Target', selector: row => row.target, sortable: true, width: '180px' },
        { name: 'Stoploss', selector: row => row.stoploss, sortable: true, width: '180px' },
        { name: 'Hold Duration', selector: row => row.hold, sortable: true, width: '180px' },
        { name: 'Action', selector: row => row.status, sortable: true, width: '180px' },
    ]



    const customStyles = {
        header: {
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#4A4A4A',
                borderRadius: "20px",
            },
        },
        rows: {
            style: {
                minHeight: '72px',
                '&:hover': {
                    backgroundColor: '#e0e0e0',
                },
            },
        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#0092e4 !important',
                color: '#fff',

            },
        },
        cells: {
            style: {
                fontSize: '15px',
                color: '#4A4A4A',
            },
        },
    };


    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data); // Assume `data` is your original dataset

    // Function to handle search input changes
    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Filter the data based on the search query
        if (query) {
            const filteredResults = data.filter(item =>
                item.segment.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filteredResults);
        } else {
            // If the query is empty, reset to the original data
            setFilteredData(data);
        }
    };
    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Trades</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link to="/admin/dashboard">
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Trades</li>
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
                            <div className="col-lg-12 d-flex">
                                <div
                                    className="position-relative search-bar d-lg-block d-none"

                                >
                                    <input className="form-control px-5" type="search" placeholder="Search" value={searchQuery}
                                        onChange={handleSearch} />
                                    <span className="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-5">
                                        <i className="bx bx-search" />
                                    </span>
                                </div>

                            </div>
                        </div>
                        <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link active"
                                    data-bs-toggle="pill"
                                    href="#primary-pills-home"
                                    role="tab"
                                    aria-selected="true"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon">
                                            <i className="bx bx-home font-18 me-1" />
                                        </div>
                                        <div className="tab-title">Live Trade </div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="pill"
                                    href="#primary-pills-profile"
                                    role="tab"
                                    aria-selected="false"
                                    tabIndex={-1}
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="tab-icon">
                                            <i className="bx bx-user-pin font-18 me-1" />
                                        </div>
                                        <div className="tab-title">Close Trade</div>
                                    </div>
                                </a>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                     
                                            <div className="d-flex align-items-center">
                                                <div className="tab-icon">
                                                    <i className="bx bx-user-pin font-18 me-1" />
                                                </div>
                                                <div className="tab-title"></div>
                                            </div>
                                      
                                    </li> */}

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="primary-pills-home"
                                role="tabpanel"
                            >
                                <DataTable

                                    columns={columns1}
                                    // data={data}
                                    data={filteredData}
                                    pagination
                                    customStyles={customStyles}
                                    fixedHeader
                                    fixedHeaderScrollHeight="400px"
                                    className="custom-data-table"

                                />

                            </div>
                            <div className="tab-pane fade" id="primary-pills-profile" role="tabpanel">
                                <DataTable

                                    columns={columns1}
                                    // data={data}
                                    data={filteredData}
                                    pagination
                                    customStyles={customStyles}
                                    fixedHeader
                                    fixedHeaderScrollHeight="400px"
                                    className="custom-data-table"
                                />

                            </div>

                        </div>

                    </div>
                </div>


                {/* Data Table */}

            </div>
        </div>
    )
}

export default Trade
