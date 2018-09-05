import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Contacts.css';
import GoogleMaps from './GoogleMaps/GoogleMaps';

class Contacts extends PureComponent {
    render() {
        return (
            <div>
                <GoogleMaps/>
            </div>
        );
    }
}

Contacts.propTypes = {

};

export default Contacts;