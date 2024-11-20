import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                    <div className="breadcrumb-title pe-3">FAQ</div>
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
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Need Help ?</h5>
                        <hr />
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="false"
                                        aria-controls="collapseOne"
                                    >
                                        For Testing
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                    style={{}}
                                >
                                    <div className="accordion-body">
                                        {" "}
                                        <strong>This is the first item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the appropriate
                                        classes that we use to style each element. These classes control the
                                        overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or
                                        overriding our default variables. It's also worth noting that just
                                        about any HTML can go within the <code>.accordion-body</code>,
                                        though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        ABCD
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                    style={{}}
                                >
                                    <div className="accordion-body">
                                        {" "}
                                        <strong>This is the second item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the appropriate
                                        classes that we use to style each element. These classes control the
                                        overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or
                                        overriding our default variables. It's also worth noting that just
                                        about any HTML can go within the <code>.accordion-body</code>,
                                        though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        ANMDDSJ
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                    style={{}}
                                >
                                    <div className="accordion-body">
                                        {" "}
                                        <strong>This is the third item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the appropriate
                                        classes that we use to style each element. These classes control the
                                        overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or
                                        overriding our default variables. It's also worth noting that just
                                        about any HTML can go within the <code>.accordion-body</code>,
                                        though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        McKhua
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample"
                                    style={{}}
                                >
                                    <div className="accordion-body">
                                        {" "}
                                        <strong>This is the third item's accordion body.</strong> It is
                                        hidden by default, until the collapse plugin adds the appropriate
                                        classes that we use to style each element. These classes control the
                                        overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or
                                        overriding our default variables. It's also worth noting that just
                                        about any HTML can go within the <code>.accordion-body</code>,
                                        though the transition does limit overflow.
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

export default Faq;
