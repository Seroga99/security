import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MenuGallery.css';
import {NavLink} from 'react-router-dom';

const propTypes = {
    
};


class MenuGallery extends PureComponent {
    render() {
        return (
            <div className='gallery__btn-container'> 
                  <NavLink className='gallery__btn' to='/BoxGallery'>Бокс</NavLink>
                  <NavLink className='gallery__btn' to='/KarateGallery'>Карате</NavLink>
                  <NavLink className='gallery__btn' to='/MuayThaiGallery'>Муей Тай</NavLink>
            </div>
        );
    }
}


MenuGallery.propTypes = propTypes;


export default MenuGallery;
