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
        <NavLink className='burger-menu__part' to='/SpecialTraining' activeClassName='company_link'> ПІДГОТОВКА</NavLink>      
      </li>

      <li className='berger-menu__item berger-menu__item-sport'> 
        <span className="burger-menu__part menu-item menu-item-sport" href="/sportclub">
          СПОРТИВНИЙ КЛУБ
        </span>
        <img className='burger__triangle' src={triangle} alt="mort"/>
        <ul className='submenu__list sportClub__list'>
          <li className='sportClub__item'>
            <NavLink className='burger-menu__part' to='/Box' activeClassName='company_link'>&#8226; Бокс</NavLink>
          </li>
          <li className='sportClub__item'>
            <NavLink className='burger-menu__part' to='/Karate' activeClassName='company_link'>&#8226; Карате</NavLink>  
          </li>
          <li className='sportClub__item'>
            <NavLink className='burger-menu__part' to='/MuayThai' activeClassName='company_link'>&#8226; Муей Тай</NavLink>  
          </li>
        </ul>
      </li>

      <li className='berger-menu__item'>
         <NavLink className='burger-menu__part' to='/Gallery' activeClassName='company_link'>ГАЛЕРЕЯ</NavLink>
      </li>

      <li className=' berger-menu__item'>      
        <NavLink className='burger-menu__part' to='/Сontacts' activeClassName='company_link'>КОНТАКТИ</NavLink>  
      </li>
    </ul>
    <ul className='contacts__networks-list'>
                <li className='item contacts__networks-item'>
                    <a href="https://www.youtube.com/channel/UCRnWq73JZ316Kd_wsdbS1nQ" target="_blank">
                        <img className='contacts__networks-youtube' src={youtube} alt="youtube"/>
                    </a>
                </li>
                <li className='item contacts__networks-item'>
                    <a href="https://www.facebook.com/groups/sportalyansecontrol/about/" target="_blank">
                        <img className='contacts__networks-facebook' src={facebook} alt="facebook"/>
                    </a>
                </li>
            </ul>
    </Menu>
  );
};
