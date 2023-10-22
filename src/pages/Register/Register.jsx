import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { useState } from 'react';

const Register = () => {
    const { createUser, updateUserInfo } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [check, setCheck] = useState(false)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 0) {
            return setError("Password can't be empty")
        }
        else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            return setError("password must  be conatain at least one number and one alphabetic character")
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserInfo(name, photo)
                    .then(() => {

                    })
                    .catch(() => {

                    })

            })
            .catch(error => {

                setError(error.message);
            })

    }
    const handleChek = (e) => {
        const check = e.target.checked;
        setCheck(check)
    }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center'>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    this check way is working 
                    <Form.Check onClick={() => { setCheck(!check) }} type="checkbox" name="accept" label={<>Accept <Link to="/terms">  terms & condition.</Link></>} />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* this  way is best */}
                    <Form.Check onClick={handleChek} type="checkbox" name="accept" label={<>Accept <Link to="/terms">  terms & condition.</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!check}>
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted text-secondary ">
                    Already have an account?  <Link to='/login'>Login</Link>

                </Form.Text>
            </Form>
        </div>
    );
};

export default Register;