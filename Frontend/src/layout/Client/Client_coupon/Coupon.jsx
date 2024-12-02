import React from 'react';

const Coupon = () => {
    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Coupons</div>
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
                <div className="row">
                    <div className="col-md-6">
                        <div className="coupon">
                            <div className="left">
                                <div>Limited Time Only</div>
                            </div>
                            <div className="center">
                                <div>
                                    <h2>10% OFF</h2>
                                    <h3>Coupon</h3>
                                    <small>test offer minimum purchae value ₹10</small>
                                </div>
                            </div>
                            <div className="right">
                                <div>test123</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="coupon">
                            <div className="left">
                                <div>Limited Time Only</div>
                            </div>
                            <div className="center">
                                <div>
                                    <h2>50% OFF</h2>
                                    <h3>Coupon</h3>
                                    <small>test offer minimum purchae value ₹600</small>
                                </div>
                            </div>
                            <div className="right">

                                <div>12HGHG</div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Coupon;
