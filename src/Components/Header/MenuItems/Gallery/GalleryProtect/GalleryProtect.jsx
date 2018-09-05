import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './GalleryProtect.css';
import ImageGallery from 'react-image-gallery';
import {images} from './images/allImages';

const propTypes = {
    
};


class GalleryProtect extends PureComponent {
    render() {
        return (
            <div className='container'>
           
            <ImageGallery items={images} autoPlay={true} showBullets={true} showIndex={true} />
                
            </div>
        );
    }
}


GalleryProtect.propTypes = propTypes;


export default GalleryProtect;
