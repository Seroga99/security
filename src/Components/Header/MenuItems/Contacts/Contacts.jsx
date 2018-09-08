import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Contacts.css';
import GoogleMaps from './GoogleMaps/GoogleMaps';
import ContactForm from './ContactForm/ContactForm';

class Contacts extends PureComponent {
    render() {
        return (
            <div>
                <GoogleMaps/>
                <ContactForm/>
            </div>
        );
    }
}

Contacts.propTypes = {

};

export default Contacts;