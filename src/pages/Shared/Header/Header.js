import React from 'react';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, isLoading } = useAuth();

    return (
        <div>
            {
                isLoading ? <Spinner className="d-block mx-auto" animation="border" variant="danger" /> :
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home"> <span className="text-danger">RED</span>WILD</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                                <Nav className="align-items-center">
                                    {
                                        (user.email || user.displayName) && <span className="d-inline-block text-secondary">{user.displayName}</span>
                                    }
                                    {
                                        (user.email || user.displayName) ?
                                            <Nav.Link> Sign Out </Nav.Link> :
                                            <Nav.Link as={Link} to="/login"> Sign In </Nav.Link>
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