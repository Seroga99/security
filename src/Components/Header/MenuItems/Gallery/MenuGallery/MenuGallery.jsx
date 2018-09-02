import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MenuGallery.css';
import {NavLink} from 'react-router-dom';

const propTypes = {
    
};


class MenuGallery extends PureComponent {
    render() {
        return (
            <div>
                 
                  <NavLink  to='/BoxGallery'>Бокс</NavLink>
                  <NavLink  to='/KarateGallery'>Карате</NavLink>
                  <NavLink  to='/MuayThaiGallery'>Муей Тай</NavLink>
                  
            </div>
        );
    }
}


MenuGallery.propTypes = propTypes;


export default MenuGallery;
