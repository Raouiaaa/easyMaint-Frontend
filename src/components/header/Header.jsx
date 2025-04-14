import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Modal, Alert } from "react-bootstrap";
import { useAppContext } from "../../globalContextProvider/GlobalContextProvider";

import "./header.css";

function Header() {
    const { notifications, unreadCount, clearNotifications } = useAppContext();
    const [showNotifications, setShowNotifications] = useState(false);

    const handleClick = () => {
        setShowNotifications(true);
    };

    const handleClose = () => {
        setShowNotifications(false);
        clearNotifications(); // Clear notifications when modal is closed
    };

    return (
        <Navbar bg="light" className="navbar shadow-sm px-4 mb-5 bg-white rounded" expand>
            <Nav.Link href="#">
                <div className="d-flex align-items-center">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{ width: "50px", marginRight: "1rem" }} alt="Avatar" />
                    <div className="fs-5 fw-semibold">{"Welcome back ...!"}</div>
                </div>
            </Nav.Link>

            <Nav className="ms-auto" navbar>
                <Nav.Link href="#">
                    <button onClick={handleClick} type="button" className="btn btn-primary position-relative">
                        <FontAwesomeIcon icon={faBell} />
                        {unreadCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {unreadCount}
                            </span>
                        )}
                    </button>
                </Nav.Link>
            </Nav>

            <Modal show={showNotifications} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {notifications.length > 0 ? (
                        notifications.map((message, index) => (
                            <Alert key={index} variant="danger">
                                {message}
                            </Alert>
                        ))
                    ) : (
                        <Alert key="info" variant="info">
                            No new notifications.
                        </Alert>
                    )}
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}

export default Header;
