import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const looggedInUser = result.user;
                console.log(looggedInUser);
                navigate(location.state?.from?.pathname || '/', { replace: true })

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-muted">
                    We ll never share your email with anyone else.
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className="text-muted text-secondary ">
                    Don not have an account?  <Link to='/register'>Register</Link>

                </Form.Text>
            </Form>
        </div>

    );
};

export default Login;