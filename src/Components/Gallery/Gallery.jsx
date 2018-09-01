import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';
import {images} from './images/allImages';

class Gallery extends Component {
    
    render() {
       
        return (
            <div className='container'>
<ImageGallery items={images} autoPlay={true} showBullets={true} showIndex={true} />
                {/* {massImage.map(el => <ul>

                    <li><img src={el} alt=""/></li>
                    
                    </ul>)} */}
            </div>
        );
    }
}

Gallery.propTypes = {

};

export default Gallery;