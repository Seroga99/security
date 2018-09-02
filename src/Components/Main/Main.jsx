import React from 'react';
import './Main.css';
import MainPages from '../Header/MenuItems/MainPages/MainPages';
import Common from '../../Components/Header/MenuItems/ProtectionCompany/Common/Common';
import TypesService from '../Header/MenuItems/ProtectionCompany/TypesService/TypesService';

import SpecialTraining from '../Header/MenuItems/SpecialTraining/SpecialTraining';
import {Route, Switch, Redirect} from 'react-router';

import Box from '../Header/MenuItems/SportsСlub/Box/Box';
import Karate from '../Header/MenuItems/SportsСlub/Karate/Karate';
import MuayThai from '../Header/MenuItems/SportsСlub/MuayThai/MuayThai';

import Gallery from '../Header/MenuItems/Gallery/Gallery';
import BoxGallery from '../Header/MenuItems/Gallery/BoxGallery/BoxGallery';
import KarateGallery from '../Header/MenuItems/Gallery/KarateGallery/KarateGallery';
import MuayThaiGallery from '../Header/MenuItems/Gallery/MuayThaiGallery/MuayThaiGallery';

import Contacts from '../Header/MenuItems/Contacts/Contacts';
const Main = () => {
    return (
        <div className='wrapper_main'>
        <Switch>
            <Route exact path='/' component={MainPages}/>
            <Route path='/Common' component={Common}/>
            <Route path='/TypesService' component={TypesService}/>

            <Route path='/SpecialTraining' component={SpecialTraining}/>

            <Route path='/Box' component={Box}/>
            <Route path='/Karate' component={Karate}/>
            <Route path='/MuayThai' component={MuayThai}/>

            <Route path='/Gallery' component={Gallery}/>
            <Route path='/BoxGallery' component={BoxGallery}/>
            <Route path='/KarateGallery' component={KarateGallery}/>
            <Route path='/MuayThaiGallery' component={MuayThaiGallery}/>

            <Route path='/Contacts' component={Contacts}/>
           

        {/* <GalleryProtection /> */}
        </Switch>
        </div>

    )
};


export default Main;

