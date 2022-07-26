import React from 'react';
import Tilt from 'react-parallax-tilt';
import academyLogo from './resize_academy_logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' tiltMaxAngleX={30} tiltMaxAngleY={30} >
                <div className='pa3'>
                    <img style={{paddingTop: '5px'}} alt='logo' src={academyLogo}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
