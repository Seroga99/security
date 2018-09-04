import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
import logo from './logo.png';
import triangle from './triangle.svg';
// import {Route, Switch, NavLink} from 'react-router';


const Header = () => {
    return (
        <div className='header'>
           <div className='header__logo-container'>
               <NavLink  to='/' activeClassName='logo-container__link'>
                    <img className='logo-container__img' src={logo} alt=""/>
                    </NavLink>
           </div>
           
           <ul className='header__nav'>
                <li className='nav__item'>
                    <NavLink exact to='/' className="heder__top-menu header__menu-link" activeClassName='company_link'>ГОЛОВНА</NavLink>
               </li>
               <li className='nav__item'>
                    <span className="heder__top-menu header__menu-link" href="/company">
                        Охоронна компанія
                    </span>
                    <ul className='submenu__list company_list'>
                        <li className='company_item'>
                            <NavLink to='/Common'className="header__menu-link" activeClassName='company_link'>&#8226; Загальне</NavLink>
                        </li>
                        <li className='company_item'>
                            <NavLink to='/TypesService' className="header__menu-link" activeClassName='company_link'>&#8226; Види послуг</NavLink>
                        </li>
                        <li className='company_item'>
                            <NavLink to='/GalleryProtection' className="header__menu-link" activeClassName='company_link'>&#8226; Галерея</NavLink>
                        </li>
                    </ul>
                    <img className='item__triangle' src={triangle} alt="more"/>
               </li>
               <li className='nav__item'>
                    <NavLink to='/SpecialTraining' className="heder__top-menu header__menu-link" activeClassName='company_link'>ПІДГОТОВКА</NavLink>        
               </li>
               <li className='nav__item item__sport-club'>
                    <span className="heder__top-menu header__menu-link" href="/sportclub">
                        Спортивний клуб
                    </span>
                    <ul className='submenu__list sportClub__list'>
                        <li className='sportClub__item'>
                        <NavLink to='/General' className='submenu__item header__menu-link' activeClassName='company_link'>&#8226; Загальне</NavLink>
                        </li>
                        <li className='sportClub__item'>
                        <NavLink to='/Gallery' className='submenu__item header__menu-link' activeClassName='company_link'>&#8226; Галерея</NavLink>
                        </li>
                        <li className='sportClub__item'>
                        <NavLink to='/Rar' className='submenu__item header__menu-link' activeClassName='company_link'>&#8226; Архів</NavLink>
                        </li>   
                    </ul>
                    <img className='item__triangle' src={triangle} alt="more"/>
               </li>
               <li className='nav__item'>
                    <NavLink to='/Contacts' className="heder__top-menu header__menu-link" activeClassName='company_link'>КОНТАКТИ</NavLink>
               </li>
           </ul>
        </div>
    )
}


export default Header;