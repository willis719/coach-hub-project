import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const CoachNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">GameIQ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Team</Nav.Link>
                        <Nav.Link href="#pricing">Depth Chart</Nav.Link>
                        <NavDropdown title="Playbooks" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Offense Playbook</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Defense Playbook</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Coach Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CoachNav;
