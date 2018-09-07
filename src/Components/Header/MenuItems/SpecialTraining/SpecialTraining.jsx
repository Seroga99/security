import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './SpecialTraining.css';
import ImageGallery from 'react-image-gallery';
import {images} from './img/allImages';


class SpecialTraining extends Component {
    render() {
        return (
            <div className='training__container'>
                <h3 className='training__title' >Общественная организация «АЛЬЯНС КОНТРОЛЬ» НА БАЗЕ ОХРАННОЙ КОМПАНИИ «АЛЬЯНС КОНТРОЛЬ» начинает Образовательную программу для всех желающих:</h3>
                <ImageGallery className='image__gallery' items={images} autoPlay={true} showBullets={true} showIndex={true} />   
                <p className='tarining__text'> 
                    Для регистрации необходимо: <br/>
                    Выслать Заявку на участие на e-mail: <span className='color__green'>alyanskontrol@gmail.com</span>, где
                    указать Ф.И.О. и дату рождения; <br/>
                    Позвонить по телефону:<span className='color__green'> 0950075458</span>, <span className='color__green'> 0442510008</span>,  
                    <span className='color__green'> 0930760986</span> и оформить Заявку на
                    участие, указав Ф.И.О. и дату рождения. <br/>
                    Дополнительная информация о времени , месте проведения занятий, форме
                    одежды, экипировке , плана занятий, будет сообщено по телефону.
                </p>
            </div>
        );
    }
}

// SpecialTraining.propTypes = {

// };

export default SpecialTraining;


