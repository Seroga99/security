import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './BoxGallery.css';
import ImageGallery from 'react-image-gallery';
import {images} from './images/allImages';
import MenuGallery from '../MenuGallery/MenuGallery';

const propTypes = {
    
};


class BoxGallery extends PureComponent {
    render() {
        return (
            <div className='container'>
             <MenuGallery/>

            <ImageGallery items={images} autoPlay={true} showBullets={true} showIndex={true} />
                            {/* {massImage.map(el => <ul>
            
                                <li><img src={el} alt=""/></li>
                                
                                </ul>)} */}
                                
                        </div>
        );
    }
}


BoxGallery.propTypes = propTypes;


export default BoxGallery;
