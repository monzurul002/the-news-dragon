import React from 'react';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const QZone = () => {
    return (
        <div className='bg-light py-3'>
            <h4 className='text-center'>Q-Zone</h4>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
    );
};

export default QZone;