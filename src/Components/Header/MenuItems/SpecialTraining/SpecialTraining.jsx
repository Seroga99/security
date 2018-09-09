import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './SpecialTraining.css';
import ImageGallery from 'react-image-gallery';
import {images} from './img/allImages';


class SpecialTraining extends Component {
    render() {
        return (
            <div className='training__container'>
                <h3 className='training__title font-weight__bold' >Громадська організація «АЛЬЯНС КОНТРОЛЬ» НА БАЗІ ОХОРОННІЙ КОМПАНІЇ «АЛЬЯНС КОНТРОЛЬ» починає освітню програму для всіх бажаючих:</h3>
                <ImageGallery className='image__gallery' items={images} autoPlay={true} showBullets={true} showIndex={true} />   
                <p className='tarining__text'> 
                    Для реєстрації необхідно: <br/>
                    Вислати Заявку на участь на e-mail: <span className = 'color__red'> alyanskontrol@gmail.com </ span>, де
                    вказати П.І.Б. і дату народження; <br/>
                    Зателефонувати за номером: <span className = 'color__red'> 0950075458 </ span>, <span className = 'color__red'> 0442510008 </ span>,
                    <span className = 'color__red'> 0930760986 </span> і оформити Заявку на
                    участь, вказавши П.І.Б. і дату народження. <br/>
                    Додаткова інформація про час, місце проведення занять, формі
                    одягу, екіпіровці, плану занять, буде повідомлено по телефону.
                </p>
            </div>
        );
    }
}

// SpecialTraining.propTypes = {

// };

export default SpecialTraining;


