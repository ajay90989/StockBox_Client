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
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-wifi-2" />
                        </div>
                        <div className="menu-title">Services
                        </div>
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-wifi-2" />
                        </div>
                        <div className="menu-title">Signal
                        </div>
                      </Link>
                    </li>


                    <li>
                      <Link to={'/client/client'}>
                        <div className="parent-icon">
                          <i className="fadeIn animated bx bx-credit-card-front" />
                        </div>
                        <div className="menu-title">Demat</div>
                      </Link>
                    </li>

                    <li>
                      <Link to="/staff/signal">
                        <div className="parent-icon">
                          <i className="bx bx-wifi-2" />
                        </div>
                        <div className="menu-title">Subscription
                        </div>
                      </Link>
                    </li>


                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="lni lni-offer" />
                        </div>
                        <div className="menu-title">Coupons
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="bx bxs-chevron-right" />
                        </div>
                        <div className="menu-title">Faq's
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="bx bxs-chevron-right" />
                        </div>
                        <div className="menu-title">Privacy Policy
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="bx bxs-chevron-right" />
                        </div>
                        <div className="menu-title">Terms & Condition
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="bx bxs-chevron-right" />
                        </div>
                        <div className="menu-title">Help Desk
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/staff/faq">
                        <div className="parent-icon">
                          <i className="bx bxs-chevron-right" />
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
