import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg1.png";
import "./RIghtNav.css"
const RightNav = () => {
    return (
        <div>
           <div>
           <h2>Login With</h2>
            <Button className='mb-1' variant="outline-primary"> <FcGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub />  Login With Github</Button>
           </div>
            <div className='py-4'>
                <h4>Finds Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='text-primary'> <FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className=''> <FaSquareXTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='text-danger '> <FaInstagramSquare/>Instagram</ListGroup.Item>
                       </ListGroup>
            </div>
            {/* Qzone */}
            <div>
                <QZone></QZone>
            </div>
            <div className="position-relative bg-dark p-2  bg-opacity-25  ">
                <img className='blur-image' src={bg} alt="" />  
                <div className="position-absolute top-50 start-0 translate-middle-y px-2 text-center text-white">
                    <h1 className='fw-bold pb-5' >Create an Amazing Newspaper</h1>
                    <h5 className='fw-normal'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h5>
                    <Button variant='danger' className='text-white'>Learn More</Button>
                </div>
                
                    </div>
        </div>
    );
};

export default RightNav;