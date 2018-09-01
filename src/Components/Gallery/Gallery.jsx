import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import ImageGallery from 'react-image-gallery';

class Gallery extends Component {
    
    render() {
        const images = [
            {
              original: 'https://placeimg.com/840/500/any',
              thumbnail: 'https://placeimg.com/450/250/any',
            },
            {
              original: 'https://placeimg.com/840/500/any',
              thumbnail: 'https://placeimg.com/550/350/any'
            },
            {
              original: 'https://placeimg.com/840/500/any',
              thumbnail: 'https://placeimg.com/550/350/any',
              
            },
            {
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },
              {
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },{
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },
              {
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },{
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },
              {
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },{
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },
              {
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },{
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },
              {
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },{
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },
              {
                original: 'https://placeimg.com/840/500/any',
                thumbnail: 'https://placeimg.com/550/350/any',
                
              },
            
          ]
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