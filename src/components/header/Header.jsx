import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import "./header.css";

function Header() {
    return (
        <Navbar
            bg="light"
            className="navbar shadow-sm px-4 mb-5 bg-white rounded"
            expand
        >
            <Nav.Link href="#">
                <div className='d-flex align-items-center'>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: "50px", marginRight: "1rem" }}
                        alt="Avatar" />
                    <div className="fs-5 fw-semibold">{"Welecome back ...!"}</div>
                </div>
            </Nav.Link>

            <Nav className="ms-auto" navbar>
                <Nav.Link href="#">
                    <button type="button" class="btn btn-primary position-relative">
                        <FontAwesomeIcon icon={faBell} />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                        </span>
                    </button>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header