import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const CoachNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">GameIQ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Team</Nav.Link>
                        <Nav.Link href="/DepthChart">Depth Chart</Nav.Link>
                        <NavDropdown title="Playbooks" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Offenseplaybook">Offense Playbook</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Defense Playbook</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CoachNav;
