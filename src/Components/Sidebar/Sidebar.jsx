import React from "react";
import { push as Menu } from "react-burger-menu";
import {NavLink} from 'react-router-dom'; 
import './Sidebar.css';

export default props => {
  return (
    <Menu {...props}>
    <ul className='berger-menu__list'>
      <li className='berger-menu__item'>  
        <NavLink to='/Main' activeClassName='company_link'>ГОЛОВНА</NavLink>     
      </li>

      <li className='berger-menu__item berger-menu__company'>  
        <a className="menu-item" href="/company">
          Охоронна компанія
        </a>
        <ul className='company_list'>
          <li className='company_item'>
            <NavLink to='/Common' activeClassName='company_link'>Загальне</NavLink>
          </li>
          <li className='company_item'>
            <NavLink to='/TypesService' activeClassName='company_link'>Види послуг</NavLink>
          </li>
          <li className='company_item'>
            <NavLink to='/GalleryProtection' activeClassName='company_link'>Галерея</NavLink>
          </li>
        </ul>
      </li>

      <li className='berger-menu__item'>      
        <NavLink to='/SpecialTraining' activeClassName='company_link'>ПІДГОТОВКА</NavLink>      
      </li>

      <li className='berger-menu__item berger-menu__item-sport'> 
        <a className="menu-item menu-item-sport" href="/sportclub">
          СПОРТИВНИЙ КЛУБ
        </a>
        <ul className='sportClub__list'>
          <li className='sportClub__item'>
            <NavLink to='/Box' activeClassName='company_link'>Бокс</NavLink>
          </li>
          <li className='sportClub__item'>
            <a className='sportClub__link' href="http://"></a>
            <NavLink to='/Karate' activeClassName='company_link'>Карате</NavLink>  
          </li>
          <li className='sportClub__item'>
            <NavLink to='/MuayThai' activeClassName='company_link'>Муей Тай</NavLink>  
          </li>
        </ul>
      </li>
      <li className='berger-menu__item'>
         <NavLink to='/Gallery' activeClassName='company_link'>ГАЛЕРЕЯ</NavLink>
      </li>
      <li className='berger-menu__item'>      
        <NavLink to='/Сontacts' activeClassName='company_link'>КОНТАКТИ</NavLink>  
      </li>
    </ul>
    </Menu>
  );
};
