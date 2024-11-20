import React from 'react';
import { Link } from 'react-router-dom';

const Demat = () => {
    return (
        <div>
            <div className="page-content">

                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Supported Broker</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <Link href="/client/dashboard">
                                        <i className="bx bx-home-alt" />
                                    </Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4 justify-content-center align-items-center">
                    <div className="col">

                        <div className="card radius-15">
                            <div className="card-body text-center">
                                <div className="p-4 border radius-15">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D560BAQHU88VqPp14_w/company-logo_200_200/company-logo_200_200/0/1714714585811/alice_blue_financial_services_ltd_logo?e=2147483647&v=beta&t=-wlK1PYJutu-1MibN_iR2-i5Vga7VWuckKi0jOQp2F0"
                                        width={110}
                                        height={110}
                                        // className="rounded-circle shadow"
                                        alt=""
                                    />
                                    <h5 className="mb-0 mt-5">Alice Blue</h5>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card radius-15">
                            <div className="card-body text-center">
                                <div className="p-4 border radius-15">
                                    <img
                                        src="https://play-lh.googleusercontent.com/Ic8lUYwMCgTePpo-Gbg0VwE_0srDj1xD386BvQHO_mOwsfMjX8lFBLl0Def28pO_Mvk"
                                        width={110}
                                        height={110}
                                        // className="rounded-circle shadow"
                                        alt=""
                                    />
                                    <h5 className="mb-0 mt-5">Angel One</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
}

export default Demat;
