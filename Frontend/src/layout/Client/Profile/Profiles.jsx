import React from 'react';

const Profiles = () => {
  return (
    <div>
          <div className="page-content">
              {/*breadcrumb*/}
              <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                  <div className="breadcrumb-title pe-3">User Profile</div>
                  <div className="ps-3">
                      <nav aria-label="breadcrumb">
                          <ol className="breadcrumb mb-0 p-0">
                              <li className="breadcrumb-item">
                                  <a href="javascript:;">
                                      <i className="bx bx-home-alt" />
                                  </a>
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                  User Profile
                              </li>
                          </ol>
                      </nav>
                  </div>
                  <div className="ms-auto">
                      <div className="btn-group">
                          <button type="button" className="btn btn-primary">
                              Settings
                          </button>
                          <button
                              type="button"
                              className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
                              data-bs-toggle="dropdown"
                          >
                              {" "}
                              <span className="visually-hidden">Toggle Dropdown</span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                              {" "}
                              <a className="dropdown-item" href="javascript:;">
                                  Action
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                  Another action
                              </a>
                              <a className="dropdown-item" href="javascript:;">
                                  Something else here
                              </a>
                              <div className="dropdown-divider" />{" "}
                              <a className="dropdown-item" href="javascript:;">
                                  Separated link
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              {/*end breadcrumb*/}
              <div className="container">
                  <div className="main-body">
                      <div className="row">
                          <div className="col-lg-4">
                              <div className="card">
                                  <div className="card-body">
                                      <div className="d-flex flex-column align-items-center text-center">
                                          <img
                                              src="assets/images/avatars/avatar-2.png"
                                              alt="Admin"
                                              className="rounded-circle p-1 bg-primary"
                                              width={110}
                                          />
                                          <div className="mt-3">
                                              <h4>John Doe</h4>
                                              <p className="text-secondary mb-1">Full Stack Developer</p>
                                              <p className="text-muted font-size-sm">
                                                  Bay Area, San Francisco, CA
                                              </p>
                                              <button className="btn btn-primary me-2">Follow</button>
                                              <button className="btn btn-outline-primary">Message</button>
                                          </div>
                                      </div>
                                      <hr className="my-4" />
                                      <ul className="list-group list-group-flush">
                                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                              <h6 className="mb-0">
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
                                                      className="feather feather-globe me-2 icon-inline"
                                                  >
                                                      <circle cx={12} cy={12} r={10} />
                                                      <line x1={2} y1={12} x2={22} y2={12} />
                                                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                  </svg>
                                                  Website
                                              </h6>
                                              <span className="text-secondary">https://codervent.com</span>
                                          </li>
                                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                              <h6 className="mb-0">
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
                                                      className="feather feather-github me-2 icon-inline"
                                                  >
                                                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                  </svg>
                                                  Github
                                              </h6>
                                              <span className="text-secondary">codervent</span>
                                          </li>
                                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                              <h6 className="mb-0">
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
                                                      className="feather feather-twitter me-2 icon-inline text-info"
                                                  >
                                                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                  </svg>
                                                  Twitter
                                              </h6>
                                              <span className="text-secondary">@codervent</span>
                                          </li>
                                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                              <h6 className="mb-0">
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
                                                      className="feather feather-instagram me-2 icon-inline text-danger"
                                                  >
                                                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                  </svg>
                                                  Instagram
                                              </h6>
                                              <span className="text-secondary">codervent</span>
                                          </li>
                                          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                              <h6 className="mb-0">
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
                                                      className="feather feather-facebook me-2 icon-inline text-primary"
                                                  >
                                                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                                  </svg>
                                                  Facebook
                                              </h6>
                                              <span className="text-secondary">codervent</span>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-8">
                              <div className="card">
                                  <div className="card-body">
                                      <div className="row mb-3">
                                          <div className="col-sm-3">
                                              <h6 className="mb-0">Full Name</h6>
                                          </div>
                                          <div className="col-sm-9 text-secondary">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  defaultValue="John Doe"
                                              />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                          <div className="col-sm-3">
                                              <h6 className="mb-0">Email</h6>
                                          </div>
                                          <div className="col-sm-9 text-secondary">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  defaultValue="john@example.com"
                                              />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                          <div className="col-sm-3">
                                              <h6 className="mb-0">Phone</h6>
                                          </div>
                                          <div className="col-sm-9 text-secondary">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  defaultValue="(239) 816-9029"
                                              />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                          <div className="col-sm-3">
                                              <h6 className="mb-0">Mobile</h6>
                                          </div>
                                          <div className="col-sm-9 text-secondary">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  defaultValue="(320) 380-4539"
                                              />
                                          </div>
                                      </div>
                                      <div className="row mb-3">
                                          <div className="col-sm-3">
                                              <h6 className="mb-0">Address</h6>
                                          </div>
                                          <div className="col-sm-9 text-secondary">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  defaultValue="Bay Area, San Francisco, CA"
                                              />
                                          </div>
                                      </div>
                                      <div className="row">
                                          <div className="col-sm-3" />
                                          <div className="col-sm-9 text-secondary">
                                              <input
                                                  type="button"
                                                  className="btn btn-primary px-4"
                                                  defaultValue="Save Changes"
                                              />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="col-sm-12">
                                      <div className="card">
                                          <div className="card-body">
                                              <h5 className="d-flex align-items-center mb-3">
                                                  Project Status
                                              </h5>
                                              <p>Web Design</p>
                                              <div className="progress mb-3" style={{ height: 5 }}>
                                                  <div
                                                      className="progress-bar bg-primary"
                                                      role="progressbar"
                                                      style={{ width: "80%" }}
                                                      aria-valuenow={80}
                                                      aria-valuemin={0}
                                                      aria-valuemax={100}
                                                  />
                                              </div>
                                              <p>Website Markup</p>
                                              <div className="progress mb-3" style={{ height: 5 }}>
                                                  <div
                                                      className="progress-bar bg-danger"
                                                      role="progressbar"
                                                      style={{ width: "72%" }}
                                                      aria-valuenow={72}
                                                      aria-valuemin={0}
                                                      aria-valuemax={100}
                                                  />
                                              </div>
                                              <p>One Page</p>
                                              <div className="progress mb-3" style={{ height: 5 }}>
                                                  <div
                                                      className="progress-bar bg-success"
                                                      role="progressbar"
                                                      style={{ width: "89%" }}
                                                      aria-valuenow={89}
                                                      aria-valuemin={0}
                                                      aria-valuemax={100}
                                                  />
                                              </div>
                                              <p>Mobile Template</p>
                                              <div className="progress mb-3" style={{ height: 5 }}>
                                                  <div
                                                      className="progress-bar bg-warning"
                                                      role="progressbar"
                                                      style={{ width: "55%" }}
                                                      aria-valuenow={55}
                                                      aria-valuemin={0}
                                                      aria-valuemax={100}
                                                  />
                                              </div>
                                              <p>Backend API</p>
                                              <div className="progress" style={{ height: 5 }}>
                                                  <div
                                                      className="progress-bar bg-info"
                                                      role="progressbar"
                                                      style={{ width: "66%" }}
                                                      aria-valuenow={66}
                                                      aria-valuemin={0}
                                                      aria-valuemax={100}
                                                  />
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

    </div>
  );
}

export default Profiles;
