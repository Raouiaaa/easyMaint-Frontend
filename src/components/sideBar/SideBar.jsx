import React from 'react'
import { Nav } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGauge,
    faScrewdriverWrench,
    faListCheck,
    faComment,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import './sideBar.css'


const subMenuItems = [
    {
        title: "Global view",
        route: "/dashboard/global-view",
    },
    {
        title: "Calendar",
        route: "/dashboard/calendar",
    },
];

function SideBar() {
    const location = useLocation();
    return (
        <div className="sidebar is-open">
            <div className="sidebar-header">
                <img
                    className="bi pe-none me-2 logo"
                    style={{ width: "50px", height: "44px" }}
                    src={'/logoEM.jpg'}
                />
                <span className="fs-5 fw-semibold">EasyMaint</span>
            </div>

            <Nav className="flex-column pt-4">
                <SubMenu
                    title="Dashboard"
                    icon={faGauge}
                    items={subMenuItems}
                />

                <Nav.Item className={location.pathname === "/assets" ? "active" : ""}>
                    <Link className='nav-link' to="/assets">
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="me-2" />
                        Assets
                    </Link>
                </Nav.Item>
                <Nav.Item className={location.pathname === "/work-orders" ? "active" : ""}>
                    <Link className='nav-link' to="/work-orders">
                        <FontAwesomeIcon icon={faListCheck} className="me-2" />
                        Work Orders
                    </Link>
                </Nav.Item>
                <Nav.Item className={location.pathname === "/notifications" ? "active" : ""}>
                    <Link className='nav-link' to="/notifications">
                        <FontAwesomeIcon icon={faComment} className="me-2" />
                        Notifications
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default SideBar