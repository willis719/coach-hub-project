import React, { useEffect } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { setCoach } from '../redux/actions';

const CoachNav = () => {

    const coach = useSelector((state) => state.coach);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        fetch('/api/v1/users/logout')
            .then(res => res.json())
            .then (data => {
                if (data.success) {
                    alert(data.success)
                    dispatch(setCoach(null))
                    history.push('/login')
                }
            });
    };

    useEffect(() => {
        fetch('/api/v1/users/current')
          .then((res) => res.json())
          .then((data) => {
            if (!data.error) {
              dispatch(setCoach(data));
            }
          });
      }, [dispatch]);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">GameIQ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/team">Team</Nav.Link>
                        <Nav.Link href="/DepthChart">Depth Chart</Nav.Link>
                        <Nav.Link href="/Offenseplaybook">Offense Playbook</Nav.Link>
                    </Nav>
                    <Nav>
                        {coach ? (
                            <>
                                <Nav.Link disabled>{coach.name}</Nav.Link>
                                <Nav.Link disabled>{coach.team}</Nav.Link>
                                <Nav.Link onClick={logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="/register">Register</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CoachNav;
