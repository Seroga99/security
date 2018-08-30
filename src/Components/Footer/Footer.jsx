import React from 'react';
import './Footer.css';
import youtube from './youtube.svg';
import facebook from './facebook.svg';

const Footer = () => {
    return (
        <div className='footer__contacts'>
            <ul className='contacts__telephone-list'>
                <li className='item contacts__telephone-item'>
                   <h5 className='telephone-item__number'>+38 (095) 007-54-58</h5>
                </li>
                <li className='item contacts__telephone-item'>
                    <h5 className='telephone-item__number'>+38 (044) 251-00-08</h5>
                </li>
            </ul>
            <ul className='contacts__networks-list'>
                <li className='item contacts__networks-item'>
                    <a href="https://www.youtube.com/channel/UCRnWq73JZ316Kd_wsdbS1nQ" target="_blank">
                        <img className='contacts__networks-youtube' src={youtube} alt="youtube"/>
                    </a>
                </li>
                <li className='item contacts__networks-item'>
                    <a href="https://www.facebook.com/groups/sportalyansecontrol/about/" target="_blank">
                        <img className='contacts__networks-facebook' src={facebook} alt="facebook"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default Footer;

