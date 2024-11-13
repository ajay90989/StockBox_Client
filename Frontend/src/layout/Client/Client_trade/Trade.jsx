import React from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

const Trade = () => {
    // Define your static data
    const data = [
        { id: 1, tradeName: 'Trade 1', type: 'Intraday', amount: '$1000', status: 'Completed' },
        { id: 2, tradeName: 'Trade 2', type: 'Swing', amount: '$1500', status: 'Pending' },
        { id: 3, tradeName: 'Trade 3', type: 'Long-term', amount: '$2000', status: 'Completed' },
    ]

    // Define the columns
    const columns = [
        { name: 'Trade Name', selector: row => row.tradeName, sortable: true },
        { name: 'Type', selector: row => row.type, sortable: true },
        { name: 'Amount', selector: row => row.amount, sortable: true },
        { name: 'Status', selector: row => row.status, sortable: true },
    ]

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
                        <ul className="nav nav-pills mb-3" role="tablist">
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

                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="primary-pills-home"
                                role="tabpanel"
                            >
                                <DataTable
                                    title="Trade Data"
                                    columns={columns}
                                    data={data}
                                    pagination
                                />
                            </div>
                            <div className="tab-pane fade" id="primary-pills-profile" role="tabpanel">
                                <DataTable
                                    title="Trade Data"
                                    columns={columns}
                                    data={data}
                                    pagination
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
