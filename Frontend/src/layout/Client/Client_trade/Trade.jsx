import React from 'react'
import { Link } from 'react-router-dom'

const Trade = () => {
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
                            </ol>
                        </nav>
                    </div>
                </div>
                <hr />
                <div className="card">
                    <div className="card-body">
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

                                        <div className="tab-title">Cash</div>
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

                                        <div className="tab-title">Future</div>
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    data-bs-toggle="pill"
                                    href="#primary-pills-contact"
                                    role="tab"
                                    aria-selected="false"
                                    tabIndex={-1}
                                >
                                    <div className="d-flex align-items-center">

                                        <div className="tab-title">Option</div>
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
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link active"
                                                    data-bs-toggle="pill"
                                                    href="#primary-pills-home1"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    <div className="d-flex align-items-center">

                                                        <div className="tab-title">Live Trade</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    data-bs-toggle="pill"
                                                    href="#primary-pills-profile1"
                                                    role="tab"
                                                    aria-selected="false"
                                                    tabIndex={-1}
                                                >
                                                    <div className="d-flex align-items-center">

                                                        <div className="tab-title">Close Trade</div>
                                                    </div>
                                                </a>
                                            </li>

                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="primary-pills-home1"
                                                role="tabpanel"
                                            >
                                                <p>
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="primary-pills-profile1" role="tabpanel">
                                                <p>
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress, commodo
                                                    enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                                                    PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
                                                    mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
                                                    labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                                                    sustainable jean shorts beard ut DIY ethical culpa terry richardson
                                                    biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                                    sapiente accusamus tattooed echo park.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>








                            <div className="tab-pane fade" id="primary-pills-profile" role="tabpanel">
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link active"
                                                    data-bs-toggle="pill"
                                                    href="#primary-pills-home2"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    <div className="d-flex align-items-center">

                                                        <div className="tab-title">Live Trade</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    data-bs-toggle="pill"
                                                    href="#primary-pills-profile2"
                                                    role="tab"
                                                    aria-selected="false"
                                                    tabIndex={-1}
                                                >
                                                    <div className="d-flex align-items-center">

                                                        <div className="tab-title">Close Trade</div>
                                                    </div>
                                                </a>
                                            </li>

                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="primary-pills-home2"
                                                role="tabpanel"
                                            >
                                                <p>
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="primary-pills-profile2" role="tabpanel">
                                                <p>
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress, commodo
                                                    enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                                                    PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
                                                    mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
                                                    labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                                                    sustainable jean shorts beard ut DIY ethical culpa terry richardson
                                                    biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                                    sapiente accusamus tattooed echo park.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>















                            <div className="tab-pane fade" id="primary-pills-contact" role="tabpanel">
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link active"
                                                    data-bs-toggle="pill"
                                                    href="#primary-pills-home3"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    <div className="d-flex align-items-center">

                                                        <div className="tab-title">Live Trade</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    className="nav-link"
                                                    data-bs-toggle="pill"
                                                    href="#primary-pills-profile3"
                                                    role="tab"
                                                    aria-selected="false"
                                                    tabIndex={-1}
                                                >
                                                    <div className="d-flex align-items-center">

                                                        <div className="tab-title">Close Trade</div>
                                                    </div>
                                                </a>
                                            </li>

                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="primary-pills-home3"
                                                role="tabpanel"
                                            >
                                                <p>
                                                    Raw denim you probably haven't heard of them jean shorts Austin.
                                                    Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                                    cliche tempor, williamsburg carles vegan helvetica. Reprehenderit
                                                    butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi,
                                                    qui irure terry richardson ex squid. Aliquip placeat salvia cillum
                                                    iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                    voluptate nisi.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="primary-pills-profile3" role="tabpanel">
                                                <p>
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee. Qui photo booth letterpress, commodo
                                                    enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                                                    PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus
                                                    mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente
                                                    labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                                                    sustainable jean shorts beard ut DIY ethical culpa terry richardson
                                                    biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui
                                                    sapiente accusamus tattooed echo park.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Trade

