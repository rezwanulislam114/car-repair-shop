import React from 'react';
import { Container, Nav, Navbar, Spinner, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, isLoading, logOut } = useAuth();
    const history = useHistory();

    return (
        <div>
            {
                isLoading ? <Spinner className="d-block mx-auto" animation="border" variant="danger" /> :
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/home"> <span className="text-danger">RED</span>WILD</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                                    <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                                </Nav>
                                <Nav className="align-items-center">
                                    {
                                        (user.email || user.displayName) && <span className="d-inline-block text-secondary">{user.displayName}</span>
                                    }
                                    {
                                        (user.email || user.displayName) ?
                                            <Button onClick={logOut} variant="danger" className="ms-2">Sign Out</Button> :
                                            <Button onClick={() => history.push("/login")} variant="danger" className="ms-2">Sign In</Button>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            }
        </div>
    );
};

export default Header;