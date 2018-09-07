import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from 'react-router-dom'; 
import './Sidebar.css';
import triangle from './triangle.svg';
import youtube from './youtube.svg';
import facebook from './facebook.svg';


export default props => {
  return (
    <Menu {...props}>

    <ul className='berger-menu__list'>
    
      <li className='berger-menu__item'>  
        <NavLink className='burger-menu__part' to='/' activeClassName='company_link'>ГОЛОВНА</NavLink>     
      </li>

      <li className='berger-menu__item berger-menu__company'>  
        <span className="burger-menu__part menu-item" href="/company">
          ОХОРОННА КОМПАНІЯ
        </span>
        <img className='burger__triangle' src={triangle} alt="mort"/>
        <ul className='submenu__list company_list'>
          <li className='company_item'>
            <NavLink className='burger-menu__part' to='/Common' activeClassName='company_link'>&#8226; Загальне</NavLink>
          </li>
          <li className='company_item'>
            <NavLink className='burger-menu__part' to='/TypesService' activeClassName='company_link'>&#8226; Види послуг</NavLink>
          </li>
          <li className='company_item'>
            <NavLink className='burger-menu__part' to='/GalleryProtection' activeClassName='company_link'>&#8226; Галерея</NavLink>
          </li>
        </ul>
      </li>

      <li className='berger-menu__item'>      
        <NavLink className='burger-menu__part' to='/SpecialTraining' activeClassName='company_link'>ТАКТИКО-СПЕЦ ПІДГОТОВКА</NavLink>      
      </li>

      <li className='berger-menu__item berger-menu__item-sport'> 
        <span className="burger-menu__part menu-item menu-item-sport" href="/sportclub">
          СПОРТИВНИЙ КЛУБ
        </span>
        <img className='burger__triangle' src={triangle} alt="mort"/>
        <ul className='submenu__list sportClub__list'>
          <li className='sportClub__item'>
          <NavLink to='/General' className='burger-menu__part' activeClassName='company_link'>&#8226; Загальне</NavLink>
          </li>
          <li className='sportClub__item'>
            <NavLink to='/Gallery' className='burger-menu__part' activeClassName='company_link'>&#8226; Галерея</NavLink>
          </li>
          <li className='sportClub__item'>
            <NavLink to='/Rar' className='burger-menu__part' activeClassName='company_link'>&#8226; Архів</NavLink>
          </li>
        </ul>
      </li>

      <li className=' berger-menu__item'>      
        <NavLink className='burger-menu__part' to='/Сontacts' activeClassName='company_link'>КОНТАКТИ</NavLink>  
      </li>
    </ul>
    <div className='sidebar__contacts-container'>
      <ul className='sidebar-num__list'>
        <li className='sidebar-num__item'>
          <h5 className='sidebar-num__number'>+38 (095) 007-54-58</h5>
        </li>
        <li className='sidebar-num__item'>
          <h5 className='sidebar-num__number'>+38 (044) 251-00-08</h5>
        </li>
      </ul>
      <ul className='sidebar-networks__list'>
                <li className='item sidebar-networks__item'>
                    <a href="https://www.youtube.com/channel/UCRnWq73JZ316Kd_wsdbS1nQ" target="_blank">
                        <img className='contacts__networks-youtube' src={youtube} alt="youtube"/>
                    </a>
                 </li>
        <li className='item sidebar-networks__item'>
          <a href="https://www.facebook.com/groups/sportalyansecontrol/about/" target="_blank">
              <img className='contacts__networks-facebook' src={facebook} alt="facebook"/>
          </a>
        </li>
      </ul>
    </div>
    </Menu>
  );
};
  