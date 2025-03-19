import React from 'react'
import { Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGauge,
    faScrewdriverWrench,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import './sideBar.css'
import logo from "../../assets/logoEM.jpg";

function SideBar() {
    return (
        <div className="sidebar is-open">
            <div className="sidebar-header">
                <img
                    className="bi pe-none me-2 logo"
                    style={{ width: "50px", height: "44px" }}
                    src={logo}
                />
                <span className="fs-5 fw-semibold">EasyMaint</span>
            </div>

            <Nav className="flex-column pt-4">
                <SubMenu
                    title="Dashboard"
                    icon={faGauge}
                    items={["Global view", "Calendar"]}
                />

                <Nav.Item className="active">
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="me-2" />
                        Assets
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">
                        <FontAwesomeIcon icon={faListCheck} className="me-2" />
                        Work Orders
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default SideBar