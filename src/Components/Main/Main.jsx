import React from 'react';
import './Main.css';
import MainPages from '../Header/MenuItems/MainPages/MainPages';
import GalleryProtection from '../../Components/Header/MenuItems/ProtectionCompany/GalleryProtection/GalleryProtection';
import Common from '../../Components/Header/MenuItems/ProtectionCompany/Common/Common';
import TypesService from '../Header/MenuItems/ProtectionCompany/TypesService/TypesService';

import SpecialTraining from '../Header/MenuItems/SpecialTraining/SpecialTraining';
import {Route, Switch, Redirect} from 'react-router';

import Box from '../Header/MenuItems/SportsСlub/Box/Box';
import Karate from '../Header/MenuItems/SportsСlub/Karate/Karate';
import MuayThai from '../Header/MenuItems/SportsСlub/MuayThai/MuayThai';

import Contacts from '../Header/MenuItems/Contacts/Contacts';
const Main = () => {
    return (
        <div className='wrapper_main'>
        <Switch>
            <Route exact path='/' component={MainPages}/>
            <Route path='/GalleryProtection' component={GalleryProtection}/>
            <Route path='/Common' component={Common}/>
            <Route path='/TypesService' component={TypesService}/>

            <Route path='/SpecialTraining' component={SpecialTraining}/>

            <Route path='/Box' component={Box}/>
            <Route path='/Karate' component={Karate}/>
            <Route path='/MuayThai' component={MuayThai}/>

            <Route path='/Contacts' component={Contacts}/>
            <Redirect path='/'/>
        {/* <GalleryProtection /> */}
        </Switch>
        </div>

    )
};


export default Main;

