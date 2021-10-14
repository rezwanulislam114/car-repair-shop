import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const BookNow = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className="title-text mt-5">Book Now</h1>
            <Form className="w-50 mx-auto mt-5">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={user?.email} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone no" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control value={user?.displayName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="House, Road, Area, City." />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Services</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Tire Change</option>
                            <option>Tire Punture</option>
                            <option>Tire Customization</option>
                            <option>Sound System</option>
                            <option>AC Configuration</option>
                            <option>Body Kit Install</option>
                            <option>Fully Body Color</option>
                            <option>Glass Modify</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Chose Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Agree to documemtation" />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Book Now
                </Button>
            </Form>
        </div>
    );
};

export default BookNow;