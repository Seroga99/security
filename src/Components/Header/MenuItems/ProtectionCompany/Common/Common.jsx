import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Common'
import DataComon from './dataComon'

class Common extends PureComponent {
    render() {
        return (
            <div>
            <DataComon/>
            </div>
        );
    }
}

Common.propTypes = {

};

export default Common;