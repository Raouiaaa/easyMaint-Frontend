import React, { useState } from "react";
import { Accordion, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

function SubMenu({ icon, title, items }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    }

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
                                <div key={item} className="nav-item">
                                    <a
                                        className={`nav-link nav-item ps-4 ${item === "Active" ? "active" : ""
                                            } `}
                                        href="/"
                                        key={item}
                                    >
                                        {item}
                                    </a>
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