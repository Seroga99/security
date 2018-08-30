import React from 'react';
import './Header.css';

const Header = ({ open, ...props }) => {
    return (
        <div className='header'>
           <div className='header__logo-container'>
               <a href="#">
                    <img src="#" alt=""/>
               </a>
           </div>
            <div className='header__burger'>
                <div className="bar" key="b1" />
                <div className="bar" key="b2" />
                <div className="bar" key="b3" />
            </div>
        </div>
    )
}


export default Header;