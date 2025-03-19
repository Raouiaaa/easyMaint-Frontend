import React from 'react'
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGauge,
    faScrewdriverWrench,
    faListCheck,
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

                <Nav.Item className="active">
                    <Nav.Link href="/assets">
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="me-2" />
                        Assets
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/work-orders">
                        <FontAwesomeIcon icon={faListCheck} className="me-2" />
                        Work Orders
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default SideBar