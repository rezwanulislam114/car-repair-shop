import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const { logInUsignGoogle } = useAuth();
    const redirect_url = location.state?.from || "/"

    const googleLogInHandle = () => {
        logInUsignGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    };

    return (
        <div>
            <div className="w-25 mx-auto mt-5">
                <h2 className="text-center my-3">Sign In</h2>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button variant="danger d-block mx-auto mt-3">Sign In</Button>
                <div className="text-center mt-4">
                    <p>or</p>
                    <Button onClick={googleLogInHandle} variant="danger">Sign In With Google</Button>
                    <p className="mt-4">Haven't any accout? <Link to="/register">Sign Up.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;