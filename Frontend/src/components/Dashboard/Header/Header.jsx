import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <div>
      <>
        {/*start header */}
        <header>
          <div className="topbar d-flex align-items-center">
            <nav className="navbar navbar-expand gap-3">
              <div className="mobile-toggle-menu">
                <i className="bx bx-menu" />
              </div>
              <div
                className="position-relative search-bar d-lg-block d-none"
                data-bs-toggle="modal"
                data-bs-target="#SearchModal"
              >
                <input
                  className="form-control px-5"
                  type="search"
                  placeholder="Search"
                />
                <span className="position-absolute top-50 search-show ms-3 translate-middle-y start-0 top-50 fs-5">
                  <i className="bx bx-search" />
                </span>
              </div>
              <div className="top-menu ms-auto">
                <ul className="navbar-nav align-items-center gap-1">
                  <li
                    className="nav-item mobile-search-icon d-flex d-lg-none"
                    data-bs-toggle="modal"
                    data-bs-target="#SearchModal"
                  >
                    <a className="nav-link" href="avascript:;">
                      <i className="bx bx-search" />
                    </a>
                  </li>



                  <li className="nav-item dropdown dropdown-large">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="alert-count">7</span>
                      <i className="bx bx-bell" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:;">
                        <div className="msg-header">
                          <p className="msg-header-title">Notifications11</p>
                          <p className="msg-header-badge">8 New</p>
                        </div>
                      </a>
                      <div className="header-notifications-list">
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="/assets/images/avatars/avatar-1.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Daisy Anderson
                                <span className="msg-time float-end">5 sec ago</span>
                              </h6>
                              <p className="msg-info">The standard chunk of lorem</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-danger text-danger">
                              dc
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Orders{" "}
                                <span className="msg-time float-end">2 min ago</span>
                              </h6>
                              <p className="msg-info">You have recived new orders</p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="/assets/images/avatars/avatar-2.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Althea Cabardo{" "}
                                <span className="msg-time float-end">14 sec ago</span>
                              </h6>
                              <p className="msg-info">
                                Many desktop publishing packages
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <img
                                src="/assets/images/app/outlook.png"
                                width={25}
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Account Created
                                <span className="msg-time float-end">28 min ago</span>
                              </h6>
                              <p className="msg-info">
                                Successfully created new email
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-info text-info">Ss</div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New Product Approved{" "}
                                <span className="msg-time float-end">2 hrs ago</span>
                              </h6>
                              <p className="msg-info">
                                Your new product has approved
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="/assets/images/avatars/avatar-4.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Katherine Pechon{" "}
                                <span className="msg-time float-end">15 min ago</span>
                              </h6>
                              <p className="msg-info">
                                Making this the first true generator
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-success text-success">
                              <i className="bx bx-check-square" />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Your item is shipped{" "}
                                <span className="msg-time float-end">5 hrs ago</span>
                              </h6>
                              <p className="msg-info">
                                Successfully shipped your item
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="notify bg-light-primary">
                              <img
                                src="/assets/images/app/github.png"
                                width={25}
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                New 24 authors
                                <span className="msg-time float-end">1 day ago</span>
                              </h6>
                              <p className="msg-info">
                                24 new authors joined last week
                              </p>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item" href="javascript:;">
                          <div className="d-flex align-items-center">
                            <div className="user-online">
                              <img
                                src="/assets/images/avatars/avatar-8.png"
                                className="msg-avatar"
                                alt="user avatar"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <h6 className="msg-name">
                                Peter Costanzo{" "}
                                <span className="msg-time float-end">6 hrs ago</span>
                              </h6>
                              <p className="msg-info">
                                It was popularised in the 1960s
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a href="javascript:;">
                        <div className="text-center msg-footer">
                          <button className="btn btn-primary w-100">
                            View All Notifications
                          </button>
                        </div>
                      </a>
                    </div>
                  </li>

                </ul>
              </div>
              <div className="user-box dropdown px-3">
                <a
                  className="d-flex align-items-center nav-link dropdown-toggle gap-3 dropdown-toggle-nocaret"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/images/user.png"
                    className="user-img"
                    alt="user avatar"
                  />
                  <div className="user-info">
                    <p className="user-name mb-0">Admin</p>

                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="/admin/profile"
                    >
                      <i className="bx bx-user fs-5" />
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="javascript:;"
                    >
                      <i className="bx bx-cog fs-5" />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="javascript:;"
                    >
                      <i className="bx bx-home-circle fs-5" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="javascript:;"
                    >
                      <i className="bx bx-dollar-circle fs-5" />
                      <span>Earnings</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center"
                      href="javascript:;"
                    >
                      <i className="bx bx-download fs-5" />
                      <span>Downloads</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider mb-0" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center"
                      to="/login"
                      onClick={(e) => localStorage.clear()}
                    >
                      <i className="bx bx-log-out-circle" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/*end header */}
      </>

    </div>
  )
}

export default Header
