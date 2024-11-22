import React from 'react';

const Refer = () => {
    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Referral & Rewards</div>
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
                <div className="row align-items-center ">
                    <div className="col-md-6">
                        <div>
                            <h3 style={{ color:"#0092E4"}}>Refer and Earn ₹500</h3>

                            <p style={{ fontWeight: "700" }}>
                                Invite your friends and family to join the Shop from India Ship Global community. Earn INR 500 in your Shoppre wallet for every successful referral!
                                Share the happiness and Shoppre will deliver it internationally!
                            </p>
                        </div>
                        <hr />
                        <div>
                            <ul className="nav nav-pills mb-3" role="tablist" style={{ borderRadius: "30px", border: "1px solid #000" }}>
                                <li className="nav-item mt-2 ms-2" role="presentation">
                                    <a
                                        className="nav-link"
                                        data-bs-toggle="pill"
                                        href="#primary-pills-home"
                                        role="tab"
                                        aria-selected="false"
                                        tabIndex={-1}
                                    >
                                        <div className="d-flex align-items-center">

                                            <div className="tab-title">Share Your Referal Link</div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item mt-2" role="presentation">
                                    <a
                                        className="nav-link active"
                                        data-bs-toggle="pill"
                                        href="#primary-pills-profile"
                                        role="tab"
                                        aria-selected="true"
                                    >
                                        <div className="d-flex align-items-center">

                                            <div className="tab-title">Rewards</div>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade" id="primary-pills-home" role="tabpanel">
                                            <p>
                                                Refer code to your friend and earn upyo 5% on their first installation, they also recieves 9%
                                            </p>
                                            <div className='d-flex align-items-center'>
                                                <input type="text" class="form-control w-50" value="U8C2OGDS88" />
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-copy text-secondary ms-2"
                                                >
                                                    <rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                                </svg>



                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade active show"
                                            id="primary-pills-profile"
                                            role="tabpanel"
                                        >
                                            <table className="table mb-0">
                                                <thead className="table-primary">
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Earning Amt.</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Hask</th>
                                                        <td>20</td>
                                                        <td>True</td>
                                                        <td>20/10/2024</td>
                                                    </tr>

                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src="https://www.shoppre.com/img/refer-and-earn/refer-and-earn-shoppre-shipping.png" alt="" />
                    </div>

                </div>
                <div>

                </div>

            </div>
        </div>
    );
}

export default Refer;
