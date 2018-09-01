import React from 'react';
import './Main.css';
import MainPages from '../Header/MenuItems/MainPages/MainPages';
import GalleryProtection from '../../Components/Header/MenuItems/ProtectionCompany/GalleryProtection/GalleryProtection';

const Main = () => {
    return (
        <div className='wrapper_main'>
          <MainPages/>
        <GalleryProtection />
        </div>

    )
};


export default Main;

