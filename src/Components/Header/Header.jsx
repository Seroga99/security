import React from 'react';
import './Header.css';
import logo from './logo.png';
// import {Route, Switch, NavLink} from 'react-router';
import {NavLink} from 'react-router-dom';


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
                    <NavLink exact to='/' activeClassName='company_link'>ГОЛОВНА</NavLink>
               </li>
               <li className='nav__item'>
                    <a className="header__menu-link" href="/company">
                        Охоронна компанія
                    </a>
                    <ul className='company_list'>
                        <li className='company_item'>
                            <NavLink to='/Common' activeClassName='company_link'>Загальне</NavLink>
                        </li>
                        <li className='company_item'>
                            <NavLink to='/TypesService' activeClassName='company_link'>Види послуг</NavLink>
                        </li>
                    </ul>
               </li>
               <li className='nav__item'>
                    <NavLink to='/SpecialTraining' activeClassName='company_link'>ПІДГОТОВКА</NavLink>        
               </li>
               <li className='nav__item item__sport-club'>
                    <a className="header__menu-link" href="/sportclub">
                        Спортивний клуб
                    </a>
                    <ul className='sportClub__list'>
                        <li className='sportClub__item'>

                        <NavLink to='/Box' activeClassName='company_link'>Бокс</NavLink>
                        </li>
                        <li className='sportClub__item'>
                        <NavLink to='/Karate' activeClassName='company_link'>Карате</NavLink>
                        </li>
                        <li className='sportClub__item'>
                        <NavLink to='/MuayThai' activeClassName='company_link'>Муей Тай</NavLink>
                        </li>
                    </ul>
               </li>
               <li className='nav__item'>
                    <NavLink to='/Gallery' activeClassName='company_link'>
                        ГАЛЕРЕЯ
                    </NavLink>
               </li>
               <li className='nav__item'>
                    <NavLink to='/Contacts' activeClassName='company_link'>
                        КОНТАКТИ
                    </NavLink>
               </li>
           </ul>
        </div>
    )
}


export default Header;