import React from 'react'
import { Link } from "react-router-dom";
import "./sideBar.css";
import logo from "../../assets/logoEM.jpg";

function SideBar() {
    return (
        <div className={"dashboard flex-shrink-0 p-3"} style={{ width: "280px" }}>
            <a
                href="/"
                className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
            >
                <img
                    className="bi pe-none me-2 logo"
                    style={{ width: "50px", height: "44px" }}
                    src={logo}
                />
                <span className="fs-5 fw-semibold">EasyMaint</span>
            </a>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            className="triangle-down btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#home-collapse"
                            aria-expanded="true"
                            d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                        />
                    </svg>
                    <button
                        className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#home-collapse"
                        aria-expanded="true"
                    >
                        Dashboard
                    </button>
                    <div className="collapse show" id="home-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li>
                                <Link to="/dashboard/global-view" className="link-body-emphasis d-inline-flex text-decoration-none rounded" >Global view</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/calendar" className="link-body-emphasis d-inline-flex text-decoration-none rounded" >Calendar</Link>
                            </li>
                        </ul>
                    </div>

                    <ul class="nav nav-pills flex-column mb-auto">
                        <li>
                            <Link to="/assets" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Assets</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SideBar