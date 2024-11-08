import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
// import Table from '../../../components/Table';
// import { fDate } from '../../../Utils/Date_formate';



const FreetrialStatus = () => {
    const token = localStorage.getItem('token');

    const [ForGetCSV, setForGetCSV] = useState([])

    const [data, setData] = useState([]);
    const [addStatus, setAddStatus] = useState({
        id: "",
        freetrial: ""
    });

    const handleSelectChange = (event) => {
        setAddStatus({ ...addStatus, freetrial: event.target.value });
    };





    const columns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
            sortable: false,

        },
        {
            name: 'Privious Status',
            selector: row => `${row.olddays}Day`,
            sortable: true,
            width: "200px",
        },
        {
            name: 'Updated Status',
            selector: row => `${row.newdays}Day`,
            sortable: true,
            width: "200px",
        },


    ];




    return (
        <div>

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

                                <select className="form-select" value={addStatus.freetrial} onChange={handleSelectChange}>
                                    <option value="" disabled>
                                        Select Plans
                                    </option>
                                    <option value="saab">Intraday</option>
                                    <option value="shrt">Short Term</option>
                                    <option value="lng">Long Term</option>
                                    <option value="combo">Combo</option>
                                    <option value="gold">Gold</option>
                                    <option value="hni">HNI</option>
                                    <option value="nifty">NIFTY+Future</option>
                                    <option value="equity">EQUITY Hero</option>
                                    <option value="priya">Priya</option>
                                </select>

                                {/* <button className='btn btn-primary ms-2' >
                                    Update
                                </button> */}

                            </div>


                        </div>


                        <div className="row mt-5">
                            <div className="col-4 d-flex justify-content-center">
                                <div className="card radius-10 w-100" style={{ border: "2px solid #595F5D", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                    <div className="card-header cradhead" style={{ borderBottom: "1px solid #595F5D", padding: "1rem" }}>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h5 className="mb-0 text-white" style={{ fontWeight: "bold" }}>1 Month</h5>
                                                <p className="text-white" style={{ margin: "0" }}>Cash+Option</p>
                                            </div>
                                            <div className="d-flex align-items-center ms-auto">
                                                <Link to="">
                                                    <i className='fadeIn animated bx bx-info-circle' style={{ fontSize: "28px", color: "#fff" }}></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list p-4 text-center" style={{ backgroundColor: "#f8f9fa" }}>
                                        <h4 className="mb-1">Basic</h4>
                                        <h5 className="mb-0" style={{ fontWeight: "bold" }}>₹5000</h5>
                                    </div>
                                    <div className="card-footer" style={{ padding: "1rem" }}>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary" style={{ width: "150px", borderRadius: "25px", fontWeight: "bold" }}>
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <div className="card radius-10 w-100" style={{ border: "2px solid #595F5D", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                    <div className="card-header cradhead" style={{ borderBottom: "1px solid #595F5D", padding: "1rem" }}>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h5 className="mb-0 text-white" style={{ fontWeight: "bold" }}>1 Month</h5>
                                                <p className="text-white" style={{ margin: "0" }}>Cash+Option</p>
                                            </div>
                                            <div className="d-flex align-items-center ms-auto">
                                                <Link to="">
                                                    <i className='fadeIn animated bx bx-info-circle' style={{ fontSize: "28px", color: "#fff" }}></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list p-4 text-center" style={{ backgroundColor: "#f8f9fa" }}>
                                        <h4 className="mb-1">Basic</h4>
                                        <h5 className="mb-0" style={{ fontWeight: "bold" }}>₹5000</h5>
                                    </div>
                                    <div className="card-footer" style={{ padding: "1rem" }}>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary" style={{ width: "150px", borderRadius: "25px", fontWeight: "bold" }}>
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <div className="card radius-10 w-100" style={{ border: "2px solid #595F5D", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
                                    <div className="card-header cradhead" style={{ borderBottom: "1px solid #595F5D", padding: "1rem" }}>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h5 className="mb-0 text-white" style={{ fontWeight: "bold" }}>1 Month</h5>
                                                <p className="text-white" style={{ margin: "0" }}>Cash+Option</p>
                                            </div>
                                            <div className="d-flex align-items-center ms-auto">
                                                <Link to="">
                                                    <i className='fadeIn animated bx bx-info-circle' style={{ fontSize: "28px", color: "#fff" }}></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-list p-4 text-center" style={{ backgroundColor: "#f8f9fa" }}>
                                        <h4 className="mb-1">Basic</h4>
                                        <h5 className="mb-0" style={{ fontWeight: "bold" }}>₹5000</h5>
                                    </div>
                                    <div className="card-footer" style={{ padding: "1rem" }}>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary" style={{ width: "150px", borderRadius: "25px", fontWeight: "bold" }}>
                                                Subscribe
                                            </button>
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





export default FreetrialStatus;
