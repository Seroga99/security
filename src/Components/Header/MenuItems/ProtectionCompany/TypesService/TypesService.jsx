import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DataTypesServis from './DataTypesServis'
const propTypes = {
    
};


class TypesService extends PureComponent {
    render() {
        return (
            <div>
                <DataTypesServis/>
            </div>
        );
    }
}


TypesService.propTypes = propTypes;


export default TypesService;
