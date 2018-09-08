import React, { Component } from 'react';
import './SportClubGeneral.css';
import {dataSport} from './dataSport';
import './SportClubGeneral.css';

class SportClubGeneral extends Component {
    render() {
        return (
            <div >
               
                {dataSport.map(el => <div className='container'><p className='paragraph'>{el.p}</p> <span className='text'>{el.text}</span></div>)}
            </div>
        );
    }
}

export default SportClubGeneral;