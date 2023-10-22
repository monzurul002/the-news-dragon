import React from 'react';
import wave from "../../../assets/wave.svg"
const Footer = () => {
    const divStyle = {
        backgroundImage: `url(${wave})`,
        backgroundSize: 'cover',
        height: "150px",
        borderRadius: '10px',
        position: 'relative',
        // width: '100%',
    }
    const textStyle = {
        color: 'white',
        position: 'absolute',
        top: '80%', // Adjust the vertical position as needed
        left: '50%', // Adjust the horizontal position as needed
        transform: 'translate(-50%, -50%)', // Center the text
    };
    return (
        <div style={divStyle}>
            <p style={textStyle} className='text-center text-danger'><small>Copyright 2023</small></p>

        </div>
    );
};

export default Footer;