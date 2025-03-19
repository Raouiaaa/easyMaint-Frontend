import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SubMenu({ icon, title, items }) {
    return (
        <Nav.Item>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ background: '#354052' }}>
                        <FontAwesomeIcon icon={icon} className="me-2" />
                        {title}
                    </Accordion.Header>
                    <Accordion.Body>
                        <nav className="nav flex-column">
                            {items.map(item => (
                                <div key={item.title} className="nav-item">
                                    <Link
                                        className={`nav-link nav-item ps-4 ${item === "Active" ? "active" : ""
                                            } `}
                                        to={item.route}
                                        key={"link_" + item.title}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </Nav.Item>
    );
}

export default SubMenu