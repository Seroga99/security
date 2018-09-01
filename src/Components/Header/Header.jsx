import React from 'react';
import './Header.css';
import logo from './logo.png';


const Header = () => {
    return (
        <div className='header'>
           <div className='header__logo-container'>
               <a className='logo-container__link' href="#">
                    <img className='logo-container__img' src={logo} alt=""/>
               </a>
           </div>
           
           <ul className='header__nav'>
               <li className='nav__item'>
                    <a className="header__menu-link" href="/company">
                        Охоронна компанія
                    </a>
                    <ul className='company_list'>
                        <li className='company_item'>
                            <a className='company_link' href="http://">Загальне</a>
                        </li>
                        <li className='company_item'>
                            <a className='company_link' href="http://">Види послуг</a>
                        </li>
                        <li className='company_item'>
                            <a className='company_link' href="http://">Галерея</a>
                        </li>
                    </ul>
               </li>
               <li className='nav__item'>
                    <a className="header__menu-link" href="/preparation">
                        Тактико-спеціальна підготовка
                    </a>
               </li>
               <li className='nav__item item__sport-club'>
                    <a className="header__menu-link" href="/sportclub">
                        Спортивний клуб
                    </a>
                    <ul className='sportClub__list'>
                        <li className='sportClub__item'>
                            <a className='sportClub__link' href="http://">Бокс</a>
                        </li>
                        <li className='sportClub__item'>
                            <a className='sportClub__link' href="http://">Карате кіокушин</a>
                        </li>
                        <li className='sportClub__item'>
                            <a className='sportClub__link' href="http://">Муей Тай</a>
                        </li>
                    </ul>
               </li>
               <li className='nav__item'>
                    <a className="header__menu-link" href="/contacts">
                        Контакти
                    </a>
               </li>
           </ul>
        </div>
    )
}


export default Header;