import React, { useEffect, useState } from 'react'
import { getDashboarddetail } from '../../../Services/Admin'
import { GetClient } from '../../../Services/Admin';
import { fDateTime } from '../../../Utils/Date_formate';
import Table from '../../../components/Table';
import { Link } from 'react-router-dom';


const Dashbord = () => {

    const token = localStorage.getItem('token');

    const [data, setData] = useState([])
    const [clients, setClients] = useState([]);


    const getdetail = async () => {
        try {
            const response = await getDashboarddetail(token);
            if (response.status) {

                setData(response.data)
            }
        } catch (error) {
            console.log("Error fetching services:", error);
        }
    };



    const getAdminclient = async () => {
        try {
            const response = await GetClient(token);
            if (response.status) {
                const topClients = response.data.slice(0, 5);
                setClients(topClients);
            }
        } catch (error) {
            console.log("error");
        }
    }

    useEffect(() => {
        getdetail()
        getAdminclient()
    }, [])



    const columns = [
        {
            name: 'S.No ',
            selector: (row, index) => index + 1,
            sortable: false,
            width: '100px',
        },
        {
            name: 'Full Name',
            selector: row => row.FullName,
            sortable: true,
            width: '180px',
        },
        {
            name: 'Email',
            selector: row => row.Email,
            sortable: true,
            width: '284px',

        },
        {
            name: 'Phone No',
            selector: row => row.PhoneNo,
            sortable: true,
            width: '200px',
        },


        // {
        //     name: 'Signup Status',
        //     selector: row => row.Status,
        //     sortable: true,
        //     width: '165px',
        // },
        // {
        // name: 'Date',
        // selector: row => row.Status,
        // sortable: true,
        // width: '165px',
        // },

        // {
        //     name: 'Active Status',
        //     selector: row => (
        //         <div className="form-check form-switch form-check-info">
        //             <input
        //                 id={`rating_${row.ActiveStatus}`}
        //                 className="form-check-input toggleswitch"
        //                 type="checkbox"
        //                 defaultChecked={row.ActiveStatus == 1}
        //                 onChange={(event) => handleSwitchChange(event, row._id)}
        //             />
        //             <label
        //                 htmlFor={`rating_${row.ActiveStatus}`}
        //                 className="checktoggle checkbox-bg"
        //             ></label>
        //         </div>
        //     ),
        //     sortable: true,
        //     width: '165px',
        // },
        {
            name: 'CreatedAt',
            selector: row => fDateTime(row.createdAt),
            sortable: true,

        },
        // {
        //     name: 'Actions',
        //     selector: (row) => (
        //         <>
        //             <Tooltip placement="top" overlay="Package Assign">
        //                 <span onClick={(e) => { showModal(true); setClientid(row); }} style={{ cursor: 'pointer' }}>
        //                     <Settings2 />
        //                 </span>
        //             </Tooltip>

        //             <Tooltip title="view">
        //                 <Eye

        //                     onClick={() => Clientdetail(row)} />
        //             </Tooltip>

        //             <div
        //                 className="modal fade"
        //                 id={`modal-${client.id}`}
        //                 tabIndex={-1}
        //                 aria-labelledby={`modalLabel-${client.id}`}
        //                 aria-hidden="true"
        //             >
        //                 <div className="modal-dialog">
        //                     <div className="modal-content">
        //                         <div className="modal-header">
        //                             <h5 className="modal-title" id={`modalLabel-${client.id}`}>
        //                                 View Client
        //                             </h5>
        //                             <button
        //                                 type="button"
        //                                 className="btn-close"
        //                                 data-bs-dismiss="modal"
        //                                 aria-label="Close"
        //                             />
        //                         </div>
        //                         <div className="modal-body">
        //                             <ul>
        //                                 <li className='viewlist'>
        //                                     <div className='row justify-content-between'>
        //                                         <div className="col">
        //                                             <b>Name</b>
        //                                         </div>
        //                                         <div className="col">
        //                                             Pankaj
        //                                         </div>

        //                                     </div>
        //                                 </li>
        //                                 <li className='viewlist'> <div className='row justify-content-between'>
        //                                     <div className="col">
        //                                         <b>Email</b>
        //                                     </div>
        //                                     <div className="col">
        //                                         pankaj@gmail.com
        //                                     </div>

        //                                 </div></li>
        //                                 <li className='viewlist'> <div className='row justify-content-between'>
        //                                     <div className="col">
        //                                         <b>Phone No.</b>
        //                                     </div>
        //                                     <div className="col">
        //                                         9876543210
        //                                     </div>

        //                                 </div></li>
        //                                 <li className='viewlist'> <div className='row justify-content-between'>
        //                                     <div className="col">
        //                                         <b>Signup Status</b>
        //                                     </div>
        //                                     <div className="col">
        //                                         App
        //                                     </div>

        //                                 </div></li>
        //                                 <li className='viewlist'> <div className='row justify-content-between'>
        //                                     <div className="col">
        //                                         <b>Created At</b>
        //                                     </div>
        //                                     <div className="col">
        //                                         25/09/2024
        //                                     </div>

        //                                 </div></li>
        //                                 <li className='viewlist'> <div className='row justify-content-between'>
        //                                     <div className="col">
        //                                         <b>Updated At</b>
        //                                     </div>
        //                                     <div className="col">
        //                                         26/09/2024
        //                                     </div>

        //                                 </div></li>
        //                             </ul>
        //                         </div>
        //                         {/* <div className="modal-footer">
        //                             <button
        //                                 type="button"
        //                                 className="btn btn-secondary"
        //                                 data-bs-dismiss="modal"
        //                             >
        //                                 Close
        //                             </button>
        //                         </div> */}
        //                     </div>
        //                 </div>
        //             </div>
        //             <Tooltip title="Update">
        //                 <UserPen onClick={() => updateClient(row)} />
        //             </Tooltip>
        //             <Tooltip title="delete">
        //                 <Trash2 onClick={() => DeleteClient(row._id)} />
        //             </Tooltip>
        //         </>
        //     ),
        //     ignoreRowClick: true,
        //     allowOverflow: true,
        //     button: true,
        //     width: '165px',
        // }
    ];



    return (
        <div>

            <div className="page-content">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-deepblue">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.clientCountTotal && data.clientCountTotal}</h5>
                                    <div className="ms-auto">
                                        <i className="bx bx-user fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Total Clients</p>

                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/client"><i className="bx bx-up-arrow-alt text-white" /> </Link>
                                        </span>

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-ohhappiness">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.clientCountActive && data.clientCountActive}</h5>
                                    <div className="ms-auto">
                                        <i className="fadeIn animated bx bx-user-circle fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Total Active Client</p>
                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/client"><i className="bx bx-up-arrow-alt text-white" /></Link>
                                            {/* <i className="bx bx-up-arrow-alt" /> */}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-ibiza">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.clientCountTotal - data.clientCountActive}</h5>
                                    <div className="ms-auto">
                                        <i className="fadeIn animated bx bx-user-x fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Total Deactive Client</p>
                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/client"><i className="bx bx-up-arrow-alt text-white" /></Link>
                                            {/* <i className="bx bx-up-arrow-alt" /> */}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-moonlit">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.userCountTotal && data.userCountTotal}</h5>
                                    <div className="ms-auto">
                                        <i className="bx bx-user-plus fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Total Staff</p>
                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/staff"><i className="bx bx-up-arrow-alt text-white" /></Link>
                                            {/* <i className="bx bx-up-arrow-alt" /> */}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-moonlit ">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.todayOpenSignal && data.todayOpenSignal}</h5>
                                    <div className="ms-auto">
                                        <i className="bx bx-wifi-2 fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Todays Open Signal</p>
                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/signal"><i className="bx bx-up-arrow-alt text-white" /></Link>
                                            {/* <i className="bx bx-up-arrow-alt" /> */}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-ibiza ">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.todayCloseSignal && data.todayCloseSignal}</h5>
                                    <div className="ms-auto">
                                        <i className="fadeIn animated bx bx-wifi-off fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Todays Close Signal</p>
                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/closesignal"><i className="bx bx-up-arrow-alt text-white" /></Link>
                                            {/* <i className="bx bx-up-arrow-alt" /> */}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-ohhappiness">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.OpensignalCountTotal && data.OpensignalCountTotal}</h5>
                                    <div className="ms-auto">
                                        <i className="bx bxl-redux fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Total Open Signal</p>
                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/signal"><i className="bx bx-up-arrow-alt text-white" /></Link>
                                            {/* <i className="bx bx-up-arrow-alt" /> */}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card radius-10 bg-gradient-deepblue">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <h5 className="mb-0 text-white">{data.CloseSignalCountTotal && data.CloseSignalCountTotal}</h5>
                                    <div className="ms-auto">
                                        <i className="bx bx-wifi-2 fs-3 text-white" />
                                    </div>
                                </div>
                                <div
                                    className="progress my-2 bg-opacity-25 bg-white"
                                    style={{ height: 4 }}
                                >
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "55%" }}
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <p className="mb-0">Total Close Signal </p>
                                    <p className="mb-0 ms-auto">

                                        <span>
                                            <Link to="/admin/closesignal"><i className="bx bx-up-arrow-alt text-white" /></Link>
                                            {/* <i className="bx bx-up-arrow-alt" /> */}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card radius-10">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div>
                                <h5 className="mb-0">Recent Clients</h5>
                            </div>

                        </div>
                        <hr />

<div className="table-responsive d-flex justify-content-center">
                        <Table
                       
                            columns={columns}
                            data={clients}
                        />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashbord
