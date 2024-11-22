import React from 'react';

const Browse = () => {
    return (
        <div>
            <div className="page-content">
                {/*breadcrumb*/}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">Browse</div>
                    <div className="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0 p-0">
                                <li className="breadcrumb-item">
                                    <a href="javascript:;">
                                        <i className="bx bx-home-alt" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    News & Blogs
                                </li>
                            </ol>
                        </nav>
                    </div>

                </div>
                <hr />
                {/*end breadcrumb*/}
                <div className="row">
                    <div className="col-12 col-lg-9 mx-auto">
                        <div className="d-flex justify-content-between align-items-center">
                            <h6 className="mb-0 text-uppercase">News</h6>
                            <h6 className="mb-0 text-uppercase">view all</h6>
                        </div>

                        <hr />
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="assets/images/avatars/avatar-1.png"
                                        className="rounded-circle p-1 border"
                                        width={90}
                                        height={90}
                                        alt="..."
                                    />
                                    <div className="flex-grow-1 ms-3">
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 className="mt-0">our research policy</h5>
                                            <p>18Nov, 07:10</p>
                                        </div>

                                        <p className="mb-0">
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                            nisi vulputate fringilla
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/*end breadcrumb*/}
                <div className="row">
                    <div className="col-12 col-lg-9 mx-auto">
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className="mb-0 text-uppercase">Blogs</h6>
                            <h6 className="mb-0 text-uppercase">View all</h6>
                        </div>
                        <hr />
                        <div className="card radius-10">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="assets/images/avatars/avatar-1.png"
                                        className="rounded-circle p-1 border"
                                        width={90}
                                        height={90}
                                        alt="..."
                                    />
                                    <div className="flex-grow-1 ms-3">
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <h5 className="mt-0">Tgdsf gtsgs</h5>
                                            <p className="mt-0">18 Nov, 07:10</p>
                                        </div>
                                        <p className="mb-0">
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                                            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                            nisi vulputate fringilla
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Browse;
