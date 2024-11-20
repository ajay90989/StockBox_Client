import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ onToggleClick }) => {


  return (
    <div>
      <div data-simplebar="init">
        <div className="simplebar-wrapper" style={{ margin: 0 }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
              <div
                className="simplebar-content-wrapper"

              >
                <div className="simplebar-content mm-active" style={{ padding: 0 }}>
                  <div className="sidebar-header">
                    <div>
                      <img
                        src="/assets/images/logo-icon.png"
                        className="logo-icon"
                        alt="logo icon"
                      />
                    </div>
                    <div>
                      <h4 className="logo-text">STOCK BOX</h4>
                    </div>
                    <div className="toggle-icon ms-auto" onClick={onToggleClick}>
                      <i className="bx bx-arrow-back" />
                    </div>
                  </div>
                  {/*navigation*/}
                  <ul className="metismenu mm-show" id="menu">
                    <li>
                      <Link
                        to={'/client/dashboard'}
                      >
                        <div className="parent-icon">
                          <i className="bx bx-home-alt" />
                        </div>
                        <div className="menu-title">Dashboard</div>
                      </Link>

                    </li>
                    <li>
                      <Link to="/client/service">
                        <div className="parent-icon">
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
                            className="feather feather-tool text-white"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                          </svg>

                        </div>
                        <div className="menu-title">Services
                        </div>
                      </Link>
                    </li>


                    <li>
                      <Link to={'/client/trade'}>
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-bar-chart-alt" />
                        </div>
                        <div className="menu-title">Trades</div>
                      </Link>
                    </li>

                    <li>
                      <Link to={'/client/demat'}>
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-credit-card-front" />
                        </div>
                        <div className="menu-title">Demat</div>
                      </Link>
                    </li>

                    <li>
                      <Link to="/client/subscription">
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-label" />
                        </div>
                        <div className="menu-title">Subscription
                        </div>
                      </Link>
                    </li>


                    <li>
                      <Link to="/client/coupon">
                        <div className="parent-icon">
                          <i className="lni lni-offer" />
                        </div>
                        <div className="menu-title">Coupons
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/client/faq">
                        <div className="parent-icon">
                          <i className="bx bx-help-circle" />
                        </div>
                        <div className="menu-title">Faq's
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/client/privacy">
                        <div className="parent-icon">
                          <i className="bx bxs-chevron-right" />
                        </div>
                        <div className="menu-title">Privacy Policy
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/client/terms">
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-file" />
                        </div>
                        <div className="menu-title">Terms & Condition
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="bx bx-help-circle" />
                        </div>
                        <div className="menu-title">Help Desk
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-message-dots" />
                        </div>
                        <div className="menu-title">Broadcasts
                        </div>
                      </Link>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: 1393 }}
          />
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{ width: 0, display: "none" }}
          />
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: 294,
              transform: "translate3d(0px, 347px, 0px)",
              display: "block"
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Sidebar
