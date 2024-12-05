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
                
                <div className="card radius-5">
  <div className="card-body">
    <ul className="list-unstyled">
      <li className="d-flex align-items-center border-bottom pb-2">
        <img
          src="assets/images/avatars/avatar-8.png"
          className="rounded-circle p-1 border"
          width={70}
          height={70}
          alt="..."
        />
        <div className="flex-grow-1 ms-3">
          <h5 className="mt-0 mb-1">Unlock Unbeatable Exclusive redDeals!<span className="c-offer"> 20% OFF</span></h5>
          <p className="use-cod">Use code
    <span>SUPERHIT</span> | Valid till 31 Dec |{" "}
    <a href="#">T&amp;C</a>
  </p>
        </div>
        <button type="button" className="btn btn-primary px-5"> Apply Now</button>

      </li>
      <li className="d-flex align-items-center border-bottom pb-2">
        <img
          src="assets/images/avatars/avatar-8.png"
          className="rounded-circle p-1 border"
          width={70}
          height={70}
          alt="..."
        />
        <div className="flex-grow-1 ms-3">
          <h5 className="mt-0 mb-1">Unlock Unbeatable Exclusive redDeals!<span className="c-offer"> 20% OFF</span></h5>
          <p className="use-cod">Use code
    <span>SUPERHIT</span> | Valid till 31 Dec |{" "}
    <a href="#">T&amp;C</a>
  </p>
        </div>
        <button type="button" className="btn btn-primary px-5"> Apply Now</button>

      </li>
      <li className="d-flex align-items-center border-bottom pb-2">
        <img
          src="assets/images/avatars/avatar-8.png"
          className="rounded-circle p-1 border"
          width={70}
          height={70}
          alt="..."
        />
        <div className="flex-grow-1 ms-3">
          <h5 className="mt-0 mb-1">Unlock Unbeatable Exclusive redDeals!<span className="c-offer"> 20% OFF</span></h5>
          <p className="use-cod">Use code
    <span>SUPERHIT</span> | Valid till 31 Dec |{" "}
    <a href="#">T&amp;C</a>
  </p>
        </div>
        <button type="button" className="btn btn-primary px-5"> Apply Now</button>

      </li>
    </ul>
  </div>
</div>

            </div>

        </div>
    );
}

export default Coupon;
